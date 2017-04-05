/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/www/codebase/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(16);
var forIn = __webpack_require__(61);

/**
 * Similar to Array/forEach but works over object properties and fixes Don't
 * Enum bug on IE.
 * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
 */
function forOwn(obj, fn, thisObj) {
    forIn(obj, function (val, key) {
        if (hasOwn(obj, key)) {
            return fn.call(thisObj, obj[key], key, obj);
        }
    });
}

module.exports = forOwn;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_collections_owner_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decepticons_collections_pet_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronBaseModel_js__ = __webpack_require__(26);
// import all application collections here





const _conf = {
	topic_main: "Unicron.queue",
	topic_data_change: "data.change",
	topic_data_change_local: "data.change.local",
	topic_data_change_remote: "data.change.remote",
	collections: {
		"owner": __WEBPACK_IMPORTED_MODULE_0_decepticons_collections_owner_js__["a" /* ownerDataCollection */],
		"pet": __WEBPACK_IMPORTED_MODULE_1_decepticons_collections_pet_js__["a" /* petDataCollection */]
	},
	models: {
		"owner": __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronBaseModel_js__["a" /* UnicronBaseModel */],
		"pet": __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronBaseModel_js__["a" /* UnicronBaseModel */]
	}
};
const config = (() => {
	return _conf;
})();
/* harmony export (immutable) */ __webpack_exports__["a"] = config;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var kindOf = __webpack_require__(15);
/**
 * Check if value is from a specific "kind".
 */
function isKind(val, kind) {
    return kindOf(val) === kind;
}
module.exports = isKind;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(42);
var prop = __webpack_require__(43);
var deepMatches = __webpack_require__(58);

/**
 * Converts argument into a valid iterator.
 * Used internally on most array/object/collection methods that receives a
 * callback/iterator providing a shortcut syntax.
 */
function makeIterator(src, thisObj) {
    if (src == null) {
        return identity;
    }
    switch (typeof src) {
        case 'function':
            // function is the first to improve perf (most common case)
            // also avoid using `Function#call` if not needed, which boosts
            // perf a lot in some cases
            return typeof thisObj !== 'undefined' ? function (val, i, arr) {
                return src.call(thisObj, val, i, arr);
            } : src;
        case 'object':
            return function (val) {
                return deepMatches(val, src);
            };
        case 'string':
        case 'number':
            return prop(src);
    }
}

module.exports = makeIterator;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * [UnicronEventSystem implement application events]
 * @type {constructor}
 */
