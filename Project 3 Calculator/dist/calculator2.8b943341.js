// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"calculator2.js":[function(require,module,exports) {
var key = document.querySelectorAll('.key');
var display = document.querySelector('.number');

var total = 0;
var enterNumber = "";
var signFlag = "";
printNumber(0);

Array.from(key).forEach(function (link) {
    link.addEventListener('click', function (event) {
        console.log(this.innerText);
        var keyPress = this.innerText;
        checkKey(keyPress);
    });
});

function printNumber(temp) {
    display.innerText = temp;
}

function checkKey(keyPressed) {
    switch (keyPressed) {
        case "1":
            console.log(1);
            addToNumber(1);
            console.log(total);
            break;

        case "2":
            console.log(2);
            addToNumber(2);
            console.log(total);
            break;
        case "3":
            console.log(3);
            addToNumber(3);
            console.log(total);
            break;

        case "4":
            console.log(4);
            addToNumber(4);
            console.log(total);
            break;

        case "5":
            console.log(5);
            addToNumber(5);
            console.log(total);
            break;

        case "6":
            console.log(6);
            addToNumber(6);
            console.log(total);
            break;

        case "7":
            console.log(7);
            addToNumber(7);
            console.log(total);
            break;

        case "8":
            console.log(8);
            addToNumber(8);
            console.log(total);
            break;

        case "9":
            console.log(9);
            addToNumber(9);
            console.log(total);
            break;

        case "0":
            console.log(0);
            addToNumber(0);
            console.log(total);
            break;

        case "C":
            console.log("Clear");
            clearAll();
            console.log(total);
            break;

        case "+":
            console.log("plus");
            calculation();
            signFlag = "plus";
            break;

        case "-":
            console.log("minus");
            calculation();
            signFlag = "minus";
            break;
        case "X":
            console.log("multiply");
            calculation();
            signFlag = "multiply";
            break;
        case "÷":
            console.log("divide");
            calculation();
            signFlag = "divide";
            break;
        case "←":
            console.log("delete");
            removeNumberLast();
            break;
        case "=":
            console.log("equal");
            calculation();
            signFlag = "equal";
            break;
        default:
            break;
            console.log("");
    }
}

function addToNumber(numberPressed) {
    if (checkLimitNumber()) {
        return;
    }
    enterNumber = enterNumber + numberPressed;
    // display.innerText = parseInt(enterNumber, 10);
    printNumber(parseInt(enterNumber, 10));
}

function clearAll() {
    signFlag = "";
    total = 0;
    enterNumber = "";
    printNumber(total);
}

function checkLimitNumber() {
    if (enterNumber.length > 14) {
        console.log("limit out");
        return true;
    }
}

function removeNumberLast() {
    if (enterNumber.length === 0) {
        return 0;
    }

    if (enterNumber.length === 1) {
        var str = enterNumber;
        str = str.slice(0, -1);
        enterNumber = str;
        printNumber(0);
    } else {

        var str = enterNumber;
        str = str.slice(0, -1);
        enterNumber = str;
        printNumber(str);
    }
}

function calculation() {
    switch (signFlag) {
        case "":
            total = parseInt(enterNumber, 10);
            console.log(total);
            printNumber(0);
            enterNumber = 0;
            break;
        case "plus":
            total = total + parseInt(enterNumber, 10);
            console.log(total);
            printNumber(total);
            enterNumber = 0;
            break;
        case "minus":
            total = total - parseInt(enterNumber, 10);
            console.log(total);
            printNumber(total);
            enterNumber = 0;
            break;
        case "multiply":
            total = total * parseInt(enterNumber, 10);
            console.log(total);
            printNumber(total);
            enterNumber = 0;
            break;
        case "divide":
            if (enterNumber === "0") {
                return 0;
            } else {
                total = total / parseInt(enterNumber, 10);
                console.log(total);
                printNumber(total);
                enterNumber = 0;
            }
            break;
        case "equal":
            printNumber(total);
            clearAll();
            break;

        default:
            break;
    }
}
},{}],"C:\\Users\\LAKHE\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\lib\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '2285' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\LAKHE\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\lib\\builtins\\hmr-runtime.js","calculator2.js"], null)
//# sourceMappingURL=/calculator2.8b943341.map