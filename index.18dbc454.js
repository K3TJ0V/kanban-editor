// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gEwwu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var _mainScss = require("../scss/main.scss");
var _normalizeCss = require("normalize.css");
Array.prototype.removeValue = function(value) {
    let indexValue = this.indexOf(value);
    if (indexValue != -1) this.splice(indexValue, 1);
};
function appendDefault(valueObject, defaultValueObject) {
    if (valueObject === undefined || valueObject === null) valueObject = {};
    for (let [key, value] of Object.entries(defaultValueObject))if (!valueObject.hasOwnProperty(key)) valueObject[key] = value;
    return valueObject;
}
const header = document.querySelector(".header");
const placeholder = document.querySelector(".placeholder");
const hamburger = document.querySelector(".header__hamburger--js");
const navBlock = document.querySelector(".header__nav--js");
const add = document.querySelector(".main__add--js");
const clear = document.querySelector(".main__clear--js");
const Creator = document.querySelector(".main__creator");
const creatorClose = document.querySelector(".close--js");
const colInput = document.querySelector(".creator__input--js");
const main = document.querySelector(".main");
const columnHolder = document.querySelector(".columnHolder");
const colSubmit = document.querySelector(".creator__submit--js");
const textEditor = document.querySelector(".task__editor--text");
const saveButton = document.querySelector(".nav--savebutton--js");
const loadButton = document.querySelector(".nav--loadbutton--js");
const deleteIcon = document.querySelector(".deleteIcon");
const moveIcon = document.querySelector(".moveIcon");
const editIcon = document.querySelector(".editIcon");
//setting variable for dragged element
let currentlyDragged;
let data = [];
saveButton.addEventListener("click", ()=>{
    let content = JSON.stringify(data);
    localStorage.setItem("data", content);
});
loadButton.addEventListener("click", ()=>{
    columnHolder.innerHTML = "";
    data.splice(0);
    let load = localStorage.getItem("data");
    let loadContent = JSON.parse(load);
    loadContent.forEach((column)=>{
        createAddColumn(column);
    });
});
hamburger.addEventListener("click", ()=>{
    navBlock.classList.toggle("visible");
    navBlock.prepend(hamburger);
    header.prepend(placeholder);
    if (navBlock.classList == "header__nav header__nav--js") {
        header.prepend(hamburger);
        navBlock.prepend(placeholder);
    }
});
//listeners to open, close column creator
add.addEventListener("click", ()=>{
    Creator.classList.toggle("visibleCreator");
});
creatorClose.addEventListener("click", ()=>{
    Creator.classList.remove("visibleCreator");
});
//column container to hold their headers
let columnsContainer = [];
let taskContainer = [];
class column {
    constructor(newColumn, colHeader, flexDiv, colList, taskArea, deleteButton, columnData){
        this.newColumn = newColumn;
        this.colHeader = colHeader;
        this.colList = colList;
        this.flexDiv = flexDiv;
        this.taskArea = taskArea;
        this.deleteButton = deleteButton;
        this.columnData = columnData;
    }
}
class task {
    constructor(newTask1, taskDescription, moveButton, deleteButton, flexDiv, taskData){
        this.newTask = newTask1;
        this.taskDescription = taskDescription;
        this.moveButton = moveButton;
        this.deleteButton = deleteButton;
        this.flexDiv = flexDiv;
        this.taskData = taskData;
    }
}
function createColumn(loadedColData) {
    let columnData = appendDefault(loadedColData, {
        name: "",
        taskList: []
    });
    //Creating Column elements
    const newColumn = document.createElement("section");
    const flexDiv = document.createElement("div");
    const colHeader = document.createElement("h3");
    const colList = document.createElement("button");
    const taskArea = document.createElement("section");
    const deleteButton = document.createElement("button");
    newColumn.columnData = columnData;
    // creating text to columns button and headers
    colList.innerText = ">";
    colHeader.innerText = columnData.name;
    columnData.name = columnData.name;
    // creating task button
    const addTask = document.createElement("button");
    addTask.classList.add("column__task");
    addTask.innerText = "Add task";
    deleteButton.innerHTML = deleteIcon.innerHTML + "Delete column";
    taskArea.appendChild(addTask);
    taskArea.appendChild(deleteButton);
    flexDiv.appendChild(colHeader);
    flexDiv.appendChild(colList);
    newColumn.appendChild(flexDiv);
    newColumn.appendChild(taskArea);
    //listener to task and delete button
    addTask.addEventListener("click", (e)=>{
        let newTask1 = addTask1(columnData.taskList);
        columnData.taskList.push(newTask1.taskData);
        let test = e.target.parentElement;
        test.prepend(newTask1.newTask);
        test.prepend(e.target);
    });
    deleteButton.addEventListener("click", (element)=>{
        let parentColumn = element.currentTarget.parentElement.parentElement;
        parentColumn.remove();
        data.removeValue(columnData);
        if (columnHolder.childElementCount == 0) clear.style.display = "none";
    });
    //listener to new column buttons
    colList.addEventListener("click", ()=>{
        colList.classList.toggle("opened");
        taskArea.classList.toggle("taskOpen");
    });
    //listener to handle droping tasks
    taskArea.addEventListener("dragover", (e)=>{
        e.preventDefault();
    });
    taskArea.addEventListener("dragenter", ()=>{
        newColumn.style.backgroundColor = "rgba(170, 204, 206, 0.579)";
    });
    taskArea.addEventListener("dragleave", ()=>{
        newColumn.style.backgroundColor = "rgba(208, 251, 254, 0.579)";
    });
    taskArea.addEventListener("drop", (e)=>{
        e.preventDefault();
        newColumn.style.backgroundColor = "rgba(208, 251, 254, 0.579)";
        e.currentTarget.insertBefore(currentlyDragged, e.currentTarget.lastChild);
        currentlyDragged.taskPreviousDataContainer.removeValue(currentlyDragged.taskData);
        columnData.taskList.push(currentlyDragged.taskData);
    });
    columnData.taskList.forEach((e)=>{
        newTask = addTask1(columnData.taskList, e);
        taskArea.prepend(newTask.newTask);
        taskArea.prepend(addTask);
    });
    //constructing column
    Column = new column(newColumn, colHeader, flexDiv, colList, taskArea, deleteButton, columnData);
    addColumnClasses(Column);
    columnsContainer.push(Column);
    return Column;
}
//move button list
function buttonListCreator(root, taskRoot, dataContainer, taskData) {
    for(let i = 0; i < columnsContainer.length; i++){
        const button = document.createElement("button");
        button.classList.add("move__list--button");
        button.innerHTML = columnsContainer[i].flexDiv.children[0].innerHTML;
        button.addEventListener("click", ()=>{
            let test = columnsContainer[i].taskArea.firstChild;
            columnsContainer[i].taskArea.insertBefore(taskRoot, test.nextSibling);
            dataContainer.removeValue(taskData);
            columnsContainer[i].columnData.taskList.push(taskData);
        });
        root.append(button);
    }
}
function addTask1(dataContainer, loadedTaskData) {
    let taskData = appendDefault(loadedTaskData, {
        description: ""
    });
    //Creating Column elements
    const newTask1 = document.createElement("section");
    const taskDescription = document.createElement("span");
    const moveButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const flexDiv = document.createElement("div");
    newTask1.taskData = taskData;
    //button values
    editButton.innerHTML = editIcon.innerHTML;
    moveButton.innerHTML = moveIcon.innerHTML;
    deleteButton.innerHTML = deleteIcon.innerHTML;
    //appending elements
    editButton.classList.add("task__edit");
    flexDiv.appendChild(editButton);
    flexDiv.appendChild(deleteButton);
    flexDiv.appendChild(moveButton);
    flexDiv.classList.add("task__flex");
    newTask1.appendChild(taskDescription);
    newTask1.appendChild(flexDiv);
    taskDescription.innerText = taskData.description;
    //buttons listeners
    deleteButton.addEventListener("click", (e)=>{
        let root = e.currentTarget.parentElement.parentElement;
        root.remove();
        dataContainer.removeValue(taskData);
    });
    //dragging listener
    newTask1.setAttribute("draggable", "true");
    newTask1.addEventListener("dragstart", (e)=>{
        currentlyDragged = e.currentTarget;
        currentlyDragged.taskPreviousDataContainer = dataContainer;
        currentlyDragged.taskData = taskData;
    });
    moveButton.addEventListener("click", ()=>{
        const moveList = document.querySelector(".task__move--list");
        moveList.classList.toggle("taskEditorOpened");
        let taskRoot = moveButton.parentElement.parentElement;
        if (moveList.classList == "task__move--list taskEditorOpened") {
            moveList.append(moveButton);
            const list = document.querySelector(".move__list");
            buttonListCreator(list, taskRoot, dataContainer, taskData);
        } else {
            flexDiv.append(moveButton);
            const list = document.querySelector(".move__list");
            list.innerHTML = "";
        }
    });
    editButton.addEventListener("click", ()=>{
        const taskEditor = document.querySelector(".task__editor");
        taskEditor.classList.toggle("taskEditorOpened");
        if (taskEditor.classList == "task__editor taskEditorOpened") taskEditor.append(editButton);
        else {
            flexDiv.prepend(editButton);
            taskDescription.innerHTML = textEditor.value;
            taskData.description = textEditor.value;
            textEditor.value = "";
        }
    });
    Task = new task(newTask1, taskDescription, moveButton, deleteButton, flexDiv, taskData);
    addTaskClasses(Task);
    taskContainer.push(Task.newTask);
    return Task;
}
function createAddColumn(columnData) {
    let column1 = createColumn(columnData);
    data.push(column1.columnData);
    columnHolder.appendChild(column1.newColumn);
    if (columnHolder.childElementCount > 0) clear.style.display = "block";
}
colSubmit.addEventListener("click", ()=>{
    // creating columns
    let columnName = colInput.value;
    createAddColumn({
        name: columnName
    });
    //setting empty input after adding new column
    colInput.value = "";
});
//clearing created columns(all at one click)
clear.addEventListener("click", ()=>{
    const columns = document.querySelectorAll(".main__column");
    columns.forEach((e)=>{
        e.remove();
        columnsContainer = [];
    });
    clear.style.display = "none";
});
function addColumnClasses(column1) {
    column1.newColumn.classList.add("main__column");
    column1.colList.classList.add("main__column--button");
    column1.taskArea.classList.add("main__column--task");
    column1.flexDiv.classList.add("column__flex");
    column1.colHeader.classList.add("column__flex--header");
    column1.deleteButton.classList.add("column__flex--deleteButton");
}
function addTaskClasses(task) {
    task.newTask.classList.add("task");
    task.taskDescription.classList.add("task__description");
    task.moveButton.classList.add("task__move");
    task.deleteButton.classList.add("task__delete");
}
if (window.innerWidth > 800) {
    const testing = document.querySelector(".main__buttonsFlex");
    header.appendChild(testing);
}

},{"../scss/main.scss":"4Pg3x","normalize.css":"eLmrl"}],"4Pg3x":[function() {},{}],"eLmrl":[function() {},{}]},["gEwwu","1SICI"], "1SICI", "parcelRequiredc87")

//# sourceMappingURL=index.18dbc454.js.map
