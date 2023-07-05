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

function scrollHandler() {
	fadeOutOnScroll(transition);
}

window.addEventListener('scroll', scrollHandler);


window.addEventListener('scroll', function() {
    var scrollingContent = document.querySelector('.box2');
    var scrolled = window.pageYOffset;
    scrollingContent.style.transform = 'translate3d(0, ' + scrolled * 0.8 + 'px, 0)';
  });
  