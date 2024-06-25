(() => {
  'use strict';
  const testInfo = {
    className: 'nix-17-test',
    debug: 0,
    testName: 'NIX17 [PDP-SPEC2] Move & Link Info Video ATF',
    testVersion: '0.0.1'
  };

  const waitForElement = (selector) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      } else {
        window.addEventListener('DOMContentLoaded', () => {
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
        subtree: true
      });
    });
  };

  const loadTest = () => {
    const bodyEle = document.body;
    if (bodyEle.classList.contains(testInfo.className)) { return }
    bodyEle.classList.add(testInfo.className);

    waitForElement('.vc_row.wpb_row.vc_row-fluid.vc_row-has-fill .wpb_column.vc_column_container').then(() => {
      const video_html = `<div class="video_container text">
        <span>
          <svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Layer_1"></g>
            <g id="play_x5F_alt">
              <path d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M10,24V8l16.008,8L10,24z" style="fill:#4E4E50;"></path>
            </g>
          </svg>
        </span>
        <p class="video_anchor">Learn more about the Nix Spectro 2</p>
      </div>
      <div class="popup-overlay" id="videoPopup">
        <div class="popup-content">
          <div class="popup-header">
            <p>How It Works</p>
            <svg class="close-button" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
              <path d="M0 0h48v48h-48z" fill="none"/>
            </svg>
          </div>
          <iframe src="https://player.vimeo.com/video/850238990?h=569791839b&color=FDDD00&title=0&byline=0&portrait=0" target="_blank" title="description" allow="autoplay; fullscreen"></iframe>
        </div>
      </div>`;
      
      // To add section class
      const classAllocations = (selector,prefix) => {
        let sectionIndex = 1;
        document.querySelectorAll(selector).forEach((e) => {
            e.classList.add(prefix+'-'+sectionIndex);
            sectionIndex++;
        });
    };
			 classAllocations('.wpb-content-wrapper > div','section');
			 
			 //insert the video HTML
      document.querySelector(".section-1 .wpb_wrapper").insertAdjacentHTML('afterend', video_html);
      
      // show the popup
      document.querySelector('.video_container.text').addEventListener('click', function() {
      	  document.documentElement.classList.add('html-no-scroll');
        document.getElementById('videoPopup').classList.add('popup-visible');
      });

			// to hide popup if click close button
      document.querySelector('.popup-overlay .close-button').addEventListener('click', function() {
      	document.documentElement.classList.remove('html-no-scroll');
        const videoPopup = document.getElementById('videoPopup');
        videoPopup.classList.remove('popup-visible');
        const iframe = videoPopup.querySelector('iframe');
        iframe.src = iframe.src; 
      });

		// to hide popup if click outside
      document.querySelector('.popup-overlay').addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('popup-visible');
          document.documentElement.classList.remove('html-no-scroll');
           const iframe = this.querySelector('iframe');
          iframe.src = iframe.src; 
        }
      });
    });
  };

  waitForElement('body').then(() => {
    loadTest();
  });
})();