class UnicronEventSystem {
    constructor(parentNodeElement) {
        this.root = parentNodeElement || document;
        this._events = {};

        this.attach = this.on;
        this.attachEvent = this.on;

        this.dispatch = this.trigger;
        this.dispatchEvent = this.trigger;
    }
    on(name, handler, c) {
        const self = this;
        let event = null;
        c = c || {};
        if (typeof self._events[name] === 'undefined') {
            if (document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(name, true, true);
            } else {
                event = new Event(name); // CustomEvent
            }
            self._events[name] = {
                event: event,
                handlers: []
            };
        }
        self._events[name].handlers.push(handler);
        if (name == 'onApplicationStart') {
            self.root.addEventListener(name, function (e) {
                handler.call(self, e);
            }, false);
        } else if (name == 'onRegisterTopic') {
            console.log('--- onRegisterTopic');
            self.root.addEventListener(name, function (e) {
                console.log('xxxxxx onRegisterTopic');
                handler.call(self, e);
            }, false);
        }
        //
        else if (name == 'onComponentStart') {
                self.root.addEventListener(name, function (e) {
                    handler.call(self, e);
                }, false);
            } else if (name == 'onApplicationReady') {
                self.root.addEventListener(name, function (e) {
                    handler.call(self, e);
                }, false);
            } else if (name == 'onSessionStart') {
                self.root.addEventListener(name, function (e) {
                    handler.call(self, e);
                }, false);
            } else if (name == 'onLocalDatabaseReady') {
                self.root.addEventListener(name, function (e) {
                    handler.call(self, e);
                }, false);
            } else if (name == 'onRemoteDatabaseReady') {
                self.root.addEventListener(name, function (e) {
                    handler.call(self, e);
                }, false);
            } else {
                throw new Error('Can not add listener to an unkown event');
            }
    }
    trigger(name) {
        var self = this;
        if (self._events[name]) self.root.dispatchEvent(self._events[name].event);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronEventSystem;


const _root = window || global;
(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

_root.decepticons.helpers.UnicronEventSystem = UnicronEventSystem;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mout_lang_isString__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mout_lang_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mout_lang_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mout_lang_isBoolean__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mout_lang_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mout_lang_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mout_lang_isNumber__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mout_lang_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mout_lang_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mout_lang_isObject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mout_lang_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mout_lang_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mout_lang_isDate__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mout_lang_isDate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mout_lang_isDate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mout_lang_isFunction__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mout_lang_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mout_lang_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mout_lang_isUndefined__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mout_lang_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mout_lang_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mout_lang_isArray__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_mout_lang_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mout_lang_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mout_lang_isEmpty__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mout_lang_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mout_lang_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mout_lang_toString__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mout_lang_toString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mout_lang_toString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mout_lang_toNumber__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mout_lang_toNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_mout_lang_toNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mout_object_get__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mout_object_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_mout_object_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mout_object_deepMixIn__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mout_object_deepMixIn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_mout_object_deepMixIn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_mout_object_deepFillIn__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_mout_object_deepFillIn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_mout_object_deepFillIn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mout_object_forOwn__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_mout_object_forOwn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_mout_object_forOwn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_mout_object_keys__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_mout_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_mout_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_mout_object_pick__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_mout_object_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_mout_object_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_mout_object_filter__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_mout_object_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_mout_object_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_mout_object_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_mout_object_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_mout_object_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_mout_object_merge__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_mout_object_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_mout_object_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_mout_object_unset__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_mout_object_unset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_mout_object_unset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_mout_array_contains__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_mout_array_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_mout_array_contains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_mout_array_intersection__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_mout_array_intersection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_mout_array_intersection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_mout_array_difference__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_mout_array_difference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_mout_array_difference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mout_array_unique__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mout_array_unique___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mout_array_unique__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_mout_number_toInt__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_mout_number_toInt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_mout_number_toInt__);






























/* harmony default export */ __webpack_exports__["a"] = ({
  isString: __WEBPACK_IMPORTED_MODULE_0_mout_lang_isString___default.a,
  isBoolean: __WEBPACK_IMPORTED_MODULE_1_mout_lang_isBoolean___default.a,
  isNumber: __WEBPACK_IMPORTED_MODULE_2_mout_lang_isNumber___default.a,
  isObject: __WEBPACK_IMPORTED_MODULE_3_mout_lang_isObject___default.a,
  isDate: __WEBPACK_IMPORTED_MODULE_4_mout_lang_isDate___default.a,
  isFunction: __WEBPACK_IMPORTED_MODULE_5_mout_lang_isFunction___default.a,
  isUndefined: __WEBPACK_IMPORTED_MODULE_6_mout_lang_isUndefined___default.a,
  isArray: __WEBPACK_IMPORTED_MODULE_7_mout_lang_isArray___default.a,
  isEmpty: __WEBPACK_IMPORTED_MODULE_8_mout_lang_isEmpty___default.a,
  toString: __WEBPACK_IMPORTED_MODULE_9_mout_lang_toString___default.a,
  toNumber: __WEBPACK_IMPORTED_MODULE_10_mout_lang_toNumber___default.a,

  'get': __WEBPACK_IMPORTED_MODULE_11_mout_object_get___default.a,
  deepMixIn: __WEBPACK_IMPORTED_MODULE_12_mout_object_deepMixIn___default.a,
  deepFillIn: __WEBPACK_IMPORTED_MODULE_13_mout_object_deepFillIn___default.a,
  forOwn: __WEBPACK_IMPORTED_MODULE_14_mout_object_forOwn___default.a,
  keys: __WEBPACK_IMPORTED_MODULE_15_mout_object_keys___default.a,
  pick: __WEBPACK_IMPORTED_MODULE_16_mout_object_pick___default.a,
  filter: __WEBPACK_IMPORTED_MODULE_17_mout_object_filter___default.a,
  map: __WEBPACK_IMPORTED_MODULE_18_mout_object_map___default.a,
  merge: __WEBPACK_IMPORTED_MODULE_19_mout_object_merge___default.a,
  unset: __WEBPACK_IMPORTED_MODULE_20_mout_object_unset___default.a,

  contains: __WEBPACK_IMPORTED_MODULE_21_mout_array_contains___default.a,
  intersection: __WEBPACK_IMPORTED_MODULE_22_mout_array_intersection___default.a,
  difference: __WEBPACK_IMPORTED_MODULE_23_mout_array_difference___default.a,
  unique: __WEBPACK_IMPORTED_MODULE_24_mout_array_unique___default.a,

  toInt: __WEBPACK_IMPORTED_MODULE_25_mout_number_toInt___default.a,

  errMsg(rule, actual, expected) {
    return {
      rule,
      actual,
      expected
    };
  },

  parallel(tasks, cb) {
    var results = {};
    var completed = 0;
    var length = 0;

    __WEBPACK_IMPORTED_MODULE_14_mout_object_forOwn___default()(tasks, () => {
      length += 1;
    });

    __WEBPACK_IMPORTED_MODULE_14_mout_object_forOwn___default()(tasks, function (task, key) {
      task(function (err) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (args.length <= 1) {
          args = args[0];
        }
        results[key] = args;
        done(err);
      });
    });

    function done(err) {
      completed += 1;
      if (err || completed >= length) {
        cb(err, results);
      }
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
var isArray = Array.isArray || function (val) {
    return isKind(val, 'Array');
};
module.exports = isArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/**
 * Checks if the value is created by the `Object` constructor.
 */
function isPlainObject(value) {
    return !!value && typeof value === 'object' && value.constructor === Object;
}

module.exports = isPlainObject;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronPubSub_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__ = __webpack_require__(2);



class UnicronMessagingClient {
    constructor(entity) {
        this.pubsub = new __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronPubSub_js__["a" /* UnicronPubSub */]();
        this.entity = entity;

        this.topic = entity.topic || __WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__["a" /* config */].topic_main;

        //this.listener = this._listener.bind( this.entity );

        this._subscribe();

        entity.subscriber = this.subscriber;
        entity.publish = this.publish;
    }
    _listener(message) {
        //console.log("message", message);
        console.log("message.detail", message.detail);
        //console.log("message.type", message.type);
        //console.log("message.timeStamp",message.timeStamp);
        console.log('scope of this:::: ', this);
    }
    get listener() {
        return this._listener;
    }
    set listener(newFunction) {
        if (newFunction) this._listener = newFunction.bind(this.entity);

        this.pubsub.unsubscribe(this.subscriber.id);

        this._subscribe();
    }
    _subscribe() {
        //console.log( 'XXXXXXXXXX UnicronMessagingClient _subscribe' );
        this.subscriber = this.pubsub.subscribe(this.topic, this._listener, this.entity);
    }
    publish(message, topic) {
        topic = topic || this.topic;
        message.from = this.subscriber.uid;
        this.pubsub.publish(topic, message);
    }
    _registerTopic() {
        this.pubsub._registerTopic(topic);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronMessagingClient;


const _root = window || global;
(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

(namespace => {
    'use strict';
})(_root.decepticons.helpers.messenger = _root.decepticons.helpers.messenger || {});
_root.decepticons.helpers.messenger.UnicronMessagingClient = UnicronMessagingClient;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * [UnicronWeapons util class]
 * @type {constructor}
 */
class UnicronWeapons {
    constructor() {
        /**
         * [uid description]
         * @type {guid}
         */
        this.uid = this.guid();
        if (typeof window.___temp_Unicron === 'undefined') window.___temp_Unicron = {};
        /**
         * [window.___temp_Unicron temporary cache]
         * @type {Associative array}
         */
        window.___temp_Unicron[this.uid] = {
            es5modules: {}
        };
        /**
         * [onDemand Queue used to load ondemand files.]
         * @type {Object}
         */
        this.onDemand = {
            queue: []
        };
        /**
         * [_queue_active is the ondemand queue being processed]
         * @type {Boolean}
         */
        this._queue_active = false;
        /**
         * [_es5modules quick access to loaded es5 modules]
         * @type {Associative array}
         */
        this._es5modules = {};
    }

    /**
     * [load description]
     * @param  {[type]}   url      [description]
     * @param  {Function} callback [description]
     * @param  {[type]}   update   [description]
     * @return {[type]}            [description]
     */
    load(url, callback, update) {
        const self = this;

        update = update || false;

        if (Array.isArray(url)) {
            self._enqueue(url.map(function (path) {
                return {
                    url: path,
                    callback: callback,
                    update: update
                };
            }));
        } else {
            self._enqueue({
                url: url,
                callback: callback,
                update: update
            });
        }

        self.process_queue();
    }

    _requestES5Module(url, callback, update) {
        let self = this,
            arrType,
            type,
            s,
            nodeType,
            node,
            tag_id = url.split("?")[0];

        arrType = url.split(".");
        type = arrType[arrType.length - 1];

        if (!update) {
            if (document.getElementById(url) != null) {
                callback();
                return;
            }
        }

        if (url.indexOf(".css") != -1) {
            nodeType = "link";
            node = document.createElement(nodeType);
            node.setAttribute("rel", "stylesheet");
            node.setAttribute("type", "text/css");
        } else {
            nodeType = "script";
            node = document.createElement(nodeType);
            node.setAttribute("type", "text/javascript");
        }

        node.setAttribute("id", url);

        self.fetch(url, request => {

            let responseTex = request.responseText,
                uid = self.uid;
            node.textContent = `window.___temp_Unicron["${uid}"].es5modules["${url}"] = (function(_root) {  ${responseTex} })(window);`;
            document.getElementsByTagName('head')[0].appendChild(node);
            self._es5modules[url] = window.___temp_Unicron[uid].es5modules[url];
            callback();
        });
    }

    _enqueue(c) {
        this.onDemand.queue.push(c);
    }

    process_queue() {
        let self = this,
            first_on_queue = '';

        if (self._queue_active) return;

        if (self.onDemand.queue.length > 0) {
            self._queue_active = true;

            first_on_queue = self.onDemand.queue.shift();

            self._requestES5Module(first_on_queue.url, () => {

                first_on_queue.callback(self._es5modules[first_on_queue.url]);
                self.process_queue();
            }, first_on_queue.update);
        } else {
            self._queue_active = false;
        }
    }

    fetch(url, fnCallBack) {
        const request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();
        request.onreadystatechange = () => {
            if (request.readyState == 4 && request.status == 200) {
                if (fnCallBack) fnCallBack(request);
            }
        };
    }

    uid() {
        return (Date.now() & 0x7fff).toString(32) + (0x100000000 * Math.random()).toString(32);
    }

    S4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    guid() {
        var self = this;
        return self.S4() + self.S4() + "-" + self.S4() + "-" + self.S4() + "-" + self.S4() + "-" + self.S4() + self.S4() + self.S4();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronWeapons;


const _root = window || global;
(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

_root.decepticons.helpers.UnicronWeapons = UnicronWeapons;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(39);

/**
 * If array contains values.
 */
function contains(arr, val) {
    return indexOf(arr, val) !== -1;
}
module.exports = contains;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__(4);

/**
 * Array filter
 */
function filter(arr, callback, thisObj) {
    callback = makeIterator(callback, thisObj);
    var results = [];
    if (arr == null) {
        return results;
    }

    var i = -1,
        len = arr.length,
        value;
    while (++i < len) {
        value = arr[i];
        if (callback(value, i, arr)) {
            results.push(value);
        }
    }

    return results;
}

module.exports = filter;

/***/ }),
/* 13 */
/***/ (function(module, exports) {



/**
 * Create slice of source array or array-like object
 */
function slice(arr, start, end) {
    var len = arr.length;

    if (start == null) {
        start = 0;
    } else if (start < 0) {
        start = Math.max(len + start, 0);
    } else {
        start = Math.min(start, len);
    }

    if (end == null) {
        end = len;
    } else if (end < 0) {
        end = Math.max(len + end, 0);
    } else {
        end = Math.min(end, len);
    }

    var result = [];
    while (start < end) {
        result.push(arr[start++]);
    }

    return result;
}

module.exports = slice;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(12);

/**
 * @return {array} Array of unique items
 */
function unique(arr, compare) {
    compare = compare || isEqual;
    return filter(arr, function (item, i, arr) {
        var n = arr.length;
        while (++i < n) {
            if (compare(item, arr[i])) {
                return false;
            }
        }
        return true;
    });
}

function isEqual(a, b) {
    return a === b;
}

module.exports = unique;

/***/ }),
/* 15 */
/***/ (function(module, exports) {



var _rKind = /^\[object (.*)\]$/,
    _toString = Object.prototype.toString,
    UNDEF;

/**
 * Gets the "kind" of value. (e.g. "String", "Number", etc)
 */
function kindOf(val) {
    if (val === null) {
        return 'Null';
    } else if (val === UNDEF) {
        return 'Undefined';
    } else {
        return _rKind.exec(_toString.call(val))[1];
    }
}
module.exports = kindOf;

/***/ }),
/* 16 */
/***/ (function(module, exports) {



/**
 * Safer Object.hasOwnProperty
 */
function hasOwn(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = hasOwn;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UnicronBaseDataCollection {
    constructor() {
        this.name = "basec_ollection";
        this.relations = {};
    }
    afterCreate() {
        console.log('afterCreate');
    }
    beforeCreate(resource, data, cb) {
        console.log('beforeCreate');
        cb(null, data);
    }
    afterUpdate(resource, data, cb) {
        console.log('afterUpdate');
        cb(null, data);
    }
    beforeUpdate(resource, data, cb) {
        console.log('beforeUpdate');
        cb(null, data);
    }
    afterCreateInstance(resource, data) {
        console.log('afterCreateInstance');
        return data;
    }
    afterDestroy(Resource, data, cb) {
        console.log('afterDestroy');
        cb(null, data);
    }
    afterEject(Resource, data) {
        console.log('afterEject');
        return data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronBaseDataCollection;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_data_schema_lib_index_js__ = __webpack_require__(35);




/*

console.log( Schemator )
*/

class UnicronDataStoreAPI {
    constructor(PersistenceLayer, collectionName, modelName) {

        this.name = collectionName;
        this.modelName = modelName;
        this.PersistenceLayer = PersistenceLayer;
        this.messaging_client = this.PersistenceLayer.messaging_client;
        this.branch = this.PersistenceLayer.branch;

        this._page_size = 20;
        this._currentPage = 1;
        /*this._relations = {}
        this._schema = {
            name: {
                type: 'string',
                nullable: true,
                minLength: 5
            }
        }*/
        const rObj = new __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].collections[this.name]();
        console.log(rObj);
        this.collection = this.PersistenceLayer.defineResource(rObj);
    }
    bind() {}
    sync() {}
    create(record) {
        const self = this;
        return new Promise((resolve, reject) => {
            self._create(record).then(function (item) {
                const re = {};
                for (let p in item) {
                    if (item.hasOwnProperty(p)) re[p] = item[p];
                }

                if (self.branch == 'local') {
                    self.messaging_client.publish({
                        action: 'create', // create, update, delete, list,
                        collection: self.name,
                        model: 'owner',
                        data: re
                    });
                }

                resolve(item);
            }).catch(reason => {
                reject(reason);
            });
        });
    }
    _create(record) {
        const self = this,
              model = new __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].models[this.modelName](record ? record : {});
        //model = new UnicronBaseModel( record ? record : {} ) // replace by owner model
        //console.log( model )
        return self.collection.create(model);
    }
    update() {}
    remove() {}
    get(param) {
        return this.collection.get(param);
    }
    set() {}
    filter() {}
    findAll(c) {
        c = c || {};
        return this.collection.findAll(c);
    }
    validate(store, item, cb) {
        /*var err = validate(item, productSchema)
        if (err) {
          cb(err)
        } else {
          // pass the item along 
          
        }*/
        console.log(item);
        cb(null, item);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronDataStoreAPI;


/**
 * 
 * 

    1 - read model names from famd
    2 - import models schema to namespace
    3 - generate schemas into namespace -> schemator.defineSchema
    4 - create database resources -> store.defineResource


    Schema

    http://www.js-data.io/v2.9/docs/js-data-schema


    EVENTS

    http://www.js-data.io/v2.9/docs/events
    
    DS.beforeCreate
    DS.afterCreate
    DS.beforeUpdate
    DS.afterUpdate
    DS.beforeDestroy
    DS.afterDestroy
    DS.beforeInject
    DS.afterInject
    DS.beforeEject
    DS.afterEject
    DS.beforeReap
    DS.afterReap
    __________________________________


    Schema
    http://www.js-data.io/v2.9/docs/js-data-schema

 *
 *
 * 
 */

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = ({
  string(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'string');
  },
  number(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'number');
  },
  integer(x) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(x)) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'integer');
    } else if (Math.abs(x) - Math.abs(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].toInt(x)) !== 0) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', 'real', 'integer');
    } else {
      return null;
    }
  },
  float(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'float');
  },
  array(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isArray(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'array');
  },
  object(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'object');
  },
  boolean(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isBoolean(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'boolean');
  },
  date(x) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isDate(x) ? null : __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('type', typeof x, 'date');
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataTypes__ = __webpack_require__(19);



/* harmony default export */ __webpack_exports__["a"] = ({
  nullable(x, nullable) {
    return (x === null || x === undefined) && !nullable ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('nullable', `x === ${x}`, 'x !== null && x !== undefined') : null;
  },
  max(x, max) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(x) && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(max) && x > max ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('max', `${x} > ${max}`, `${x} <= ${max}`) : null;
  },
  min(x, min) {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(x) && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(min) && x < min ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('min', `${x} < ${min}`, `${x} >= ${min}`) : null;
  },
  maxLength(x, maxLength) {
    return (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(x) || __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isArray(x)) && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(maxLength) && x.length > maxLength ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('maxLength', `${x.length} > ${maxLength}`, `${x.length} <= ${maxLength}`) : null;
  },
  minLength(x, minLength) {
    return (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(x) || __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isArray(x)) && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isNumber(minLength) && x.length < minLength ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].errMsg('minLength', `${x.length} < ${minLength}`, `${x.length} >= ${minLength}`) : null;
  },
  type(x, type, customType, parent) {
    return customType ? customType(x) : parent.dataTypes[type] ? parent.dataTypes[type](x) : __WEBPACK_IMPORTED_MODULE_1__dataTypes__["a" /* default */][type] ? __WEBPACK_IMPORTED_MODULE_1__dataTypes__["a" /* default */][type](x) : null;
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
function isObject(val) {
    return isKind(val, 'Object');
}
module.exports = isObject;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isPrimitive = __webpack_require__(51);

/**
 * get "nested" object property
 */
function get(obj, prop) {
    var parts = prop.split('.'),
        last = parts.pop();

    while (prop = parts.shift()) {
        obj = obj[prop];
        if (obj == null) return;
    }

    return obj[last];
}

module.exports = get;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_Unicron_js__ = __webpack_require__(25);


const _root = window || global;

(namespace => {
  'use strict';
})(_root.decepticons = _root.decepticons || {});

_root.decepticons.Unicron = __WEBPACK_IMPORTED_MODULE_0_decepticons_Unicron_js__["a" /* Unicron */];

const decepticons = (() => {
  return _root.decepticons;
})();
/* harmony export (immutable) */ __webpack_exports__["a"] = decepticons;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decepticons_UnicronEventSystem_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronWeapons_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronLocalPersistenceLayer_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_decepticons_UnicronRemotePersistenceLayer_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_decepticons_UnicronMessagingClient_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_decepticons_UnicronSessionSystem_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_decepticons_UnicronBasicComponent_js__ = __webpack_require__(27);










class Unicron extends __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronWeapons_js__["a" /* UnicronWeapons */] {
    constructor(c) {
        const config = c || {},
              app = config.app,
              root = config.root,
              uid = '';

        super();

        this.uid = this.guid();

        this.config = config;
        self.famd = null;
        this.famdURI = config.famd;

        this.environment = 'dev';

        // is this an offline application?
        this.offline_application = false;

        this.app = app || this;
        this.root = root || document.body;

        this.events = new __WEBPACK_IMPORTED_MODULE_1_decepticons_UnicronEventSystem_js__["a" /* UnicronEventSystem */]();

        this.topic = __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].topic_main; // mandatory to be used together UnicronMessagingClient
        this.messaging_client = new __WEBPACK_IMPORTED_MODULE_5_decepticons_UnicronMessagingClient_js__["a" /* UnicronMessagingClient */](this);
        // now this.listener and this.publish are available
        this.messaging_client.listener = this.listener;

        this.session = null;
    }

    start(fnCallBack) {
        const self = this;
        self.events.trigger('onApplicationStart');

        window.UnicronLocalPersistenceLayer = new __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronLocalPersistenceLayer_js__["a" /* UnicronLocalPersistenceLayer */](this);
        console.log(window.UnicronLocalPersistenceLayer);

        if (!this.offline_application) {
            window.UnicronRemotePersistenceLayer = new __WEBPACK_IMPORTED_MODULE_4_decepticons_UnicronRemotePersistenceLayer_js__["a" /* UnicronRemotePersistenceLayer */](this);
            console.log(window.UnicronRemotePersistenceLayer);
        }

        self.session = new __WEBPACK_IMPORTED_MODULE_6_decepticons_UnicronSessionSystem_js__["a" /* UnicronSessionSystem */]();
        self.events.trigger('onSessionStart');

        self.fetch(self.famdURI, request => {
            self.famd = JSON.parse(request.responseText);
            //console.log( self.famd )

            // now use FAMD 
            self.events.trigger('onApplicationReady');
            if (fnCallBack) fnCallBack();
        });
    }

    listener() {
        //console.log("message", message)
        console.log("message.detail", message.detail);
        //console.log("message.type", message.type)
        //console.log("message.timeStamp",message.timeStamp)
        console.log('scope of this: Unicron');
    }

    destroy() {
        // remote database
        // local database
        // event system
        // session
        // temporary window scope
        // DAO
        // dao_http_adapter
        // dao_indexeddb_adapter
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Unicron;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronWeapons_js__ = __webpack_require__(10);


class UnicronBaseModel {
    constructor(obj) {
        for (var p in obj) {
            this[p] = obj[p];
        }
        if (obj) {
            if (obj.id) {
                this.id = obj.id;
            } else {
                this.id = new __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronWeapons_js__["a" /* UnicronWeapons */]().guid();
            }
            this.active = obj.active === null || obj.active === undefined ? true : obj.active;
            this.createdAt = obj.createdAt || new Date().toISOString();
            this.updatedAt = obj.updatedAt || new Date().toISOString();
        } else {
            this.id = new __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronWeapons_js__["a" /* UnicronWeapons */]().guid();
            this.active = true;
            this.createdAt = new Date().toISOString();
            this.updatedAt = null;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronBaseModel;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__ = __webpack_require__(2);


class UnicronBasicComponent {
    constructor(app) {
        //super();
        this.app = app;
        this._listenToTopic = __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].topic_data_change_remote;
        this._publishToTopic = __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].topic_data_change_local;
        //this.id = c.guid();

        this.events = this.app.events;

        this.session = this.app.session;

        this.events.trigger('onComponentStart');

        this.topic = 'data.change.local'; // mandatory to be used together UnicronMessagingClient
        this.messaging_client = new UnicronMessagingClient(this);
        // now this.listener and this.publish are available
        this.messaging_client.listener = message => {
            //console.log("message", message);
            console.log("message.detail", message.detail);
            //console.log("message.type", message.type);
            //console.log("message.timeStamp",message.timeStamp);
            console.log('scope of this: UnicronBasicComponent');
        };
    }

    destroy() {
        // destroy listener
    }

    _start() {
        // register component listener as a PubSub Listener

    }
}

const _root = window || global(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.components = _root.decepticons.components || {});

_root.decepticons.components.UnicronBasicComponent = UnicronBasicComponent;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decepticons_UnicronMessagingClient_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronEventSystem_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronDataStoreAPI_js__ = __webpack_require__(18);


//import { JSData, DataStore } from "../js-data/src/index.js" // js-data 3.0
//import { HttpAdapter } from '../js-data-http/src/index.js' // js-data 3.0







class UnicronLocalPersistenceLayer extends JSData.DS {
    constructor(app) {

        const adapter = new DSLocalForageAdapter();

        super();

        this.branch = "local";

        this.app = app || {};

        this.events = this.app.events || new __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronEventSystem_js__["a" /* UnicronEventSystem */]();

        this.topic = __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].topic_data_change; // mandatory to be used together UnicronMessagingClient

        this.messaging_client = new __WEBPACK_IMPORTED_MODULE_1_decepticons_UnicronMessagingClient_js__["a" /* UnicronMessagingClient */](this);
        this.messaging_client.listener = this.listener;

        this.registerAdapter('lf', adapter, {
            'default': true
        });

        this.events.trigger('onLocalDatabaseReady');

        this.datastore = {
            "owner": new __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronDataStoreAPI_js__["a" /* UnicronDataStoreAPI */](this, "owner", "owner"),
            "pet": new __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronDataStoreAPI_js__["a" /* UnicronDataStoreAPI */](this, "pet", "pet")
        };

        this.app.datastore = this.datastore;
    }
    listener(m) {
        const topic = m.type,
              message = m.detail,
              data = message.data,
              collection = message.collection,
              action = message.action;

        console.log("topic: ", topic);
        console.log("message: ", message);

        //console.log("data: ", JSON.stringify(data))
        //console.log('scope of this: UnicronLocalPersistenceLayer', this)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronLocalPersistenceLayer;


const _root = window || global(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {})(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

_root.decepticons.helpers.UnicronLocalPersistenceLayer = UnicronLocalPersistenceLayer;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronEventSystem_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronSubscriber_js__ = __webpack_require__(32);




const _root = window || global;

class UnicronPubSub {
    constructor(el) {
        this.node = el || document;
        this.subscribers = {};
        this.topics = [];
        this.events = new __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronEventSystem_js__["a" /* UnicronEventSystem */]();

        /**
         * mandatory topics to register
         */
        this._registerTopic(__WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__["a" /* config */].topic_main);
        this._registerTopic(__WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__["a" /* config */].topic_data_change);
        this._registerTopic(__WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__["a" /* config */].topic_data_change_local);
        this._registerTopic(__WEBPACK_IMPORTED_MODULE_1_decepticons_config_js__["a" /* config */].topic_data_change_remote);
    }
    _registerTopic(topic) {
        if (typeof topic === 'undefined') throw new Error('Can not register the topic');
        if (!this.topics.contains(topic)) {
            this.topics.push(topic);
            this.events.trigger('onRegisterTopic');
        }
    }
    _isTopic(topic) {
        //console.log('topic: ', topic);
        //console.log( 'this.topics', this.topics );
        return this.topics.contains(topic);
    }
    _compose(message, topic) {
        let composed_message = null,
            validEvents = ['create', 'update', 'delete', 'list', 'reject'];

        if (typeof message === 'undefined') throw new Error('Can not compose without a message');

        if (typeof topic === 'undefined') throw new Error('Can not compose without a topic');

        if (!validEvents.contains(message.action)) throw new Error('Invalid message action');

        composed_message = {
            action: message.action, // create, update, delete, list,
            collection: message.collection,
            model: message.model,
            data: message.data,
            datetime: new Date().toISOString(),
            to: 'server', // client, server,
            from: message.from,
            topic: topic // 'data.change.remote', 'data.change.local'
        };
        return composed_message;
    }
    publish(topic, message) {
        //console.log('UnicronPubSub.publish');
        //console.log('topic:', topic);
        //console.log('message: ', message);
        if (typeof topic === 'undefined') throw new Error('Can not publish without a topic');

        if (typeof message === 'undefined') throw new Error('Can not publish without a message');

        if (!this._isTopic(topic)) throw new Error('Can not publish to a unregistered topic');

        this.node.dispatchEvent(new CustomEvent(topic, {
            detail: this._compose(message, topic)
        }));
    }
    subscribe(topic, listener, $scope) {
        if (!this._isTopic(topic)) throw new Error('Can not subscribe to a unregistered topic: ' + topic);

        //console.log( 'XXXXXXXXXX UnicronPubSub subscribe' );

        const subscriber = new __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronSubscriber_js__["a" /* UnicronSubscriber */](topic, listener, $scope);

        //console.log( subscriber );

        this.subscribers[subscriber.id] = subscriber;

        this.node.addEventListener(this.subscribers[subscriber.id].topic, this.subscribers[subscriber.id].listener, 0);

        return subscriber;
    }
    unsubscribe(id) {
        let subscriber;

        if (typeof id === 'undefined') throw new Error('Can not unsubscribe without a subscriber id');

        subscriber = this.subscribers[id];

        this.node.removeEventListener(subscriber.topic, subscriber.listener, 0);

        delete this.subscribers[id];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronPubSub;


(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

(namespace => {
    'use strict';
})(_root.decepticons.helpers.messenger = _root.decepticons.helpers.messenger || {});
_root.decepticons.helpers.messenger.UnicronPubSub = UnicronPubSub;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_decepticons_UnicronMessagingClient_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronEventSystem_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronDataStoreAPI_js__ = __webpack_require__(18);


//import { JSData, DataStore } from "../js-data/src/index.js" // js-data 3.0
//import { HttpAdapter } from '../js-data-http/src/index.js' // js-data 3.0







class UnicronRemotePersistenceLayer extends JSData.DS {
    constructor(app) {

        const adapter = new DSHttpAdapter({ suffix: '.json', basePath: 'http://localhost:8081/api/v1' });

        super();

        this.branch = "remote";

        this.app = app || {};

        this.events = this.app.events || new __WEBPACK_IMPORTED_MODULE_2_decepticons_UnicronEventSystem_js__["a" /* UnicronEventSystem */]();

        this.topic = __WEBPACK_IMPORTED_MODULE_0_decepticons_config_js__["a" /* config */].topic_data_change; // mandatory to be used together UnicronMessagingClient

        this.messaging_client = new __WEBPACK_IMPORTED_MODULE_1_decepticons_UnicronMessagingClient_js__["a" /* UnicronMessagingClient */](this);
        this.messaging_client.listener = this.listener;

        this.registerAdapter('http', adapter, {
            'default': true
        });

        this.events.trigger('onRemoteDatabaseReady');

        this.datastore = {
            "owner": new __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronDataStoreAPI_js__["a" /* UnicronDataStoreAPI */](this, "owner", "owner"),
            "pet": new __WEBPACK_IMPORTED_MODULE_3_decepticons_UnicronDataStoreAPI_js__["a" /* UnicronDataStoreAPI */](this, "pet", "pet")
        };

        this.app.remote_datastore = this.datastore;
    }
    listener(m) {
        const topic = m.type,
              message = m.detail,
              data = message.data,
              collection = message.collection,
              action = message.action;

        if (['create', 'update', 'delete'].contains(action)) {
            console.log("UnicronRemotePersistenceLayer.listener received a valid message");
            console.log("topic: ", topic);
            console.log("message: ", message);

            this.datastore[collection][action](data).then(function (item) {
                console.log('listener sent to server');
            });
        }

        //console.log("data: ", JSON.stringify(data))
        //console.log('scope of this: UnicronRemotePersistenceLayer', this)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronRemotePersistenceLayer;


const _root = window || global(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {})(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

_root.decepticons.helpers.UnicronRemotePersistenceLayer = UnicronRemotePersistenceLayer;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {class UnicronSessionSystem {
    get(key, def) {
        var value = window.sessionStorage.getItem(key);
        var data;
        try {
            data = value ? JSON.parse(value) : def;
        } catch (e) {
            data = def;
        }
        return data;
    }
    set(key, value) {
        value = JSON.stringify(value);
        window.sessionStorage.setItem(key, value);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronSessionSystem;


const _root = window || global;
(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

_root.decepticons.helpers.UnicronSessionSystem = UnicronSessionSystem;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronWeapons_js__ = __webpack_require__(10);


class UnicronSubscriber extends __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronWeapons_js__["a" /* UnicronWeapons */] {
    constructor(topic, listener, $scope) {
        super();

        if (typeof topic === 'undefined') throw new Error('Can not create a subscriber without a topic');

        if (typeof listener === 'undefined') throw new Error('Can not create a subscriber without a listener');

        this.id = this.guid();
        this.topic = topic;

        if (this.isValidHandler(listener)) {
            this.listener = listener.bind($scope || this);
        } else this.listener = () => {};
    }
    isValidHandler(handler) {
        let error = null;
        if (typeof handler === 'function') {
            return true;
        }
        error = new Error('Attempt to register an invalid handler with the subscriber.');
        error.handler = handler;
        throw error;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnicronSubscriber;


const _root = window || global;
(namespace => {
    'use strict';
})(_root.decepticons = _root.decepticons || {});
(namespace => {
    'use strict';
})(_root.decepticons.helpers = _root.decepticons.helpers || {});

(namespace => {
    'use strict';
})(_root.decepticons.helpers.messenger = _root.decepticons.helpers.messenger || {});
_root.decepticons.helpers.messenger.UnicronSubscriber = UnicronSubscriber;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronBaseDataCollection_js__ = __webpack_require__(17);



// generated via YO
class ownerDataCollection extends __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronBaseDataCollection_js__["a" /* UnicronBaseDataCollection */] {
    constructor() {
        super();
        this.name = "owner";
        this.relations = {
            "hasMany": {
                "pet": {
                    "localField": "pet",
                    "foreignKey": "ownerId"
                }
            }
        };
    }
    afterCreate() {
        console.log('afterCreate');
    }
    beforeCreate(resource, data, cb) {
        console.log('beforeCreate');
        cb(null, data);
    }
    afterUpdate(resource, data, cb) {
        console.log('afterUpdate');
        cb(null, data);
    }
    beforeUpdate(resource, data, cb) {
        console.log('beforeUpdate');
        cb(null, data);
    }
    afterCreateInstance(resource, data) {
        console.log('afterCreateInstance');
        return data;
    }
    afterDestroy(Resource, data, cb) {
        console.log('afterDestroy');
        cb(null, data);
    }
    afterEject(Resource, data) {
        console.log('afterEject');
        return data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ownerDataCollection;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronBaseDataCollection_js__ = __webpack_require__(17);


// generated via YO
class petDataCollection extends __WEBPACK_IMPORTED_MODULE_0_decepticons_UnicronBaseDataCollection_js__["a" /* UnicronBaseDataCollection */] {
    constructor() {
        super();
        this.name = "pet";
        this.relations = {
            "belongsTo": {
                "owner": {
                    "localField": "owner",
                    "localKey": "ownerId"
                }
            }
        };
    }
    afterCreate() {
        console.log('afterCreate');
    }
    beforeCreate(resource, data, cb) {
        console.log('beforeCreate');
        cb(null, data);
    }
    afterUpdate(resource, data, cb) {
        console.log('afterUpdate');
        cb(null, data);
    }
    beforeUpdate(resource, data, cb) {
        console.log('beforeUpdate');
        cb(null, data);
    }
    afterCreateInstance(resource, data) {
        console.log('afterCreateInstance');
        return data;
    }
    afterDestroy(Resource, data, cb) {
        console.log('afterDestroy');
        cb(null, data);
    }
    afterEject(Resource, data) {
        console.log('afterEject');
        return data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = petDataCollection;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataTypes__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(36);




let id = 1;

class Schemator {
  constructor() {
    this.dataTypes = {};
    this.rules = {};
    this.schemata = {};
    this.id = id++;
  }

  availableDataTypes() {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].unique(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(this.dataTypes).concat(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(__WEBPACK_IMPORTED_MODULE_1__dataTypes__["a" /* default */])));
  }

  availableRules() {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].unique(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(this.rules).concat(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(__WEBPACK_IMPORTED_MODULE_2__rules__["a" /* default */])));
  }

  availableSchemata() {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(this.schemata);
  }

  defineDataType(name, typeDefinition) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(name)) {
      throw new Error('"name" must be a string!');
    } else if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isFunction(typeDefinition)) {
      throw new Error('"typeDefinition" must be a function!');
    } else if (this.dataTypes[name]) {
      throw new Error('dataType already registered!');
    }
    this.dataTypes[name] = typeDefinition;
  }

  defineRule(name, ruleFunc, async) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(name)) {
      throw new Error('"name" must be a string!');
    } else if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isFunction(ruleFunc)) {
      throw new Error('"ruleFunc" must be a function!');
    } else if (this.rules[name]) {
      throw new Error('rule already registered!');
    }
    this.rules[name] = ruleFunc;
    this.rules[name].async = !!async;
  }

  defineSchema(name, schema) {
    if (this.schemata[name]) {
      throw new Error('schema already registered!');
    } else if (schema instanceof __WEBPACK_IMPORTED_MODULE_3__schema__["a" /* default */]) {
      throw new Error('schema registered elsewhere!');
    }
    this.schemata[name] = new __WEBPACK_IMPORTED_MODULE_3__schema__["a" /* default */](name, schema, this);
    this.schemata[name].parent = this;
    return this.schemata[name];
  }

  getDataType(name) {
    return this.dataTypes[name] || __WEBPACK_IMPORTED_MODULE_1__dataTypes__["a" /* default */][name];
  }

  getRule(name) {
    return this.rules[name] || __WEBPACK_IMPORTED_MODULE_2__rules__["a" /* default */][name];
  }

  getSchema(name) {
    return this.schemata[name];
  }

  removeDataType(name) {
    delete this.dataTypes[name];
  }

  removeRule(name) {
    delete this.rules[name];
  }

  removeSchema(name) {
    delete this.schemata[name];
  }

  schemaCheck(name) {
    if (!this.schemata[name]) {
      throw new Error('schema is not registered!');
    }
  }

  validateSync(name, attrs, options) {
    this.schemaCheck(name);
    return this.schemata[name].validateSync(attrs, options);
  }

  validate(name, attrs, options, cb) {
    this.schemaCheck(name);
    return this.schemata[name].validate(attrs, options, cb);
  }

  addDefaultsToTarget(name, target, overwrite) {
    this.schemaCheck(name);
    return this.schemata[name].addDefaultsToTarget(target, overwrite);
  }

  setDefaults(name, attrs) {
    this.schemaCheck(name);
    return this.schemata[name].setDefaults(attrs);
  }

  getDefaults(name) {
    this.schemaCheck(name);
    return this.schemata[name].getDefaults();
  }

  stripNonSchemaAttrs(name, attrs) {
    this.schemaCheck(name);
    return this.schemata[name].stripNonSchemaAttrs(attrs);
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Schemator);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rules__ = __webpack_require__(20);
/*jshint latedef:false*/



let hasObject = v => {
  var has = false;
  __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(v, _v => {
    if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(_v)) {
      has = true;
      return false;
    }
  });
  return has;
};

function _executeRulesSync(targetKey, options, errors, value, key) {
  let nestedKey = targetKey + (targetKey.length ? '.' : '') + key;
  let schemaRules = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].get(this.schema, nestedKey);

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(value) || hasObject(schemaRules)) {
    let err = _validateSync.apply(this, [nestedKey, value || {}, options]);
    if (err) {
      errors[key] = err;
    }
  } else {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(schemaRules)) {
      return;
    } else if (schemaRules.nullable === true) {
      let nullable = this.parent.rules.nullable || __WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */].nullable;
      let nErr = nullable.call(options.ctx, value, true, undefined, this.parent);

      if (nErr === null) {
        return;
      }
    }
    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(schemaRules, (ruleValue, ruleKey) => {
      let rule = this.parent.rules[ruleKey] || __WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */][ruleKey];
      if (rule && !rule.async) {
        let err = rule.call(options.ctx, value, ruleValue, undefined, this.parent);
        if (err) {
          if (!errors[key]) {
            errors[key] = {
              errors: []
            };
          }
          errors[key].errors.push(err);
        }
      }
    });
  }
}

/**
 * @see Schema#validateSync
 */
function _validateSync(targetKey, attrs, options) {
  let errors = {};

  try {
    // Validate present attributes
    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(attrs, (value, key) => {
      _executeRulesSync.call(this, targetKey, options, errors, value, key);
    });
    // Validate missing attributes
    if (!options.ignoreMissing) {
      let schema = targetKey ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].get(this.schema, targetKey) || {} : this.schema;
      let missing = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].difference(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(schema), __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(attrs));
      missing = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].pick(this.schema, missing);
      missing = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].map(missing, () => undefined);
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(missing, (value, key) => {
        _executeRulesSync.call(this, targetKey, options, errors, value, key);
      });
    }
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isEmpty(errors)) {
      return errors;
    } else {
      return null;
    }
  } catch (err) {
    return err;
  }
}

function _executeRules(options, value, key, prefix, errors, deepQueue, ruleQueue) {
  let nestedKey = prefix + key;
  let schemaRules = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].get(this.schema, nestedKey);

  if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(value) || hasObject(schemaRules)) {
    // Recurse down into nested attributes
    deepQueue[key] = ((nK, val) => {
      return next => {
        _validate.apply(this, [nK, val || {}, options, next]);
      };
    })(nestedKey, value);
  } else {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(schemaRules)) {
      return;
    } else if (schemaRules.nullable === true) {
      let nullable = this.parent.rules.nullable || __WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */].nullable;
      let nErr = nullable.call(options.ctx, value, true, undefined, this.parent);

      if (nErr === null) {
        return;
      }
    }
    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(schemaRules, (ruleValue, ruleKey) => {
      let rule = this.parent.rules[ruleKey] || __WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */][ruleKey];
      // Asynchronous rules get added to the queue
      if (rule && rule.async) {
        ruleQueue[`${ruleKey}_${ruleValue}`] = ((r, key, val, rVal) => {
          return next => {
            r.call(options.ctx, val, rVal, err => {
              next(null, { err: err, key: key });
            });
          };
        })(rule, key, value, ruleValue);
      } else {
        // Get results of synchronous rules immediately
        let err = rule.call(options.ctx, value, ruleValue, undefined, this.parent);
        if (err) {
          if (!errors[key]) {
            errors[key] = {
              errors: []
            };
          }
          errors[key].errors.push(err);
        }
      }
    });
  }
}

/**
 * @see Schema#validate
 */
function _validate(targetKey, attrs, options, cb) {
  let errors = {};
  let prefix = targetKey + (targetKey.length ? '.' : '');
  let deepQueue = {};
  let ruleQueue = {};
  let first = options.first;

  delete options.first;

  __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(attrs, (value, key) => {
    _executeRules.call(this, options, value, key, prefix, errors, deepQueue, ruleQueue);
  });

  // Validate missing attributes
  if (!options.ignoreMissing) {
    let schema = targetKey ? __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].get(this.schema, targetKey) || {} : this.schema;
    let missing = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].difference(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(schema), __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(attrs));

    missing = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].pick(this.schema, missing);
    missing = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].map(missing, () => undefined);

    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(missing, (value, key) => {
      _executeRules.call(this, options, value, key, prefix, errors, deepQueue, ruleQueue);
    });
  }

