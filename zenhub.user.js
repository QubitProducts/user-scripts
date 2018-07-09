// ==UserScript==
// @name         Qubit Zenhub Mods
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Qubit Zenhub Mods
// @author       Michiel Helvensteijn <michiel@qubit.com>
// @match        https://app.zenhub.com/workspace/o/qubitdigital/team-swat/boards*
// @grant        none
// @updateURL    https://github.com/QubitProducts/user-scripts/raw/master/zenhub.user.js
// ==/UserScript==

(() => {
	function addGlobalStyle(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild(style);
	}

	const cpr = `.zhc-issue-card__connected-pull-request`

	addGlobalStyle(`
      ${cpr} {
        background-color: white;
      }

	  ${cpr} .zhc-issue-card__section__meta {
        display: none;
      }

      ${cpr} .zhc-issue-card__header {
        padding: 4px 0 0 0;
      }

      ${cpr} .zhc-issue-card__heading__main {
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin-bottom: 2px;
      }

      ${cpr} .zhc-issue-card__heading__main::before {
        content: '🗸';
        order: 4;
        margin-right: 6px;
        position: relative;
        top: -1px;
        margin-left: -18px;
        color: lightgray;
      }

      ${cpr} .zhc-issue-card__heading__main .zhc-icon--pull-request {
        order: 1;
        margin: 0 3px 0 0;
      }

      ${cpr} .zhc-issue-card__heading__main .zhc-issue-card__repo-name {
        order: 2;
        margin-right: auto;
      }

      ${cpr} .zhc-issue-card__heading__main .zhc-icon--issue-closed-red {
        order: 3;
        visibility: hidden;
      }

      ${cpr} .zhc-issue-card__heading__main .zhc-icon--issue-closed-red::before {
        content: '✓';
        color: green;
        visibility: visible;
        float: right;
        margin-right: 2px;
        position: relative;
        top: -2px;
        font-size: 1.1em;
      }

      ${cpr} .zhc-issue-card__heading__main .zhc-issue-card__issue-number {
        display: none;
      }

      ${cpr} .zhc-issue-card__issue-title {
        display: none;
      }
	`)
})();
