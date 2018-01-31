# Tools.EmailTemplateEngine

## Instalations and development

### Install

``` bash
$ cd my-project
$ npm install gulpjs/gulp-cli -g
$ npm install
```

### Dev mode

``` bash
$ cd my-project
$ gulp
```

### Build results

``` bash
$ cd my-project
$ gulp build
```

## Filters

### : tr[(options)] [text]

use:

``` pug
table: tr
    td text
```

result:

``` xml
<table>
    <tr>
        <td>text</td>
    </tr>
</table>
```

### : td[(options)] [text]

use:

``` pug
table: tr: td text
```

result:

``` xml
<table>
    <tr>
        <td>text</td>
    </tr>
</table>
```

use:

``` pug
table: tr: td(bgcolor="red")!= 'text <br> text'
```

result:

``` xml
<table>
    <tr>
        <td bgcolor="red">text <br> text</td>
    </tr>
</table>
```

### : div[(options)] [text]

use:

``` pug
table
    tr
        td: div(color="red") text
```

result:

``` xml
<table>
    <tr>
        <td>
            <div color="red">text</div>
        </td>
    </tr>
</table>
```

use:

``` pug
div: div(style="font-size: 10px;") text
```

result:

``` xml
<div>
    <div style="font-size: 10px;">text</div>
</div>
```

### : span[(options)] [text]

use:

``` pug
div: span!= 'text <br> text'
```

result:

``` xml
<div>
    <span>text <br> text</span>
</div>
```

use:

``` pug
div: span(style=" color: red;") text
```

result:

``` xml
<div>
    <span style=" color: red;">text</span>
</div>
```

## Mixins

### +table([width], [height])[(attributes)] [content]

default attributes:

``` pug
[align="center"]
[bgcolor="transparent"]
[cellpadding="0"]
[cellspacing="0"]
[border="0"]
```

default styles:

``` css
font-size: 0;
margin: 0;
padding: 0;
```

use:

``` pug
+table(): tr: td text
```

result:

``` xml
<table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td>text</td>
        </tr>
    </tbody>
</table>
```

use:

``` pug
+table(bgcolor="red" style=" font-size: 20px; border: 1px solid #333;"): tr: td text
```

result:

``` xml
 <table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="red" style="margin: 0; padding: 0; font-size: 20px; border: 1px solid #333;">
    <tbody>
        <tr>
            <td>text</td>
        </tr>
    </tbody>
</table>
```

### +td([width], [height])[(attributes)] [content]

default attributes:

``` pug
[valign="top"]
[align="center"]
```

use:

``` pag
table: tr
    +td() text
```

result:

``` xml
<table>
    <tr>
        <td width="100%" valign="top" align="left">text</td>
    </tr>
</table>
```

use:

``` pug
+table(): tr
    +td('', '100')(bgcolor="red" align="right") text
```

result:

``` xml
<table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="" height="100" valign="top" align="right" bgcolor="red">text</td>
        </tr>
    </tbody>
</table>
```

### +h1()[(attributes)] content

default styles:

``` css
font-family: Arial, Helvetica, sans-serif;
font-size: 40px;
font-weight: bold;
text-align: center;
line-height: 1.15em;
margin: 0;
padding: 0;
```

use:

``` pug
+h1() text
```

result:

``` xml
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="40" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
<h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 40px; font-weight: bold; text-align: center; line-height: 1.15em; margin: 0; padding: 0;">text</h1>
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="30" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
```

### +h2()[(attributes)] content

default styles:

``` css
font-family: Arial, Helvetica, sans-serif;
font-size: 32px;
font-weight: normal;
text-align: center;
line-height: 1.15em;
margin: 0;
padding: 0;
```

use:

``` pug
+h2() text
```

result:

``` xml
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="30" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
<h2 style="font-family: Arial, Helvetica, sans-serif; font-size: 32px; font-weight: normal; text-align: center; line-height: 1.15em; margin: 0; padding: 0;">text</h2>
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="20" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
```

### +h3()[(attributes)] content

default styles:

``` css
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: left;
line-height: 1.35em;
margin: 0;
padding: 0;
```

use:

``` pug
+h3() text
```

result:

``` xml
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="32" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
<h3 style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: bold; text-align: left; line-height: 1.35em; margin: 0; padding: 0;">text</h3>
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="16" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
```

### +text(color)[(attributes)] content

use:

``` pug
+text("red") text
```

result:

``` xml
<div style="color: red;">text</div>
```

### +p()[(attributes)] content

default styles:

``` css
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
font-weight: normal;
line-height: 1.45em;
margin: 0 0 1.2em;
padding: 0;
```

use:

``` pug
+p() text
```

result:

``` xml
<p style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.45em; margin: 0 0 1.2em; padding: 0;">text</p>
```

use:

