// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";
chrome.runtime.onInstalled.addListener(function() {
  // document.addEventListener('click', () => {
  //   console.log('clicked')
  // })

  // chrome.browserAction.onClicked.addListener(function(tab) {
  //   console.log(tab)
  // })

  // chrome.tabs.query({'active': true}, function(tab) {
  // })

  // chrome.storage.sync.set({ color: "black" }, function() {
  //   console.log("The color is green.");
  // });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       conditions: [
  //         new chrome.declarativeContent.PageStateMatcher({
  //           pageUrl: { hostEquals: "developer.chrome.com" }
  //         })
  //       ],
  //       actions: [new chrome.declarativeContent.ShowPageAction()]
  //     }
  //   ]);
  // });
});
