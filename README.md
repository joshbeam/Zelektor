# Zelektor

A simple JavaScript selector engine (weighs about 830 bytes minified).

Returns an array of one or more DOM elements.

*For limited use in production environments due to lack of browser testing.*

### Use it:

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
`Zelekt(document.getElementById('foo')) // => [div#foo]`

### Issues:

- Lack of testing across multiple browsers
- Only supports CSS-style selectors through `querySelectorAll`

<hr>

The MIT License - (c) 2014, Joshua Beam