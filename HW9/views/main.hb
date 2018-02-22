<!DOCTYPE html>
<html>
<head>
<title>Directory</title>
<meta charset="UTF-8">
</head>
<body>
Current directory: <strong>{{currentDirectory}}</strong><br>
{{#each entries}}
    <a href="./{{this}}">{{this}}</a><br>
{{/each}}

<form method="post" enctype="multipart/form-data">
<p><input type="file" name="file1" /></p>
<p><input type ="submit" value="Upload"/></p>
</form>
</body>

</html>