  var finalQueue = {};

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isEmpty(deepQueue)) {
    finalQueue.deepQueue = next => {
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].parallel(deepQueue, next);
    };
  }
  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isEmpty(ruleQueue)) {
    finalQueue.ruleQueue = next => {
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].parallel(ruleQueue, next);
    };
  }

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isEmpty(finalQueue)) {
    __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].parallel(finalQueue, (err, results) => {

      // Merge results of recursion
      if (results.deepQueue) {
        results.deepQueue = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].filter(results.deepQueue, x => x !== undefined && x !== null);
        __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].deepMixIn(errors, results.deepQueue);
      }

      // Merge results of asynchronous rules
      if (results.ruleQueue) {
        if (results.ruleQueue) {
          results.ruleQueue = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].filter(results.ruleQueue, x => x.err !== undefined && x.err !== null);
        }
        __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(results.ruleQueue, value => {
          if (!errors[value.key]) {
            errors[value.key] = {
              errors: []
            };
          }
          errors[value.key].errors.push(value.err);
        });
      }

      if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isEmpty(errors)) {
        first ? cb(errors) : cb(null, errors);
      } else {
        cb(null);
      }
    });
  } else {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isEmpty(errors)) {
      first ? cb(errors) : cb(null, errors);
    } else {
      cb(null);
    }
  }
}

