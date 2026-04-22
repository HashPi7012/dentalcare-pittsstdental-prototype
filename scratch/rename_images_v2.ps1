$i = 1
Get-ChildItem 'public/images/Acreditations/acred-*.png' | Sort-Object { [int]($_.BaseName -replace 'acred-','') } | ForEach-Object {
    $newName = "acred-v2-$i.png"
    Rename-Item $_.FullName $newName
    $i++
}
