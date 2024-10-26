(() => {
    'use strict';
    const testInfo = {
        className: 'org-test',
        debug: 0,
        testName: 'test',
        testVersion: '0.0.1'
    };

    const waitForElement = (selector) => {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            } else {
                window.DOMContentLoaded = () => {
                    return reject(document.querySelector(selector), "Target element not found.");
                };
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

    const addFiles = () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        document.getElementsByTagName('head')[0].appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(script);
    };

    const initSlider = () => {
        const checkSlider = setInterval(() => {
            if (typeof Swiper !== 'undefined') {
                clearInterval(checkSlider);
                new Swiper(".custom-review-swiper", {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    grabCursor: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        310: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    }
                });
            }
        }, 500);
    };
    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);

        const imgBaseURL = 'https://cdn-3.convertexperiments.com/uf/10047433/10048590/';
        const slideData = [{
            image: 'https://cdn-3.convertexperiments.com/uf/10047433/10048590/Men.png',
            contentHeader: "Tastes Good!",
            content: "I’ve tried many green juices and this one is by far the most pleasant tasting.",
        }, {
            image: 'https://cdn-3.convertexperiments.com/uf/10047433/10048590/rev_women1.png',
            contentHeader: "The weight just dropped off...",
            content: "I decided to take the fat out of my diet and I combined that with Organifi, and that was the winning combination for me",
        }, {
            image: 'https://cdn-3.convertexperiments.com/uf/10047433/10048590/rev_women2.png',
            contentHeader: "Best thing EVER",
            content: "Best thing EVER to put into my system first thing in the morning! Makes the rest of my day so much nicer, with energy and all-round good feeling.",
        }
            , {
            image: 'https://cdn-3.convertexperiments.com/uf/10047433/10048590/rev_women3.png',
            contentHeader: "I lost 35 lbs in 5 months. . .",
            content: "The first time I used Organifi, a dear friend of mine brought it to me because of the results he was achieving. I lost 35 pounds in 5 months simply by starting every day with a scoop of Organifi.",
        }];

        let slides = '';
        slides = slideData.map((data, i) => `<div class="swiper-slide" data-slide-no="${i + 1}">
        
        <div class="review-image"><img src="${data.image}" alt="verified"></div>
        <div class="review-comment-wrapper">
        <div class="rating-stars"><img src="${imgBaseURL}ratingstar.png" class=""alt="rating"></div>
        <div class="review-heading">${data.contentHeader}</div>
        <div class="review-comment">${data.content}</div>
        </div></div>`);

        const sliderEle = `<div class="review-container"><h2>See What Customers are Saying</h2><div class="custom-slider-wrapper"><div class="main-slider"><div class="swiper custom-review-swiper"><div class="swiper-wrapper">${slides.join('')}</div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div></div></div>`;


        waitForElement('#product-buy-more').then((el) => {
            if (!document.querySelector('.custom-slider-wrapper')) {
                el.insertAdjacentHTML('afterend', sliderEle);
                initSlider();
            }
        });
    };
    waitForElement('body').then(() => {
        addFiles();
        loadTest();
    });
})();