(() => {
  "use strict";
  const testInfo = {
    className: "gmh-03-test",
    debug: 0,
    testName: "GMH3: [SITEWIDE] Add Secondary Announcement Bar",
    testVersion: "0.0.2",
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

  const classAllocations = (selector, prefix) => {
    let sectionIndex = 1;
    document.querySelectorAll(selector).forEach((e) => {
      e.classList.add(prefix + "-" + sectionIndex);
      sectionIndex++;
    });
  };
  const secondAccouncement = `<div class="secondary-bar"><p>Trim Pod 2.0  |  <a href="https://groomhere.co.uk/products/women-shaver">Shop Women Shaver</a> | <a href="https://groomhere.co.uk/products/trimmer">Shop Men Shaver</a></p></div>`;
  const loadTest = () => {
    const bodyEle = document.body;
    if (bodyEle.classList.contains(testInfo.className)) {
      return;
    }
    bodyEle.classList.add(testInfo.className);

    waitForElement("#HeaderWrapper").then(() => {
      classAllocations("main-content > div", "section");
      const headerBar = document.querySelector("#HeaderWrapper");
      headerBar.insertAdjacentHTML("beforeend", secondAccouncement);
    });
  };

  waitForElement("body").then(() => {
    loadTest();
  });
})();
