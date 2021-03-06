/*

Zelektor
A simple JavaScript selector engine

The MIT License (c) 2014, Joshua Beam

*/

(function() {
	if(!('getElementsByClassName' in document)) {
	
		document.getElementsByClassName = function(className) {
			
			if( 'querySelectorAll' in this ) {
				
				return this.querySelectorAll('.'+className);
				
			} //else {
//			
//				var element = this.getElementsByTagName('*'),
//					i = 0,
//					len = element.length,
//					result = [];
//
//				for(;i<len;i++) {
//					if(element[i].className.indexOf(className) > -1) {
//						result.push(element[i]);
//					}
//				}
//
//				return result;
//
//			}
		}
		
	}
	
	// Won't work in IE < 8 (no Element.prototype until IE8)
	if(!('getElementsByClassName' in Element.prototype)) {
			Element.prototype.getElementsByClassName = document.getElementsByClassName;
	}
	
	function insertThisBeforeThat(newElement,element) {
		element.parentElement.insertBefore(newElement,element);
	}

	function insertThisAfterThat(newElement,element) {
		element.parentNode.insertBefore(newElement, element.nextSibling);
	}

	function appendThisToThat(newElement,element) {
		element.appendChild(newElement);
	}

	function prependThisToThat(newElement,element) {
		element.insertBefore(newElement,element.firstChild);
	}

	function parseStringToHTML(string) {
		var wrapper = document.createElement('div'),
			newElement;

		wrapper.innerHTML = string;
		newElement = wrapper.firstChild;

		return newElement;
	}
	
	function makeArray(object) {
//		Using this instead of [].slice because IE<9 does not support
//		using [].slice for nodeList objects.
		var result = [],
			i = 0,
			len = object.length;
		
		for(;i<len;i++) {
			result.push(object[i]);
		}
		
		return result;
	}

	return function() {
		var args = arguments,
			len = args.length,
			selector = args[0],
			method,
			context,
			where,
			location,
			newElement,
			element;

		if(len<3) {

//			Handle Zelekt( selector = string, context = string|undefined );
			if(typeof selector === 'string') {

				context = args[1] ? args[1][0] : document;

//				Map the first character of the selector string to a method, like getElementById
//				Similar to switch, case, default, but uses a plain object instead
				method = {
//					'case'
					'#':'getElementById',
					'.':'getElementsByClassName',
					'@':'getElementsByName',
					'*':'querySelectorAll'
//									'default'
				}[selector[0]] || 'getElementsByTagName';

//				If 'getElementsByTagName', selector is the full string (e.g., 'div')
//				If any other method, selector is the full string minues the first char (e.g. someClass)
				selector = method.indexOf('Tag') > -1 ? selector : selector.slice(1);

//				For example, document['getElementById']('myDiv')
				element = context[method](selector);

//				The element is made into an array, regardless of the number of elements
				element = element.nodeType === 1 ? [element] : makeArray(element);

//			Handle Zelekt(DOMElement)
			} else if (selector.nodeType === 1) {

				element = [selector];

			} else if (selector instanceof Array) {
				
				element = selector;
				
			}

//			Handle Zelekt( selector = HTML string , where = appendTo|prependTo|before|after, location = Zelekt('foo') );
//			For example, Zelekt('<div id="someID" class="someClass"></div>','appendTo',Zelekt('div'));
		} else if (len===3) {
			where = args[1];
			location = args[2][0];
			newElement = parseStringToHTML(selector);

			switch(where) {
				case 'appendTo':
					appendThisToThat(newElement,location);
					break;
				case 'prependTo':
					prependThisToThat(newElement,location);
					break;
				case 'before':
					insertThisBeforeThat(newElement,location);
					break;
				case 'after':
					insertThisAfterThat(newElement,location);
					break;
			}

			element = [newElement];

		}

		return element;

	}
})()