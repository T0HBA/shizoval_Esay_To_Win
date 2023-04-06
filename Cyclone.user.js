// ==UserScript==
// @name         Cyclone 🥂🥂
// @version      1.0.0
// @description  Free Tanki Online Cheat for Celebrate 🥂
// @author       TOHBA
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/T0HBA/shizoval_Esay_To_Win/main/Cyclone.js',
    nocache: true,
    onload: data => eval(data.responseText)
})

//You don't need any clan to Celebrate this hack 🥂🥂
//Easy to Celebrate and to Win and to Destroy 🥂🥂