``` pug
+p()!= 'text <a href="link">text link</a> text'
```

result:

``` xml
<p style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal; line-height: 1.45em; margin: 0 0 1.2em; padding: 0;">text <a href="link">text link</a> text</p>
```

### +i()[(attributes)] content

``` css
font-style: italic
```

use:

``` pug
+i() text
```

result:

``` xml
<span style="font-style: italic;">text</span>
```

### +ul()[(attributes)] content

default styles:

``` css
margin: 0;
padding: 0 0 0 20px;
list-style: none;
```

### +li()[(attributes)] content

``` css
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
line-height: 1.45em;
margin: 0 0 0.5em;
padding: 0;
list-style: none;
```

### +hr(color)

use:

``` pug
+hr('#333')
```

result:

``` xml
<table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td style="border-bottom: 1px solid #333;"></td>
        </tr>
    </tbody>
</table>
```

### +image(width, height, imageUrl, bgColor)[(attributes)]

use:

``` pug
+image('50', '50', 'image_link')
```

result:

``` xml
<img width="50" height="50" src="image_link" />
```

### +bg(width, height, bgImage, bgColor)[(attributes)] [content]

use:

``` pug
+bg('50', '50', 'image_link', '#333') text
```

result:

``` xml
<table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td valign="top" background="image_link" bgcolor="#333" style="background-repeat: no-repeat;" width="50" height="50">
            <!--[if mso]><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 50; height: 50;"><v:fill type="tile" src="image_link" color="#333" /><v:textbox style="mso-fit-shape-to-text:false" inset="0,0,0,0"><![endif]-->
            <!--<div>-->text<!--</div>-->
            <!--[if mso]></v:textbox></v:rect><![endif]-->
            </td>
        </tr>
    </tbody>
</table>
```

### +link(link)[(attributes)] content

default styles:

``` css
font-family: Arial, Helvetica, sans-serif;
```

use:

``` pug
+link(link) text
```

result:

``` xml
<a style="font-family: Arial, Helvetica, sans-serif;">text</a>
```

### +button(width, height, link, bgColor, borderColor, color)[(attributes)] content

use:

``` pug
+button('180', '36', url, '#333', '#fff', '#333') text
```

result:

``` xml
<table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="180" height="36" style="border: 1px solid #333; font-family: Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal;" valign="middle" align="center" bgcolor="#fff">
                <a style="font-family: Arial, Helvetica, sans-serif;text-decoration: none; width:100%; display: block; color: #333; cursor: pointer; line-height: 36px;" _target="blank">text</a>
            </td>
        </tr>
    </tbody>
</table>
```

### +blockText(color)[(attributes)] content

use:

``` pug
+blockText('#333') text
```

result:

``` xml
<table width="560" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td>
                <div style="color: #333;">text</div>
            </td>
        </tr>
    </tbody>
</table>
```

### +space(size)[(attributes)] - add horizontal space

use:

``` pug
+table(): tr
    +space(30)
    +td(20) text
    +space(30)
```

result:

``` xml
 <table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="30" valign="top" align="left"></td>
            <td width="20" valign="top" align="left">text</td>
            <td width="30" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
```

### +space(size, 'tr')[(attributes)]

> add vertical space, root tag "tr"

use:

``` pug
+table()
    tr: td text
    +space(30, 'tr')
    tr: td text
```

result:

``` xml
<table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td>text</td>
        </tr>
        <tr>
            <td width="100%" height="30" valign="top" align="left"></td>
        </tr>
        <tr>
            <td>text</td>
        </tr>
    </tbody>
</table>
```

### +space(size, 'table')[(attributes)] - add vertical space, root tag "table"

use:

``` pug
+space(30, 'table')
```

result:

``` xml
 <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="transparent" style="margin: 0; padding: 0;">
    <tbody>
        <tr>
            <td width="100%" height="30" valign="top" align="left"></td>
        </tr>
    </tbody>
</table>
```

### +vRectStart(width, height, bgImage, bgColor) && +vRectEnd()

use:

``` pug
+vRectStart('50', '50', 'link', '#333')
div text
+vRectEnd()
```

result:

``` xml
<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 50; height: 50;">
    <v:fill type="tile" src="link" color="#333" />
    <v:textbox style="mso-fit-shape-to-text:false" inset="0,0,0,0">
        <div>text</div>
    </v:textbox>
</v:rect>
```

use:

``` pug
+vRectStart('50', '50', 'link', '#333')
| text
+vRectEnd()
```

result:

``` xml
 <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 50; height: 50;">
    <v:fill type="tile" src="link" color="#333" />
    <v:textbox style="mso-fit-shape-to-text:false" inset="0,0,0,0">text</v:textbox>
</v:rect>
```

### +mso()

use:

``` pug
+mso() text
```

result:

``` xml
<!--[if mso]>text<![endif]-->
```
