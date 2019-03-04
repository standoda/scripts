// ==UserScript==
// @name         Wider Gallery
// @version      0.1
// @author       e
// @match        https://knowyourmeme.com/*photos*
// @match        https://knowyourmeme.com/memes/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

var width = 1400;
GM_addStyle (`
    .listings #content{width: ${width}px !important}
    .listings #maru{max-width: ${width}px !important; min-width: ${width}px !important}
    .listings #sidebar{display: none !important}
`);
