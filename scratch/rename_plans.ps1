Get-ChildItem 'implementation plans/*.md' | ForEach-Object {
    $newName = $_.BaseName.ToUpper() + ".md"
    Rename-Item $_.FullName $newName
}