function _validateSchema(attrs, rules) {
  rules = rules || [];
  let keys = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].keys(attrs);
  let noRules = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].intersection(keys, rules).length === 0;

  __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(attrs, (value, key) => {
    if (noRules && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(value)) {
      attrs[key] = {
        type: value
      };
    } else if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(value)) {
      _validateSchema(value, rules);
    }
  });
}

let errors = {
  a: 'Schema#validateSync(attrs[, options]): ',
  b: 'Schema#validate(attrs[, options], cb): '
};

class Schema {
  constructor(name, schema, parent) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isString(name)) {
      throw new Error('"name" must be a string!');
    } else if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(schema)) {
      throw new Error('"schema" must be an object!');
    }
    this.name = name;
    _validateSchema(schema, parent ? parent.availableRules() : __WEBPACK_IMPORTED_MODULE_1__rules__["a" /* default */]);
    this.schema = schema;
  }

  validateSync(attrs, options) {
    options = options ? options === true ? { ignoreMissing: true } : options : {};
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(attrs)) {
      throw new Error(`${errors.a}attrs: Must be an object!`);
    } else if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(options)) {
      throw new Error(`${errors.a}options: Must be an object!`);
    }
    options.ctx = attrs;
    return _validateSync.call(this, '', attrs, options);
  }

  validate(attrs, options, cb) {
    options = options ? options === true ? { ignoreMissing: true } : options : {};
    if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isFunction(options)) {
      cb = options;
      options = {};
    }
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isFunction(cb)) {
      throw new Error(`${errors.b}cb: Must be a function!`);
    } else if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(attrs)) {
      return cb(new Error(`${errors.b}attrs: Must be an object!`));
    } else if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(options)) {
      return cb(new Error(`${errors.b}options: Must be an object!`));
    }
    options.first = true;
    options.ctx = attrs;
    _validate.call(this, '', attrs, options, cb);
  }

  addDefaultsToTarget(target, overwrite) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(target)) {
      throw new Error('"target" must be an object!');
    } else if (!this.defaults) {
      throw new Error('No defaults have been set!');
    } else if (overwrite) {
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].deepMixIn(target, this.defaults);
    } else {
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].deepFillIn(target, this.defaults);
    }
  }

  setDefaults(attrs) {
    if (!__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(attrs)) {
      throw new Error('Schema#defaults(attrs): attrs: Must be an object!');
    } else {
      this.defaults = __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].merge({}, attrs);
    }
    return this;
  }

  getDefaults() {
    return __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].merge({}, this.defaults);
  }

  stripNonSchemaAttrs(attrs) {
    _stripNonSchemaAttrs(attrs, this.schema);
    return attrs;
  }
}

