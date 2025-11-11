pnpm build

$cdir=Get-Location

Get-Item out/* | ForEach-Object {
    $version = $_.BaseName
    $filename = "$cdir\out\The Shadow Pack - $version.zip"
    Compress-Archive -Force -Path "$_\*" -DestinationPath $filename
}
