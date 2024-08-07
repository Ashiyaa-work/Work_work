(() => {
    "use strict";
    const testInfo = {
      className: "rel-07-test",
      debug: 0,
      testName: "REL7 [COLL] Optimize Mobile Layout",
      testVersion: "0.0.1",
    };
  
    const waitForElement = (selector) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        } else {
          window.addEventListener("DOMContentLoaded", () => {
            return reject("Target element not found.");
          });
        }
        const observer = new MutationObserver((mutations) => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });
        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    };
  
    const loadTest = () => {
      const bodyEle = document.body;
      if (bodyEle.classList.contains(testInfo.className)) {
        return;
      }
      bodyEle.classList.add(testInfo.className);
    };
  
    waitForElement("body").then(() => {
      loadTest();
    });
  })();