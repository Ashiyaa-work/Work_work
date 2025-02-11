(() => {
    'use strict';
    const testInfo = {
        className: 'rr-03-test',
        debug: 0,
        testName: 'RR3: [HOME] Highlight Free Gift Incentives ATF',
        testVersion: '0.0.1',
        baseElement: '#MainContent',
    };
    const waitForElement = (selector) => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            } else {
                window.addEventListener('DOMContentLoaded', () => {
                    const element = document.querySelector(selector);
                    if (element) {
                        resolve(element);
                    } else {
                        reject("Target element not found.");
                    }
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
                subtree: true
            });
        });
    };

    const reviewHtml = `<div id="shopify-section-template--16846061568090__6458a58b-aa88-42c4-8f-dc30800e3078" class="hero-mobile-noCTA"><div class="hero-img"><img class="mobile_img" src="https://cdn.shopify.com/s/files/1/0577/1260/7322/files/RR-home-hero-mobile-noCTA.png?v=1738858670" alt="Hero-mobile-banner"></div><a href="/products/rapid-radios-nationwide-ptt-walkie-talkie" class="parallelogram"><span>SHOP NOW</span><div class="arrow-img"><img src="https://rapidradios.com/cdn/shop/t/1/assets/next_arrow.png"></div></a>
</div>`;

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);

        waitForElement(testInfo.baseElement).then(() => {
            const heroSectonButton = document.querySelector(testInfo.baseElement);
            if (!document.querySelector('.review-coment'))
                heroSectonButton.insertAdjacentHTML('afterbegin', reviewHtml);
        });
    };
    waitForElement('body').then(() => {
        if (window.matchMedia("(max-width: 786px)").matches) {
            loadTest();
        }
    });
})();




