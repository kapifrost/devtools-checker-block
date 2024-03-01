// ==UserScript==
// @name         AniWatch.to Popup Blocker (Release)
// @namespace    https://kapifrost.github.io/
// @version      1.0
// @description  Remove AniWatch.To Popup Ads
// @author       kapifrost
// @match        https://hianime.to/*
// @match        https://aniwatch.to/*
// @match        https://aniwatchtv.to/*
// @match        https://aniwatch.nz/*
// @match        https://aniwatchtv.se/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aniwatch.to
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function(){'use strict';const a=new URL(window.location.href),b=a.hostname.startsWith("hianime");window.performance.now=()=>0,window.console.log=()=>{},window.console.table=()=>{},window.console.clear=()=>{};const c=Function.prototype.constructor;Function.prototype.constructor=function(a){if("debugger"==a){let a=function(){};return a.call=function(){},a.apply=function(){},a}return c.apply(this,arguments)};const d=["nossairt.net","tag.min.js","/4/","/5/","6551527","6534229","?oo=1&aab=1","fac.php","afu.php","apu.php","e2ertt.com","cdnads.com","perf.gif"];window.blockDomains=d;const e=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(a,b){return d.some(a=>b.includes(a))?void console.log("%c[AniWatchAdBlock] Block Popup Ads Page:","color: #3498db; font-weight: bold;",b):e.apply(this,arguments)};const f=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){return 0===this.readyState?void 0:f.apply(this,arguments)};const g=Node.prototype.appendChild,h=document.createElement("DIV");h.id="HiddenElement",h.style.display="none",document.body?.appendChild(h),Node.prototype.appendChild=function(a){return"SCRIPT"==a.tagName&&d.some(b=>a.src.includes(b))?void console.error("%c[AniWatchAdBlock] Reject AdScript:","color: #3498db; font-weight: bold;",a.src):this===document.documentElement&&"DIV"==a.tagName&&a.getAttribute("style").includes("2147483647")?(console.log("%c[AniWatchAdBlock] Reject AdDiv:","color: #3498db; font-weight: bold;",a),g.apply(h,arguments)):g.apply(this,arguments)};const i=Node.prototype.removeChild;Node.prototype.removeChild=function(a){return a.parentElement==this?i.apply(this,arguments):void 0};const j=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(){let a=new Error().stack;for(const b of d)if(a.includes(b))return;return j.apply(this,arguments)}})();