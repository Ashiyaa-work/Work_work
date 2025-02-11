(() => {
    'use strict';
    const testInfo = {
        className: 'rr-03-test',
        debug: 0,
        testName: 'RR3: [HOME] Highlight Free Gift Incentives ATF',
        testVersion: '0.0.1',
        baseElement: '#MainContent',
    };
    const uspDescriptionData = [
        "Free USA Shipping from Michigan ",
        "100% American Owned Business",
        "100% No Monthly Fees - Ever!"
    ];
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

    function updateDescriptions(className, descriptions) {
        const elements = document.querySelectorAll(`.${className}`);

        elements.forEach((el, index) => {
            if (index < 3 && descriptions[index]) {
                el.textContent = descriptions[index];
            }
        });
    }

    updateDescriptions("serviceBlock .ser_title", uspDescriptionData);


    const reviewHtml = `<div id="shopify-section-template--16846061568090__6458a58b-aa88-42c4-8f-dc30800e3078" class="hero-mobile-noCTA"><div class="hero-img"><div><img class="mobile_img" src="https://cdn.shopify.com/s/files/1/0577/1260/7322/files/RR-home-hero-mobile-noCTA.png?v=1738858670" alt="Hero-mobile-banner"></div></div>
	<a href="/products/rapid-radios-nationwide-ptt-walkie-talkie" class="parallelogram"><span>SHOP NOW</span><div class="arrow-img"></div></a>
	<div class="offers">
	<div class="offer-description">
		<div class="checked-list"><img src="https://cdn.shopify.com/s/files/1/0577/1260/7322/files/checked-list.png?v=1739163306"></div>
		<p>Spend $199+ and get a FREE Emp Protection Bag</p>
		</div>
		<div class="offer-description">
		<div class="checked-list"><img src="https://cdn.shopify.com/s/files/1/0577/1260/7322/files/checked-list.png?v=1739163306"></div>
		  <p>Spend $499+ and get a FREE Tactical Pouch</p>
		</div>
		</div>
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
        if (window.matchMedia("(max-width: 768px)").matches) {
            loadTest();
        }
    });
})();
