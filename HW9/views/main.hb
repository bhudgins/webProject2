<!DOCTYPE html>
<html>
    <head>
        <title>Directory</title>
        <meta charset="UTF-8">
    </head>
    <body>
        Current directory: <strong>{{currentDirectory1}}</strong><br>
        {{setDirectory currentDirectory1}}
        {{#each entries}}
            {{isDirectory this}}
        {{/each}}

        <form method="post" enctype="multipart/form-data" action="/upload">
            <p><input type="file" name="file1" /></p>
            <p><input type ="submit" value="Upload"/></p>
        </form>
    </body>
</html>