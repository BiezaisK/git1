@ECHO OFF

mkdir proj
cd proj
mkdir css
mkdir js
cd css
copy NUL style.css
cd ../js
copy NUL main.js
cd ..
echo ^<!DOCTYPE html^>^ > index.html
echo ^<html lang="en"^>^ >> index.html
echo ^<head^>^ >> index.html
echo(   ^<meta charset="utf-8"^>^ >> index.html
echo(   ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>^ >> index.html
echo(   ^<title^>Proj</title^>^ >> index.html
echo(   ^<link rel="stylesheet" href="css/style.css"^>^ >> index.html
echo ^</head^>^ >> index.html
echo ^<body^>^ >> index.html
echo(    >> index.html
echo   ^<script src="js/main.js"^>^</script^> >> index.html
echo ^</body^>^ >> index.html
echo ^</html^>^ >> index.html