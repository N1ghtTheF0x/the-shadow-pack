Get-Content .env | ForEach-Object {
    $name, $value = $_.Split('=')
    Set-Content env:$name $value
}

$env:PRE16_INSTANCES.Split(';') | ForEach-Object {
    Copy-Item -Path ".\out\The Shadow Pack - pre-1.6.zip" -Destination "$_\The Shadow Pack - pre-1.6.zip"
}