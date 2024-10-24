# Repo qrcode
<image alt="qr code" src="./qrcode.png">

# Prerequisite
- Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Install browser [chrome](https://www.google.com/intl/en_uk/chrome/dr/download/?brand=WHAR&gad_source=1&gclid=CjwKCAjwmaO4BhAhEiwA5p4YL740lfzwMDG4kfitqPF9CtceNiXHTZoE3tKaEumDhDZdxwyCx4_uuRoCJUsQAvD_BwE&gclsrc=aw.ds)
- Basic knowledge of [git](https://git-scm.com/book/en/v2) (branches and checkout)
- Basic programming knowledge (arrays, functions, variables, etc.) Recommended books [How to think like a computer scientist](https://www.amazon.sg/dp/0971677506?ref_=mr_referred_us_sg_sg), [javascript.info](https://javascript.info/)

## What we will cover
- Some basic of vanila html, css, javascript

## What we will build today
- Personal card
- Survey form

## Useful links
- [w3school](https://www.w3schools.com/html/default.asp)
- [javascript.info](https://javascript.info/)

# What is Html?
Html stands for Hyper Text Markup Language. It is the standard markup language for creating websites.

Other markup languages are 
- XML which is used for data-transfer or UI in android studio
- MD which is used to create this documentation

## Syntax of html element
```html
<openTag attribute="value">content<closeTag>

Example
<span title="tool tip">Hello world</span>
```

## Visualization of the structure of the HTML 5 page
<div style="border: 1px solid; padding: 10px;">
    &lt;html&gt;
    <div style="border: 1px solid; padding: 10px; margin: 10px;">
        &lt;head&gt;
        <div style="border: 1px solid; padding: 10px; margin: 10px;">
            &lt;title&gt;Page title &lt;&sol;title&gt;
        </div>
        &lt;&sol;head&gt;
    </div>
    <div style="border: 1px solid; padding: 10px; margin: 10px;">
        &lt;body&gt;
        <h1 style="border: 1px solid; padding: 10px; margin: 10px;">
            &lt;h1&gt;This is a heading 1&lt;&sol;h1&gt;
        </h1>
        <h2 style="border: 1px solid; padding: 10px; margin: 10px;">
            &lt;h2&gt;This is a heading2&lt;&sol;h2&gt;
        </h2>
        <p title="paragraph" style="border: 1px solid; padding: 10px; margin: 10px;">
            &lt;p&nbsp;title&equals;&quot;paragraph&quot;&gt;This is a paragraph&lt;&sol;p&gt;
        </p>
        &lt;&sol;body&gt;
    </div>
    &lt;&sol;html&gt;
</div>

## Some Html 5 elements
```html
<h1>Heading 1</h1>
...
<h6>Heading 6</h6>
<a>Anchor tag</a>
<br/>
<hr />
<p>This is a paragraph</p>

Generic elements
<div></div>
<span></span>

Form elements
<form></form>
<input />
<select>
    <option></option>
    <option></option>
    <option></option>
</select>
<label></label>
<button></button>
```

## Lab
- cd into directory
```bash 
cd ./html
```
- create index.html
```bash
touch lab1.html
```
- open fiile in vscode
```bash
code ./lab1.html
```

### Lab 1
Can you strucutre a personal card in html using div and spans? Make sure it includes image, name, university, course, skills, email, location

# CSS 
Css stand for Cascading Style Sheets. It is used to format the layout and style the webpage.

## CSS can be used in 3 ways:
- Inline
```html
<span style="color: red;">Hello world<span>
```
- Internal 
```html
<html>
    <head>
        <style> 
            span {
                color: red;
            }
        </style>
    </head>
    <body>
        <span>Hello world</span>
    </body>
</html>
```
- External

index.html
```html
<html>
    <head>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <span>Hello world</span>
    </body>
</html>
```
style.css

```css
span {
    color: red;
}
```

## CSS selectors
A CSS selector selects the HTML element(s) you want to style.

- [Simple selectors](#simple-selectors) (select elements based on name, id, class)
- [Combinator selectors](#combinator-selectors) (select elements based on a specific relationship between them)
- [Pseudo-class selectors](#pseudo-class-selectors) (select elements based on a certain state)
- [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp) (select and style a part of an element)
- [Attribute selectors](#attribute-selectors) (select elements based on an attribute or attribute value)


### Simple selectors
id, class and element names can be used
```css
span {
    color: red;
}

#hello-world {
    color: red;
}

.text {
    color: red;
}
```

### Combinator selectors

### Pseudo-class selectors

### Attribute selectors