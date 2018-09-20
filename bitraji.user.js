// ==UserScript==
// @name         bitflyer
// @namespace    test
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://lightning.bitflyer.jp/trade*
// @match        https://lightning.bitflyer.com/trade*
// @grant        none
// @noframes
// ==/UserScript==

window.onload = function() {
    const header = document.querySelector("#BFExtension4BTCST__log");
    let html = header.innerHTML;
    html =
        '<div id="logbox_wrapper">\n' +
        '  <button id="p_btn">子要素へ送信</button>\n' +
        '  <textarea id="logboxx" style="font-size: 6pt; min-height: 90px;">hoge</textarea>\n' +
        '</div>';
    header.innerHTML = html;

    const p_btn = document.querySelector("#p_btn");
    function aaa(){
        var logboxx = document.querySelector("#logboxx");
        console.log(logboxx.value);
        logboxx.value = "hogeeee";
    }
    p_btn.addEventListener("click", aaa, false);
}
