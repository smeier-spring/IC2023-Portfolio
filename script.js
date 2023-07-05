//function to fade elements out on scroll
var transition = document.getElementById('transition');
function fadeOutOnScroll(element) { 
	if (!element) {
		return;
	}
    var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	var distanceTop = window.pageYOffset + element.getBoundingClientRect().top;
	var opacity = 1;
	
	if (scrollTop > distanceTop) {
		opacity = 1 - (scrollTop - distanceTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

//function for parallax effect in section 2
function scrollHandler() {
	fadeOutOnScroll(transition);
}

   window.addEventListener('scroll', scrollHandler);
    window.addEventListener('scroll', function() {
    var scrollingContent1 = document.getElementById('boxA');
    var scrollingContent2 = document.getElementById('boxC');
    const fastBox = document.getElementById('boxB');

    var scrolled = window.scrollY-3000;
    scrollingContent1.style.transform = 'translate3d(0, ' + scrolled*0.8 + 'px, 0)';
    scrollingContent2.style.transform = 'translate3d(0, ' + scrolled*0.8 + 'px, 0)';
    fastBox.style.transform = 'translate3d(0, '+ (scrolled*0.95) + 'px, 0)';
        });