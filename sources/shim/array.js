if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (what, i) {
		i = i || 0;
		var L = this.length;
		while (i < L) {
			if (this[i] === what) return i;
			++i;
		}
		return -1;
	};
}
Array.prototype.remove = function () {
	var what, a = arguments,
		L = a.length,
		ax;
	while (L && this.length) {
		what = a[--L];
		while ((ax = this.indexOf(what)) !== -1) {
			this.splice(ax, 1);
		}
	}
	return this;
};
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {
	Array.prototype.map = function (callback, thisArg) {
		var T, A, k;
		if (this === null) {
			throw new TypeError(" this is null or not defined");
		}
		// 1. Let O be the result of calling ToObject passing the |this| 
		//    value as the argument.
		var O = Object(this);
		// 2. Let lenValue be the result of calling the Get internal 
		//    method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;
		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== "function") {
			throw new TypeError(callback + " is not a function");
		}
		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (arguments.length > 1) {
			T = thisArg;
		}
		// 6. Let A be a new array created as if by the expression new Array(len) 
		//    where Array is the standard built-in constructor with that name and 
		//    len is the value of len.
		A = new Array(len);
		// 7. Let k be 0
		k = 0;
		// 8. Repeat, while k < len
		while (k < len) {
			var kValue, mappedValue;
			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal 
			//    method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {
				// i. Let kValue be the result of calling the Get internal 
				//    method of O with argument Pk.
				kValue = O[k];
				// ii. Let mappedValue be the result of calling the Call internal 
				//     method of callback with T as the this value and argument 
				//     list containing kValue, k, and O.
				mappedValue = callback.call(T, kValue, k, O);
				// iii. Call the DefineOwnProperty internal method of A with arguments
				// Pk, Property Descriptor
				// { Value: mappedValue,
				//   Writable: true,
				//   Enumerable: true,
				//   Configurable: true },
				// and false.
				// In browsers that support Object.defineProperty, use the following:
				// Object.defineProperty(A, k, {
				//   value: mappedValue,
				//   writable: true,
				//   enumerable: true,
				//   configurable: true
				// });
				// For best browser support, use the following:
				A[k] = mappedValue;
			}
			// d. Increase k by 1.
			k++;
		}
		// 9. return A
		return A;
	};
}
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
	Array.prototype.reduce = function (callback /*, initialValue*/ ) {
		"use strict";
		if (this === null) {
			throw new TypeError("Array.prototype.reduce called on null or undefined");
		}
		if (typeof callback !== "function") {
			throw new TypeError(callback + " is not a function");
		}
		var t = Object(this),
			len = t.length >>> 0,
			k = 0,
			value;
		if (arguments.length == 2) {
			value = arguments[1];
		} else {
			while (k < len && !(k in t)) {
				k++;
			}
			if (k >= len) {
				throw new TypeError("Reduce of empty array with no initial value");
			}
			value = t[k++];
		}
		for (; k < len; k++) {
			if (k in t) {
				value = callback(value, t[k], k, t);
			}
		}
		return value;
	};
}
// Production steps of ECMA-262, Edition 5, 15.4.4.22
// Reference: http://es5.github.io/#x15.4.4.22
if ("function" !== typeof Array.prototype.reduceRight) {
	Array.prototype.reduceRight = function (callback /*, initialValue*/ ) {
		"use strict";
		if (null === this || "undefined" === typeof this) {
			throw new TypeError("Array.prototype.reduce called on null or undefined");
		}
		if ("function" !== typeof callback) {
			throw new TypeError(callback + " is not a function");
		}
		var t = Object(this),
			len = t.length >>> 0,
			k = len - 1,
			value;
		if (arguments.length >= 2) {
			value = arguments[1];
		} else {
			while (k >= 0 && !(k in t)) {
				k--;
			}
			if (k < 0) {
				throw new TypeError("Reduce of empty array with no initial value");
			}
			value = t[k--];
		}
		for (; k >= 0; k--) {
			if (k in t) {
				value = callback(value, t[k], k, t);
			}
		}
		return value;
	};
}
// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
	Array.prototype.some = function (fun /*, thisArg*/ ) {
		"use strict";
		if (this === null) {
			throw new TypeError("Array.prototype.some called on null or undefined");
		}
		if (typeof fun !== "function") {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;
		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t && fun.call(thisArg, t[i], i, t)) {
				return true;
			}
		}
		return false;
	};
}
if (!Array.prototype.every) {
	Array.prototype.every = function (callbackfn, thisArg) {
		"use strict";
		var T, k;
		if (this === null) {
			throw new TypeError("this is null or not defined");
		}
		// 1. Let O be the result of calling ToObject passing the this 
		//    value as the argument.
		var O = Object(this);
		// 2. Let lenValue be the result of calling the Get internal method
		//    of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;
		// 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
		if (typeof callbackfn !== "function") {
			throw new TypeError();
		}
		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (arguments.length > 1) {
			T = thisArg;
		}
		// 6. Let k be 0.
		k = 0;
		// 7. Repeat, while k < len
		while (k < len) {
			var kValue;
			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal 
			//    method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {
				// i. Let kValue be the result of calling the Get internal method
				//    of O with argument Pk.
				kValue = O[k];
				// ii. Let testResult be the result of calling the Call internal method
				//     of callbackfn with T as the this value and argument list 
				//     containing kValue, k, and O.
				var testResult = callbackfn.call(T, kValue, k, O);
				// iii. If ToBoolean(testResult) is false, return false.
				if (!testResult) {
					return false;
				}
			}
			k++;
		}
		return true;
	};
}
Array.prototype.dataCount = function () {
	"use strict";
	return this.length;
};
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function forEach(callback, thisArg) {
		var T, k;
		if (this === null) {
			throw new TypeError("this is null or not defined");
		}
		var O = Object(this);
		var len = O.length >>> 0; // Hack to convert O.length to a UInt32
		if ({}.toString.call(callback) !== "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}
		if (thisArg) {
			T = thisArg;
		}
		k = 0;
		while (k < len) {
			var kValue;
			if (Object.prototype.hasOwnProperty.call(O, k)) {
				kValue = O[k];
				callback.call(T, kValue, k, O);
			}
			k++;
		}
	};
}
if (!Array.prototype.contains) {
	Array.prototype.contains = function (value) {
		for (var p = 0; p < this.length; p++) {
			if (this[p] === value) return true;
		}
		return false;
	};
}
Array.prototype.clean = function (deleteValue) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == deleteValue) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};