function _stripNonSchemaAttrs(attrs, schemaLevel) {
  __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].forOwn(attrs, (value, key) => {
    if (schemaLevel[key]) {
      if (__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(value) && __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].isObject(schemaLevel[key])) {
        _stripNonSchemaAttrs(value, schemaLevel[key]);
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* default */].unset(attrs, key);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Schema);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var unique = __webpack_require__(14);
var filter = __webpack_require__(12);
var some = __webpack_require__(41);
var contains = __webpack_require__(11);
var slice = __webpack_require__(13);

/**
 * Return a new Array with elements that aren't present in the other Arrays.
 */
function difference(arr) {
    var arrs = slice(arguments, 1),
        result = filter(unique(arr), function (needle) {
        return !some(arrs, function (haystack) {
            return contains(haystack, needle);
        });
    });
    return result;
}

module.exports = difference;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__(4);

/**
 * Array every
 */
function every(arr, callback, thisObj) {
    callback = makeIterator(callback, thisObj);
    var result = true;
    if (arr == null) {
        return result;
    }

    var i = -1,
        len = arr.length;
    while (++i < len) {
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (!callback(arr[i], i, arr)) {
            result = false;
            break;
        }
    }

    return result;
}

module.exports = every;

/***/ }),
/* 39 */
/***/ (function(module, exports) {



/**
 * Array.indexOf
 */
function indexOf(arr, item, fromIndex) {
    fromIndex = fromIndex || 0;
    if (arr == null) {
        return -1;
    }

    var len = arr.length,
        i = fromIndex < 0 ? len + fromIndex : fromIndex;
    while (i < len) {
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (arr[i] === item) {
            return i;
        }

        i++;
    }

    return -1;
}

module.exports = indexOf;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var unique = __webpack_require__(14);
var filter = __webpack_require__(12);
var every = __webpack_require__(38);
var contains = __webpack_require__(11);
var slice = __webpack_require__(13);

/**
 * Return a new Array with elements common to all Arrays.
 * - based on underscore.js implementation
 */
function intersection(arr) {
    var arrs = slice(arguments, 1),
        result = filter(unique(arr), function (needle) {
        return every(arrs, function (haystack) {
            return contains(haystack, needle);
        });
    });
    return result;
}

module.exports = intersection;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var makeIterator = __webpack_require__(4);

/**
 * Array some
 */
function some(arr, callback, thisObj) {
    callback = makeIterator(callback, thisObj);
    var result = false;
    if (arr == null) {
        return result;
    }

    var i = -1,
        len = arr.length;
    while (++i < len) {
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (callback(arr[i], i, arr)) {
            result = true;
            break;
        }
    }

    return result;
}

module.exports = some;

/***/ }),
/* 42 */
/***/ (function(module, exports) {



/**
 * Returns the first argument provided to it.
 */
function identity(val) {
    return val;
}

module.exports = identity;

/***/ }),
/* 43 */
/***/ (function(module, exports) {



/**
 * Returns a function that gets a property of the passed object
 */
function prop(name) {
    return function (obj) {
        return obj[name];
    };
}

module.exports = prop;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var kindOf = __webpack_require__(15);
var isPlainObject = __webpack_require__(8);
var mixIn = __webpack_require__(66);

/**
 * Clone native types.
 */
function clone(val) {
    switch (kindOf(val)) {
        case 'Object':
            return cloneObject(val);
        case 'Array':
            return cloneArray(val);
        case 'RegExp':
            return cloneRegExp(val);
        case 'Date':
            return cloneDate(val);
        default:
            return val;
    }
}

function cloneObject(source) {
    if (isPlainObject(source)) {
        return mixIn({}, source);
    } else {
        return source;
    }
}

function cloneRegExp(r) {
    var flags = '';
    flags += r.multiline ? 'm' : '';
    flags += r.global ? 'g' : '';
    flags += r.ignoreCase ? 'i' : '';
    return new RegExp(r.source, flags);
}

function cloneDate(date) {
    return new Date(+date);
}

function cloneArray(arr) {
    return arr.slice();
}

module.exports = clone;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var clone = __webpack_require__(44);
var forOwn = __webpack_require__(1);
var kindOf = __webpack_require__(15);
var isPlainObject = __webpack_require__(8);

/**
 * Recursively clone native types.
 */
function deepClone(val, instanceClone) {
    switch (kindOf(val)) {
        case 'Object':
            return cloneObject(val, instanceClone);
        case 'Array':
            return cloneArray(val, instanceClone);
        default:
            return clone(val);
    }
}

function cloneObject(source, instanceClone) {
    if (isPlainObject(source)) {
        var out = {};
        forOwn(source, function (val, key) {
            this[key] = deepClone(val, instanceClone);
        }, out);
        return out;
    } else if (instanceClone) {
        return instanceClone(source);
    } else {
        return source;
    }
}

function cloneArray(arr, instanceClone) {
    var out = [],
        i = -1,
        n = arr.length,
        val;
    while (++i < n) {
        out[i] = deepClone(arr[i], instanceClone);
    }
    return out;
}

module.exports = deepClone;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
function isBoolean(val) {
    return isKind(val, 'Boolean');
}
module.exports = isBoolean;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
function isDate(val) {
    return isKind(val, 'Date');
}
module.exports = isDate;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);
var isArray = __webpack_require__(7);

function isEmpty(val) {
    if (val == null) {
        // typeof null == 'object' so we check it first
        return true;
    } else if (typeof val === 'string' || isArray(val)) {
        return !val.length;
    } else if (typeof val === 'object') {
        var result = true;
        forOwn(val, function () {
            result = false;
            return false; // break loop
        });
        return result;
    } else {
        return true;
    }
}

module.exports = isEmpty;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
function isFunction(val) {
    return isKind(val, 'Function');
}
module.exports = isFunction;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
function isNumber(val) {
    return isKind(val, 'Number');
}
module.exports = isNumber;

/***/ }),
/* 51 */
/***/ (function(module, exports) {



/**
 * Checks if the object is a primitive
 */
function isPrimitive(value) {
    // Using switch fallthrough because it's simple to read and is
    // generally fast: http://jsperf.com/testing-value-is-primitive/5
    switch (typeof value) {
        case "string":
        case "number":
        case "boolean":
            return true;
    }

    return value == null;
}

module.exports = isPrimitive;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var isKind = __webpack_require__(3);
/**
 */
function isString(val) {
    return isKind(val, 'String');
}
module.exports = isString;

/***/ }),
/* 53 */
/***/ (function(module, exports) {


var UNDEF;

/**
 */
function isUndef(val) {
    return val === UNDEF;
}
module.exports = isUndef;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(7);

/**
 * covert value into number if numeric
 */
function toNumber(val) {
    // numberic values should come first because of -0
    if (typeof val === 'number') return val;
    // we want all falsy values (besides -0) to return zero to avoid
    // headaches
    if (!val) return 0;
    if (typeof val === 'string') return parseFloat(val);
    // arrays are edge cases. `Number([4]) === 4`
    if (isArray(val)) return NaN;
    return Number(val);
}

module.exports = toNumber;

/***/ }),
/* 55 */
/***/ (function(module, exports) {



/**
 * Typecast a value to a String, using an empty string value for null or
 * undefined.
 */
function toString(val) {
    return val == null ? '' : val.toString();
}

module.exports = toString;

/***/ }),
/* 56 */
/***/ (function(module, exports) {



/**
 * "Convert" value into an 32-bit integer.
 * Works like `Math.floor` if val > 0 and `Math.ceil` if val < 0.
 * IMPORTANT: val will wrap at 2^31 and -2^31.
 * Perf tests: http://jsperf.com/vs-vs-parseint-bitwise-operators/7
 */
function toInt(val) {
    // we do not use lang/toNumber because of perf and also because it
    // doesn't break the functionality
    return ~~val;
}

module.exports = toInt;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);
var isPlainObject = __webpack_require__(8);

/**
 * Deeply copy missing properties in the target from the defaults.
 */
function deepFillIn(target, defaults) {
    var i = 0,
        n = arguments.length,
        obj;

    while (++i < n) {
        obj = arguments[i];
        if (obj) {
            // jshint loopfunc: true
            forOwn(obj, function (newValue, key) {
                var curValue = target[key];
                if (curValue == null) {
                    target[key] = newValue;
                } else if (isPlainObject(curValue) && isPlainObject(newValue)) {
                    deepFillIn(curValue, newValue);
                }
            });
        }
    }

    return target;
}

module.exports = deepFillIn;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);
var isArray = __webpack_require__(7);

