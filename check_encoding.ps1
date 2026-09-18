# Read both files as UTF-8
$mainContent = [System.IO.File]::ReadAllText('js\main.js', [System.Text.Encoding]::UTF8)
$dataContent = [System.IO.File]::ReadAllText('data\nicaragua-data.js', [System.Text.Encoding]::UTF8)

# Check encoding of first few chars of both files
Write-Host "main.js BOM: " ([System.Text.Encoding]::UTF8.GetPreamble() -eq ([System.IO.File]::ReadAllBytes('js\main.js') | Select-Object -First 3))
Write-Host "data.js BOM: " ([System.Text.Encoding]::UTF8.GetPreamble() -eq ([System.IO.File]::ReadAllBytes('data\nicaragua-data.js') | Select-Object -First 3))

# Look for any non-ASCII corrupted sequences - search for the 0xC3 byte (UTF-8 multi-byte start)
$mainBytes = [System.IO.File]::ReadAllBytes('js\main.js')
$corruptCount = 0
for ($i = 0; $i -lt $mainBytes.Length - 1; $i++) {
    # Check for garbled UTF-8 that was decoded as Latin-1
    # ð is 0xC3 0xB0 in UTF-8, but if decoded as Latin-1, 0xC3 = Ã and 0xB0 = °
    if ($mainBytes[$i] -eq 0xC3) {
        $corruptCount++
    }
}
Write-Host "Potentially corrupted UTF-8 sequences in main.js: $corruptCount"
