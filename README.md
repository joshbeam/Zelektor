# Zelektor

A simple JavaScript selector engine (weighs about 830 bytes minified).

Returns an array of one or more DOM elements.

*For limited use in production environments due to lack of browser testing.*

### Use it:

Assign the module to whatever variable you want:
```javascript
var Zelekt = //Zelektor.min.js code goes here
//Or
var $ = //Zelektor.min.js code goes here


// Then...

var divs = Zelekt('div');
//OR
var divs = $('div');
```


`getElementById`<br>
`Zelekt('#foo') // => [div#foo]`<br><br>

`getElementsByClassName`<br>
`Zelekt('.foo') // => [div.foo, div.foo]`<br><br>

`getElementsByName`<br>
`Zelekt('@foo') // => [div, div]`<br><br>

`getElementsByTagName`<br>
`Zelekt('div') // => [div, div, div, div]`<br><br>

`querySelectorAll`<br>
(put an asterisk before whatever CSS2/3-style selector you'd like to use)<br>
`Zelekt('*div > input') // => [input, input]`<br><br>

Also accepts a `DOMElement` for cases in which recursive selection is necessary:<br>
`Zelekt(document.getElementById('foo')) // => [div#foo]`<br><br>

You can also create an element and return it as your selection:<br>
```javascript
var newElement = Zelekt( '<div id="foo" class="bar"></div>', 'appendTo', Zelekt('.baz') ); // => [div#foo.bar]

var html = Zelekt('.baz')[0].innerHTML;        // => '<div id="foo" class="bar"></div>'
```

### Issues:

- Lack of testing across multiple browsers
- Only supports CSS-style selectors through `querySelectorAll`

<hr>

The MIT License - (c) 2014, Joshua Beam