function containsMatch(array, pattern) {
    var i = -1,
        length = array.length;
    while (++i < length) {
        if (deepMatches(array[i], pattern)) {
            return true;
        }
    }

    return false;
}

function matchArray(target, pattern) {
    var i = -1,
        patternLength = pattern.length;
    while (++i < patternLength) {
        if (!containsMatch(target, pattern[i])) {
            return false;
        }
    }

    return true;
}

function matchObject(target, pattern) {
    var result = true;
    forOwn(pattern, function (val, key) {
        if (!deepMatches(target[key], val)) {
            // Return false to break out of forOwn early
            return result = false;
        }
    });

    return result;
}

/**
 * Recursively check if the objects match.
 */
function deepMatches(target, pattern) {
    if (target && typeof target === 'object') {
        if (isArray(target) && isArray(pattern)) {
            return matchArray(target, pattern);
        } else {
            return matchObject(target, pattern);
        }
    } else {
        return target === pattern;
    }
}

module.exports = deepMatches;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);
var isPlainObject = __webpack_require__(8);

/**
 * Mixes objects into the target object, recursively mixing existing child
 * objects.
 */
function deepMixIn(target, objects) {
    var i = 0,
        n = arguments.length,
        obj;

    while (++i < n) {
        obj = arguments[i];
        if (obj) {
            forOwn(obj, copyProp, target);
        }
    }

    return target;
}

