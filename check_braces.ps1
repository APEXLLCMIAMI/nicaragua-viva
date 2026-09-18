$content = Get-Content 'js\main.js' -Raw -Encoding UTF8
$open = ([regex]::Matches($content, '\{')).Count
$close = ([regex]::Matches($content, '\}')).Count
$openBr = ([regex]::Matches($content, '\[')).Count
$closeBr = ([regex]::Matches($content, '\]')).Count
Write-Host "main.js Open braces: $open"
Write-Host "main.js Close braces: $close"
Write-Host "main.js Brace diff: $($open - $close)"
Write-Host "main.js Open brackets: $openBr"
Write-Host "main.js Close brackets: $closeBr"
Write-Host "main.js Bracket diff: $($openBr - $closeBr)"

$content2 = Get-Content 'data\nicaragua-data.js' -Raw -Encoding UTF8
$open2 = ([regex]::Matches($content2, '\{')).Count
$close2 = ([regex]::Matches($content2, '\}')).Count
$openBr2 = ([regex]::Matches($content2, '\[')).Count
$closeBr2 = ([regex]::Matches($content2, '\]')).Count
Write-Host "data.js Open braces: $open2"
Write-Host "data.js Close braces: $close2"
Write-Host "data.js Brace diff: $($open2 - $close2)"
Write-Host "data.js Open brackets: $openBr2"
Write-Host "data.js Close brackets: $closeBr2"
Write-Host "data.js Bracket diff: $($openBr2 - $closeBr2)"
