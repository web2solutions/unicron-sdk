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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cybertron; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import { JSData, DataStore } from "../js-data/src/index.js";
//import { HttpAdapter } from '../js-data-http/src/index.js';

var topic_data_change_local = 'data.change.local';
var topic_data_change_remote = 'data.change.remote';

/**
 * [UnicronWeapons util class]
 * @type {constructor}
 */

var UnicronWeapons = function () {
    function UnicronWeapons() {
        _classCallCheck(this, UnicronWeapons);

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


    UnicronWeapons.prototype.load = function load(url, callback, update) {
        var self = this;

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
    };

    UnicronWeapons.prototype._requestES5Module = function _requestES5Module(url, callback, update) {
        var self = this,
            arrType = void 0,
            type = void 0,
            s = void 0,
            nodeType = void 0,
            node = void 0,
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

        self.fetch(url, function (request) {

            var responseTex = request.responseText,
                uid = self.uid;
            node.textContent = 'window.___temp_Unicron["' + uid + '"].es5modules["' + url + '"] = (function(_root) {  ' + responseTex + ' })(window);';
            document.getElementsByTagName('head')[0].appendChild(node);
            self._es5modules[url] = window.___temp_Unicron[uid].es5modules[url];
            callback();
        });
    };

    UnicronWeapons.prototype._enqueue = function _enqueue(c) {
        this.onDemand.queue.push(c);
    };

    UnicronWeapons.prototype.process_queue = function process_queue() {
        var self = this,
            first_on_queue = '';

        if (self._queue_active) return;

        if (self.onDemand.queue.length > 0) {
            self._queue_active = true;

            first_on_queue = self.onDemand.queue.shift();

            self._requestES5Module(first_on_queue.url, function () {

                first_on_queue.callback(self._es5modules[first_on_queue.url]);
                self.process_queue();
            }, first_on_queue.update);
        } else {
            self._queue_active = false;
        }
    };

    UnicronWeapons.prototype.fetch = function fetch(url, fnCallBack) {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                if (fnCallBack) fnCallBack(request);
            }
        };
    };

    UnicronWeapons.prototype.uid = function uid() {
        return (Date.now() & 0x7fff).toString(32) + (0x100000000 * Math.random()).toString(32);
    };

    UnicronWeapons.prototype.S4 = function S4() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };

    UnicronWeapons.prototype.guid = function guid() {
        var self = this;
        return self.S4() + self.S4() + "-" + self.S4() + "-" + self.S4() + "-" + self.S4() + "-" + self.S4() + self.S4() + self.S4();
    };

    return UnicronWeapons;
}();

/**
 * [UnicronEventSystem implement application events]
 * @type {constructor}
 */


var UnicronEventSystem = function () {
    function UnicronEventSystem(parentNodeElement) {
        _classCallCheck(this, UnicronEventSystem);

        this.root = parentNodeElement || document;
        this._events = {};

        this.attach = this.on;
        this.attachEvent = this.on;

        this.dispatch = this.trigger;
        this.dispatchEvent = this.trigger;
    }

    UnicronEventSystem.prototype.on = function on(name, handler, c) {
        var self = this;
        var event = null;
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
    };

    UnicronEventSystem.prototype.trigger = function trigger(name) {
        var self = this;
        if (self._events[name]) self.root.dispatchEvent(self._events[name].event);
    };

    return UnicronEventSystem;
}();

var UnicronSubscriber = function (_UnicronWeapons) {
    _inherits(UnicronSubscriber, _UnicronWeapons);

    function UnicronSubscriber(topic, listener, $scope) {
        _classCallCheck(this, UnicronSubscriber);

        var _this = _possibleConstructorReturn(this, _UnicronWeapons.call(this));

        if (typeof topic === 'undefined') throw new Error('Can not create a subscriber without a topic');

        if (typeof listener === 'undefined') throw new Error('Can not create a subscriber without a listener');

        _this.id = _this.guid();
        _this.topic = topic;

        if (_this.isValidHandler(listener)) {
            _this.listener = listener.bind($scope || _this);
        } else _this.listener = function () {};
        return _this;
    }

    UnicronSubscriber.prototype.isValidHandler = function isValidHandler(handler) {
        var error = null;
        if (typeof handler === 'function') {
            return true;
        }
        error = new Error('Attempt to register an invalid handler with the subscriber.');
        error.handler = handler;
        throw error;
    };

    return UnicronSubscriber;
}(UnicronWeapons);

