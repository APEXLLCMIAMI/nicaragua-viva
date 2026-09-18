$path = "c:\Users\olive\OneDrive\Documentos\UCN\TRABAJO WEB CRSITIANONV\data\nicaragua-data.js"
$content = Get-Content $path -Encoding UTF8 -Raw

$updates = @{
  "gallo-pinto" = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhRUPHx2FBRwZnWKYmowCz3mzLSGrrTZ55PzFvdTa0w&s=10"
  "nacatamal"   = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjlVQiL5NmrUvVQ53ThgOmjiuwLm3H9brlvN90leA9A&s=10"
  "vigoron"     = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkksMtD2tCb0xzT8L41NYdrDwAUuNjC9Vszm2YWtJ8Q&s=10"
  "quesillo"    = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iHa3uG-KAU6s0S9OkeZmcgQk0pYF9zIzlQdz7QVaeg&s=10"
  "rondon"      = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiKWumOTLahGeSzSoTa-F-Af0ryXx0tyVnpsfg1g1Aw&s=10"
  "indio-viejo" = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIngZH0Lb7aZ85nAn_PW6UAIxUk2sQ-qsbar6s3uxMQ&s=10"
  "pinolillo"   = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeXFYaAFqUoZNa5MlaFcbXGrTzN932z5iIQAS5PJh5g&s=10"
}

foreach ($key in $updates.Keys) {
  $url = $updates[$key]
  $pattern = "(id:\s*`"$key`"[\s\S]*?image:\s*`")(.*?)(`")"
  $content = [regex]::Replace($content, $pattern, "`${1}$url`${3}")
}

Set-Content -Path $path -Value $content -Encoding UTF8
Write-Host "Done"
