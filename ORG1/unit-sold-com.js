(() => {
    'use strict';
    const testInfo = {
        className: 'org-2-test',
        debug: 0,
        testName: '',
        testVersion: '0.0.1',
        baseElement: '#product-buy-more'
    };

    const waitForElement = (selector) => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
            } else {
                const observer = new MutationObserver((mutations) => {
                    if (document.querySelector(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                });
                observer.observe(document.documentElement, { childList: true, subtree: true });
                window.addEventListener('DOMContentLoaded', () => {
                    const element = document.querySelector(selector);
                    if (element) {
                        resolve(element);
                    } else {
                        reject("Target element not found.");
                    }
                });
            }
        });
    };

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) return;

        bodyEle.classList.add(testInfo.className);

        const compHeader = 'Over 1,000,000 Units Sold!';
        const productDetails = [
            { content: "Clinically Effective Dose" },
            { content: "Low Sugar (2g)" },
            { content: "Third Party Lab Tested" },
            { content: "Made in the USA" },
            { content: "60 Day Money Back Guarantee" }
        ];

        const productDetailsHTML = `
            <div class="prod-container">
                <h2>${compHeader}</h2>
                <div class="productDetailswrapper">
                    <div class="prod-content">
                        <ul>
                            ${productDetails.map(detail => `<li class="item">${detail.content}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="prod-Image">
                        <img src="https://cdn-3.convertexperiments.com/uf/10047433/100413532/product-image.png" alt="Product Image">
                    </div>
                </div>
            </div>`;

        waitForElement(testInfo.baseElement).then((el) => {
            if (!document.querySelector('.prod-container')) {
                el.insertAdjacentHTML('afterend', productDetailsHTML);
            }
        });
    };

    waitForElement('body').then(() => {
        loadTest();
    });
})();