var UnicronPubSub = function () {
    function UnicronPubSub(el) {
        _classCallCheck(this, UnicronPubSub);

        this.node = el || document;
        this.subscribers = {};
        this.topics = [];
        this.events = new UnicronEventSystem();

        /**
         * mandatory topics to register
         */
        this._registerTopic(topic_data_change_local);
        this._registerTopic(topic_data_change_remote);
    }

    UnicronPubSub.prototype._registerTopic = function _registerTopic(topic) {
        if (typeof topic === 'undefined') throw new Error('Can not register the topic');
        if (!this.topics.contains(topic)) {
            this.topics.push(topic);
            this.events.trigger('onRegisterTopic');
        }
    };

    UnicronPubSub.prototype._isTopic = function _isTopic(topic) {
        //console.log('topic: ', topic);
        //console.log( 'this.topics', this.topics );
        return this.topics.contains(topic);
    };

    UnicronPubSub.prototype._compose = function _compose(message, topic) {
        var composed_message = null,
            validEvents = ['create', 'update', 'delete', 'list'];

        if (typeof message === 'undefined') throw new Error('Can not compose without a message');

        if (typeof topic === 'undefined') throw new Error('Can not compose without a topic');

        if (!validEvents.contains(message.action)) throw new Error('Invalid message action');

        composed_message = {
            action: message.action, // create, update, delete, list,
            collection: message.collection,
            model: message.model,
            data: message.data,
            datetime: new Date().getTime(),
            to: 'server', // client, server,
            from: message.from,
            topic: topic // 'data.change.remote', 'data.change.local'
        };
        return composed_message;
    };

    UnicronPubSub.prototype.publish = function publish(topic, message) {
        //console.log('UnicronPubSub.publish');
        //console.log('topic:', topic);
        //console.log('message: ', message);
        if (typeof topic === 'undefined') throw new Error('Can not publish without a topic');

        if (typeof message === 'undefined') throw new Error('Can not publish without a message');

        if (!this._isTopic(topic)) throw new Error('Can not publish to a unregistered topic');

        this.node.dispatchEvent(new CustomEvent(topic, {
            detail: this._compose(message, topic)
        }));
    };

    UnicronPubSub.prototype.subscribe = function subscribe(topic, listener, $scope) {
        if (!this._isTopic(topic)) throw new Error('Can not subscribe to a unregistered topic: ' + topic);

        //console.log( 'XXXXXXXXXX UnicronPubSub subscribe' );

        var subscriber = new UnicronSubscriber(topic, listener, $scope);

        //console.log( subscriber );

        this.subscribers[subscriber.id] = subscriber;

        this.node.addEventListener(this.subscribers[subscriber.id].topic, this.subscribers[subscriber.id].listener, 0);

        return subscriber;
    };

    UnicronPubSub.prototype.unsubscribe = function unsubscribe(id) {
        var subscriber = void 0;

        if (typeof id === 'undefined') throw new Error('Can not unsubscribe without a subscriber id');

        subscriber = this.subscribers[id];

        this.node.removeEventListener(subscriber.topic, subscriber.listener, 0);

        delete this.subscribers[id];
    };

    return UnicronPubSub;
}();

var unicron_pub_sub = new UnicronPubSub();

