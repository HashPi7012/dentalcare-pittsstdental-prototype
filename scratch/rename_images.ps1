$i = 1
Get-ChildItem 'public/images/Acreditations/Screenshot*' | ForEach-Object {
    $newName = "acred-$i.png"
    Rename-Item $_.FullName $newName
    $i++
}