function copyProp(val, key) {
    var existing = this[key];
    if (isPlainObject(val) && isPlainObject(existing)) {
        deepMixIn(existing, val);
    } else {
        this[key] = val;
    }
}

module.exports = deepMixIn;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);
var makeIterator = __webpack_require__(4);

/**
 * Creates a new object with all the properties where the callback returns
 * true.
 */
function filterValues(obj, callback, thisObj) {
    callback = makeIterator(callback, thisObj);
    var output = {};
    forOwn(obj, function (value, key, obj) {
        if (callback(value, key, obj)) {
            output[key] = value;
        }
    });

    return output;
}
module.exports = filterValues;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(16);

var _hasDontEnumBug, _dontEnums;

function checkDontEnum() {
    _dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];

    _hasDontEnumBug = true;

    for (var key in { 'toString': null }) {
        _hasDontEnumBug = false;
    }
}

/**
 * Similar to Array/forEach but works over object properties and fixes Don't
 * Enum bug on IE.
 * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
 */
function forIn(obj, fn, thisObj) {
    var key,
        i = 0;
    // no need to check if argument is a real object that way we can use
    // it for arrays, functions, date, etc.

    //post-pone check till needed
    if (_hasDontEnumBug == null) checkDontEnum();

    for (key in obj) {
        if (exec(fn, obj, key, thisObj) === false) {
            break;
        }
    }

    if (_hasDontEnumBug) {
        var ctor = obj.constructor,
            isProto = !!ctor && obj === ctor.prototype;

        while (key = _dontEnums[i++]) {
            // For constructor, if it is a prototype object the constructor
            // is always non-enumerable unless defined otherwise (and
            // enumerated above).  For non-prototype objects, it will have
            // to be defined on this object, since it cannot be defined on
            // any prototype objects.
            //
            // For other [[DontEnum]] properties, check if the value is
            // different than Object prototype value.
            if ((key !== 'constructor' || !isProto && hasOwn(obj, key)) && obj[key] !== Object.prototype[key]) {
                if (exec(fn, obj, key, thisObj) === false) {
                    break;
                }
            }
        }
    }
}

