# Read main.js as raw bytes, then as Latin-1 (which preserves every byte as-is)
$rawBytes = [System.IO.File]::ReadAllBytes('js\main.js')
$latin1Content = [System.Text.Encoding]::Latin1.GetString($rawBytes)

# Now convert double-encoded UTF-8 (garbled sequences) back to proper UTF-8
# This happens when UTF-8 bytes were interpreted as Latin-1/Windows-1252
# We need to go byte-by-byte: treat the Latin-1 string as if it's actually UTF-8

# The fix: re-encode from Latin-1 bytes to UTF-8 string
$fixedContent = [System.Text.Encoding]::UTF8.GetString($rawBytes)

# Save as proper UTF-8 without BOM
[System.IO.File]::WriteAllText('js\main.js', $fixedContent, [System.Text.Encoding]::UTF8)
Write-Host "File re-saved as UTF-8"

# Verify fix - count remaining 0xC3 bytes
$newBytes = [System.IO.File]::ReadAllBytes('js\main.js')
$remaining = 0
foreach ($b in $newBytes) {
    if ($b -eq 0xC3) { $remaining++ }
}
Write-Host "Remaining 0xC3 bytes: $remaining"
