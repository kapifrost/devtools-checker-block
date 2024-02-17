// ==UserScript==
// @name         Devtools Checker Block
// @namespace    http://kapifrost.github.io/
// @downloadURL  https://github.com/
// @updateURL    https://github.com/
// @version      1.0
// @description  Block common DevTools Checker methods
// @author       kapifrost
// @match        *://*/*
// @match        *
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Internal Function
    function Clone(object) {
        if (!object) {
            return;
        }
        let cloned = null;
        switch (true) {
            case typeof object === 'object' && Array.isArray(object):
                return [ ...object ];
                break;
            case typeof object === 'object':
                cloned = {};
                Object.getOwnPropertyNames(object).forEach((key) => { cloned[key] = object[key]; })
                return cloned;
                break;
            default:
                return object;
        }
    }

    const console = Clone(window.console);

    // https://github.com/AEPKILL/devtools-detector/
    window.performance = window.performance || {};
    window.performance.now = () => { return 0; }
    window.console.log.apply = () => {}
    window.console.table.apply = () => {}
    window.console.clear.apply = () => {}

    // Strict window size DevTools Checker (Not Recommended)
    // https://github.com/sindresorhus/devtools-detect/
    if (false) {
        Object.defineProperty(window, 'outerWidth', {
            get: function() {
                return window.innerWidth;
            },
        });
        Object.defineProperty(window, 'outerHeight', {
            get: function() {
                return window.innerHeight;
            },
        });
    }

    // https://obfuscator.io/ & others
    const originalConstructor = Function.prototype.constructor;
    Function.prototype.constructor = function (stuff) {
        if (stuff == 'debugger') {
            let debug = function() {};
            debug.call = function() {};
            debug.apply = function() {};
            return debug;
        } else {
            return originalConstructor.apply(this, arguments);
        }
    };

    // https://github.com/david-fong/detect-devtools-via-debugger-heartstop/
    const originalBlob = Blob;
    window.Blob = function() {
        if ([...arguments[0]].some((e) => e && typeof(e) === 'string' && e?.includes("debugger"))) {
            return new originalBlob(['']);
        }
        return new originalBlob(...arguments);
    }
})();