(() => {
    'use strict';
    const testInfo = {
        className: 'at-10-test',
        debug: 0,
        testName: 'AT10 - PDP layout & description Text for the product',
        testVersion: '0.0.1'
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
    const classAllocations = (selector,prefix) => {
        let sectionIndex = 1;
        document.querySelectorAll(selector).forEach((e) => {
            e.classList.add(prefix+'-'+sectionIndex);
            sectionIndex++;
        });
    };
 
    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);
        
        //section-1
        const sprayAmountTitle=`<p class='spray-amount-title'>1.7 FL OZ/ one 50 ML bottle = 600 SprayS, That's only $0.046/ spray</p>`;
        //section-2
        const perfumePrice =`<div class="perfume-price"><p><span>AlphaTouch&reg; </span>is not just a pheromone cologne; it's a confidence booster backed by science that makes you feel unstoppable. Our scent is subtle yet alluring, giving you that extra edge in dating & life.</p><div><p><span>Bundle & Save:</span></p><p><span>Buy 1:</span> $27.99 per bottle (65% off)</p><p><span>Buy 2:</span> $22.40 per bottle (72% off) - <span>Most Popular</span></p><p><span>Buy 3:</span> $19.60 per bottle(75% off) - Most Savings</p></div><div><p><span>Each 1.7 fl oz bottle provides up to 600 sprays, costing just $0.046 per spray.</span></p><p>Join the 87% of customers who love our long-lasting fragrance.</p></div></div>`;
        //section-3
        const perfumeReview=`<div class="perfume-review results">
	<div class="results-rows-container">
		<div class="results-row">
				<img src='https://cdn.shopify.com/s/files/1/0716/2157/4941/files/slide-1.jpg?v=1719294746'/>
				<div class="results-container">
					<div class="results-percentage">
					  <p>90%</p>
					</div>
					<div class="results-text">
					  <p><strong>Said they instantly felt increased confidence</strong></p>
					</div>
				</div>
        </div>
		<div class="results-row">
				<img src='https://cdn.shopify.com/s/files/1/0716/2157/4941/files/slide-2.jpg?v=1719294746'/>
				<div class="results-container">
					<div class="results-percentage">
					  <p>92%</p>
					</div>
					<div class="results-text">
					  <p><strong>Noticed more attention and interest from woman</strong></p>
					</div>
				</div>
        </div>
		<div class="results-row">
				<img src='https://cdn.shopify.com/s/files/1/0716/2157/4941/files/slide-3.jpg?v=1719294746'/>
				<div class="results-container">
					<div class="results-percentage">
					  <p>87%</p>
					</div>
					<div class="results-text">
					  <p><strong>Loved the long lasting scent</strong></p>
					</div>
				</div>
        </div>
		
	</div>
	<div class="results-caption">
              <p><em>Based on a survey of over 650+ satisfied AlphaTouch® customers.</em></p>
    </div>
</div>`;
//section-4
const pheromoneWorkHtml=`<div class="pheromones-work-conatiner">
	<div class="pheromones-work-text">
		<h2 class="pheromones-work-header">How do pheromones work</h2>
		<div class="pheromones-work-items">
			<div class="pheromones-work-item">
				<div class="pheromones-work-item-header">
					<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/aroma.png?v=1719294745">
					<h3>Scent Detection</h3>
				</div>
				<div class="pheromones-work-item-text">
					<p>When she gets a smell of our pheromone-infused fragrance, her nose picks up the special pheromone molecules, sparking instant attraction.</p>
				</div>
			</div>
		</div>
		
		<div class="pheromones-work-items">
			<div class="pheromones-work-item">
				<div class="pheromones-work-item-header">
					<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/creativity.png?v=1719294745">
					<h3>Neural Activation</h3>
				</div>
				<div class="pheromones-work-item-text">
					<p>These pheromones send signals straight to her brain’s emotion center, triggering a response that makes you more appealing.</p>
				</div>
			</div>
		</div>
		
		<div class="pheromones-work-items">
			<div class="pheromones-work-item">
				<div class="pheromones-work-item-header">
					<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/love.png?v=1719294745">
					<h3>Primal Response</h3>
				</div>
				<div class="pheromones-work-item-text">
					<p>This reaction awakens her primal instincts, boosting her interest and desire for intimate encounters.</p>
				</div>
			</div>
		</div>
		
		
	</div>
	<div class="pheromones-work-img">
		<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/couple.jpg?v=1719294747">
	</div>

</div>`;
  
  //section-5   
const perfumeIngredient = 
`<div class="perfume-ingredient">
	<div class="perfume-ingredient-img">
		<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/bg-desk.jpg?v=1719294747"/>
	</div>
	<div class="perfume-ingredient-text">
		<h3>A Closer Look at the Ingredients</h3>
		<div class="">
			<p>AlphaTouch’s formula is designed for real impact. Each spray stays effective all day, so you can stay confident and attractive from morning to night.</p>
			<p>Our blend of pheromones and Cedarwood not only smells great but also works together to enhance your presence.</p>
			<p>Our signature Cedarwood scent is more than a fragrance – it’s an experience!</p>
		</div>
		<div class="perfume-ingredient-effects">
			<div class="perfume-ingredient-effect-img effect-1">
				<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/feature-1.jpg?v=1719294744">
				<div class="perfume-ingredient-effect-text effect-1">
					<p><strong>Calming Effects</strong></p>
					<p>Cedarwood reduces stress and anxiety, making you more approachable and relaxed.</p>	
				</div>
			</div>
			
			<div class="perfume-ingredient-effect-img effect-2">
				<img src="https://cdn.shopify.com/s/files/1/0716/2157/4941/files/feature-2.jpg?v=1719294745">
				<div class="perfume-ingredient-effect-text effect-2">
					<p><strong>Masculine Aroma</strong></p>
					<p>Its warm, woody fragrance exudes natural masculinity, boosting your confidence and appeal, making you irresistible on dates.</p>	
				</div>
			</div>
		</div>
		
	</div>
</div>`;
    
         waitForElement('.shopify-section').then(() => {
         	classAllocations('.shopify-section','section')
         });
         waitForElement('.product-form').then(() => {
         	// Add tittle below add to cart button
         	document.querySelector('.product-form.main-product-form').insertAdjacentHTML('beforeend',sprayAmountTitle);
         });
        
         waitForElement('.product-form.main-product-form').then(() => {
         	// movind the add to cart button near quantitiy element
         const quantityEle = document.querySelector('.quantity-breaks.quantity-breaks--normal')
         const productForm= document.querySelector('.product-form.main-product-form');
         quantityEle.insertAdjacentElement('afterEnd',productForm)
         });
			
			waitForElement('.stock-section.maison_test').then(() => {
			//adding perfume price
		document.querySelector('.stock-section.maison_test').insertAdjacentHTML('afterend',perfumePrice);
			}); 
         
         	waitForElement('.content-and-results .results__row').then(() => {
         	//adding perfume review	
         document.querySelector('.shopify-section .color-background-1.content-for-grouping .page-width .content-and-results .results-container').innerHTML=perfumeReview;
         	});
        
     
    };
    waitForElement('body').then(() => {
        loadTest();
    });
})();
