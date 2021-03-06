# Zelektor

####Recent updates:
- 31 March 2014 &mdash; document.getElementsByClassName polyfill redone and tested in IE8 (stable); no polyfill for IE5, 6, or 7
- 25 March 2014 &mdash; document.getElementsByClassName polyfill for IE<9 (uses querySelectorAll for IE8, and loops through all elements for IE<8)

A simple JavaScript selector engine (weighs about 1kb minified).

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
`$('#foo') // => [div#foo]`<br><br>

`getElementsByClassName`<br>
`$('.foo') // => [div.foo, div.foo]`<br><br>

`getElementsByName`<br>
`$('@foo') // => [div, div]`<br><br>

`getElementsByTagName`<br>
`$('div') // => [div, div, div, div]`<br><br>

`querySelectorAll`<br>
(put an asterisk before whatever CSS2/3-style selector you'd like to use)<br>
`$('*div > input') // => [input, input]`<br><br>

Also accepts a `DOMElement` for cases in which recursive selection is necessary:<br>
`$(document.getElementById('foo')) // => [div#foo]`<br><br>

Set the context of the selector if you want:<br>
`$('.foo', $('#bar')) // => [div.foo]`<br><br>

You can also create an element and return it as your selection:<br>
```javascript
var newElement = $( '<div id="foo" class="bar"></div>', 'appendTo', $('.baz') ); // => [div#foo.bar]

var html = $('.baz')[0].innerHTML;        // => '<div id="foo" class="bar"></div>'
```

### Issues:

- Limited browser testing
- Only supports CSS-style selectors through `querySelectorAll`

<hr>

The MIT License - (c) 2014, Joshua Beam