var UnicronMessagingClient = function () {
    function UnicronMessagingClient(entity) {
        _classCallCheck(this, UnicronMessagingClient);

        this.pubsub = unicron_pub_sub;
        this.entity = entity;
        entity.subscriber = this.subscriber;
        entity.publish = this.publish;

        this.topic = entity.topic || 'data.change.local';

        //this.listener = this._listener.bind( this.entity );

        this._subscribe();
    }

    UnicronMessagingClient.prototype._listener = function _listener(message) {
        //console.log("message", message);
        console.log("message.detail", message.detail);
        //console.log("message.type", message.type);
        //console.log("message.timeStamp",message.timeStamp);
        console.log('scope of this:::: ', this);
    };

    UnicronMessagingClient.prototype._subscribe = function _subscribe() {
        //console.log( 'XXXXXXXXXX UnicronMessagingClient _subscribe' );
        this.subscriber = this.pubsub.subscribe(this.topic, this._listener, this.entity);
    };

    UnicronMessagingClient.prototype.publish = function publish(message, topic) {
        topic = topic || this.topic;
        message.from = this.subscriber.uid;
        this.pubsub.publish(topic, message);
    };

    UnicronMessagingClient.prototype._registerTopic = function _registerTopic() {
        this.pubsub._registerTopic(topic);
    };

    _createClass(UnicronMessagingClient, [{
        key: 'listener',
        get: function get() {
            return this._listener;
        },
        set: function set(newFunction) {
            if (newFunction) this._listener = newFunction.bind(this.entity);

            this.pubsub.unsubscribe(this.subscriber.id);
            this.pubsub.subscribe(this.topic, this._listener, this.entity);
        }
    }]);

    return UnicronMessagingClient;
}();

var DAO = function () {
    function DAO(app) {
        _classCallCheck(this, DAO);

        this.app = app;
        this.dao = JSData;
        this.events = this.app.events;
        this.dao_indexeddb_adapter = null;
        this.dao_http_adapter = null;
        this.local_database = null;
        this.remote_database = null;
        this.topic = 'data.change.local'; // mandatory to be used together UnicronMessagingClient
        this.messaging_client = new UnicronMessagingClient(this);
        this.messaging_client.listener = function (message) {
            //console.log("message", message);
            console.log("message.detail", message.detail);
            //console.log("message.type", message.type);
            //console.log("message.timeStamp",message.timeStamp);
            console.log('scope of this: DAO');
        };
        // now this.listener and this.publish are available
    }

    DAO.prototype.turnDatabaseOn = function turnDatabaseOn() {
        var enable_local_database = this.app.config.enable_local_database || false,
            enable_remote_database = this.app.config.enable_remote_database || false;

        if (enable_local_database) this.dao_indexeddb_adapter = new DSLocalForageAdapter();
        if (enable_remote_database) this.dao_http_adapter = new DSHttpAdapter();

        /*
        js-data 3.0
        if (enable_remote_database) {
            this.dao_http_adapter = new HttpAdapter();
            this.remote_database = new DataStore();
             this.remote_database.registerAdapter('http', this.dao_http_adapter, { 'default': true });
             
            this.events.trigger('onRemoteDatabaseReady');
        }*/

        if (this.dao_indexeddb_adapter) {
            this.local_database = new this.dao.DS();
            this.local_database.registerAdapter('lf', this.dao_indexeddb_adapter, {
                default: true
            });
            this.events.trigger('onLocalDatabaseReady');
        }

        if (this.dao_http_adapter) {
            this.remote_database = new this.dao.DS();
            this.remote_database.registerAdapter('http', this.dao_http_adapter, {
                'default': true
            });
            this.events.trigger('onRemoteDatabaseReady');
        }

        this.app.local_database = this.local_database;
        this.app.remote_database = this.remote_database;
    };

    return DAO;
}();

var UnicronSessionSystem = function () {
    function UnicronSessionSystem() {
        _classCallCheck(this, UnicronSessionSystem);
    }

    UnicronSessionSystem.prototype.get = function get(key, def) {
        var value = window.sessionStorage.getItem(key);
        var data;
        try {
            data = value ? JSON.parse(value) : def;
        } catch (e) {
            data = def;
        }
        return data;
    };

    UnicronSessionSystem.prototype.set = function set(key, value) {
        value = JSON.stringify(value);
        window.sessionStorage.setItem(key, value);
    };

    return UnicronSessionSystem;
}();