function exec(fn, obj, key, thisObj) {
    return fn.call(thisObj, obj[key], key, obj);
}

module.exports = forIn;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var get = __webpack_require__(22);

var UNDEF;

/**
 * Check if object has nested property.
 */
function has(obj, prop) {
    return get(obj, prop) !== UNDEF;
}

module.exports = has;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);

/**
 * Get object keys
 */
var keys = Object.keys || function (obj) {
    var keys = [];
    forOwn(obj, function (val, key) {
        keys.push(key);
    });
    return keys;
};

module.exports = keys;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);
var makeIterator = __webpack_require__(4);

/**
 * Creates a new object where all the values are the result of calling
 * `callback`.
 */
function mapValues(obj, callback, thisObj) {
    callback = makeIterator(callback, thisObj);
    var output = {};
    forOwn(obj, function (val, key, obj) {
        output[key] = callback(val, key, obj);
    });

    return output;
}
module.exports = mapValues;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(16);
var deepClone = __webpack_require__(45);
var isObject = __webpack_require__(21);

/**
 * Deep merge objects.
 */
function merge() {
    var i = 1,
        key,
        val,
        obj,
        target;

    // make sure we don't modify source element and it's properties
    // objects are passed by reference
    target = deepClone(arguments[0]);

    while (obj = arguments[i++]) {
        for (key in obj) {
            if (!hasOwn(obj, key)) {
                continue;
            }

            val = obj[key];

            if (isObject(val) && isObject(target[key])) {
                // inception, deep merge objects
                target[key] = merge(target[key], val);
            } else {
                // make sure arrays, regexp, date, objects are cloned
                target[key] = deepClone(val);
            }
        }
    }

    return target;
}

module.exports = merge;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var forOwn = __webpack_require__(1);

/**
* Combine properties from all the objects into first one.
* - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
* @param {object} target    Target Object
* @param {...object} objects    Objects to be combined (0...n objects).
* @return {object} Target Object.
*/
function mixIn(target, objects) {
    var i = 0,
        n = arguments.length,
        obj;
    while (++i < n) {
        obj = arguments[i];
        if (obj != null) {
            forOwn(obj, copyProp, target);
        }
    }
    return target;
}

function copyProp(val, key) {
    this[key] = val;
}

module.exports = mixIn;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(13);

/**
 * Return a copy of the object, filtered to only have values for the whitelisted keys.
 */
function pick(obj, var_keys) {
    var keys = typeof arguments[1] !== 'string' ? arguments[1] : slice(arguments, 1),
        out = {},
        i = 0,
        key;
    while (key = keys[i++]) {
        out[key] = obj[key];
    }
    return out;
}

module.exports = pick;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(62);

/**
 * Unset object property.
 */
function unset(obj, prop) {
    if (has(obj, prop)) {
        var parts = prop.split('.'),
            last = parts.pop();
        while (prop = parts.shift()) {
            obj = obj[prop];
        }
        return delete obj[last];
    } else {
        // if property doesn't exist treat as deleted
        return true;
    }
}

module.exports = unset;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_less_app_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_less_app_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_less_app_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_decepticons_index_js__ = __webpack_require__(23);




class MyApp extends __WEBPACK_IMPORTED_MODULE_1__node_modules_decepticons_index_js__["a" /* decepticons */].Unicron {
	constructor(config) {
		super(config);
		//console.log(config);
	}
}
/* harmony export (immutable) */ __webpack_exports__["MyApp"] = MyApp;


const _root = window || global;
_root.MyApp = MyApp;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map