var UnicronBasicComponent = function () {
    function UnicronBasicComponent(app) {
        _classCallCheck(this, UnicronBasicComponent);

        //super();
        this.app = app;
        this._listenToTopic = topic_data_change_remote;
        this._publishToTopic = topic_data_change_local;
        //this.id = c.guid();

        this.events = this.app.events;

        this.session = this.app.session;

        this.events.trigger('onComponentStart');

        this.topic = 'data.change.local'; // mandatory to be used together UnicronMessagingClient
        this.messaging_client = new UnicronMessagingClient(this);
        // now this.listener and this.publish are available
        this.messaging_client.listener = function (message) {
            //console.log("message", message);
            console.log("message.detail", message.detail);
            //console.log("message.type", message.type);
            //console.log("message.timeStamp",message.timeStamp);
            console.log('scope of this: UnicronBasicComponent');
        };
    }

    UnicronBasicComponent.prototype.destroy = function destroy() {
        // destroy listener
    };

    UnicronBasicComponent.prototype._start = function _start() {
        // register component listener as a PubSub Listener

    };

    return UnicronBasicComponent;
}();

var Unicron = function (_UnicronWeapons2) {
    _inherits(Unicron, _UnicronWeapons2);

    function Unicron(c) {
        _classCallCheck(this, Unicron);

        var config = c || {},
            app = config.app,
            root = config.root,
            uid = '';

        var _this2 = _possibleConstructorReturn(this, _UnicronWeapons2.call(this));

        _this2.config = config;
        self.famd = null;
        _this2.famdURI = config.famd;

        _this2.environment = 'dev';

        _this2.app = app || _this2;
        _this2.root = root || document.body;

        _this2.events = new UnicronEventSystem();

        _this2.topic = 'data.change.local'; // mandatory to be used together UnicronMessagingClient
        _this2.messaging_client = new UnicronMessagingClient(_this2);
        // now this.listener and this.publish are available
        _this2.messaging_client.listener = function (message) {
            //console.log("message", message);
            console.log("message.detail", message.detail);
            //console.log("message.type", message.type);
            //console.log("message.timeStamp",message.timeStamp);
            console.log('scope of this: Unicron');
        };

        _this2.session = null;
        return _this2;
    }

    Unicron.prototype.start = function start(fnCallBack) {
        var self = this;
        self.events.trigger('onApplicationStart');

        window.UnicronDao = new DAO(this);
        window.UnicronDao.turnDatabaseOn();

        self.session = new UnicronSessionSystem();
        self.events.trigger('onSessionStart');

        self.fetch(self.famdURI, function (request) {
            self.famd = JSON.parse(request.responseText);
            //console.log( self.famd );

            // now use FAMD 
            self.events.trigger('onApplicationReady');
            if (fnCallBack) fnCallBack();
        });
    };

    Unicron.prototype.destroy = function destroy() {
        // remote database
        // local database
        // event system
        // session
        // temporary window scope
        // DAO
        // dao_http_adapter
        // dao_indexeddb_adapter
    };

    return Unicron;
}(UnicronWeapons);

var Cybertron = function () {
    return {
        Unicron: Unicron,
        UnicronBasicComponent: UnicronBasicComponent
    };
}();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_less_app_less__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_less_app_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_less_app_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_unicron_index_js__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyApp", function() { return MyApp; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MyApp = function (_Cybertron$Unicron) {
	_inherits(MyApp, _Cybertron$Unicron);

	function MyApp(config) {
		_classCallCheck(this, MyApp);

		return _possibleConstructorReturn(this, _Cybertron$Unicron.call(this, config));
		//console.log(config);
	}

	return MyApp;
}(__WEBPACK_IMPORTED_MODULE_1__node_modules_unicron_index_js__["a" /* Cybertron */].Unicron);

window.MyApp = MyApp;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map