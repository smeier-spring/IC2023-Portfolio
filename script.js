const scrollProgress = document.getElementById('scrollbar');
const screenHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const top = document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(top / screenHeight) * 100}%`;
});

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

function scrollHandler() {
	fadeOutOnScroll(transition);
}
   window.addEventListener('scroll', scrollHandler);


//function for parallax effect in section 2
    window.addEventListener('scroll', function() {
    var scrollingContent1 = document.getElementById('boxA');
    var scrollingContent2 = document.getElementById('boxC');
    const fastBox = document.getElementById('boxB');

    var scrolled = window.scrollY-3000;
    scrollingContent1.style.transform = 'translate3d(0, ' + scrolled*0.9 + 'px, 0)';
    scrollingContent2.style.transform = 'translate3d(0, ' + scrolled*0.9 + 'px, 0)';
    fastBox.style.transform = 'translate3d(0, '+ (scrolled*1) + 'px, 0)';
        });


//"create" animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    const section0 = entry.target.querySelector('.colTitle0');
    const section1 = entry.target.querySelector('.colTitle1');
    const section2 = entry.target.querySelector('.colTitle2');
    const section4 = entry.target.querySelector('.colTitle4');

    const section3 = entry.target.querySelector('.colTitle3');
    const section5 = entry.target.querySelector('.colTitle5');


    if (entry.isIntersecting)
    {
        section0.classList.add('animation');
        section1.classList.add('animation');
        section2.classList.add('animation');
        section4.classList.add('animation');

        section3.classList.add('animation2');
        section5.classList.add('animation2');
        
        return;
    }
    section0.classList.remove('animation');
    section1.classList.remove('animation');
    section2.classList.remove('animation');
    section4.classList.remove('animation');


    section3.classList.remove('animation2');
    section5.classList.remove('animation2');
});
});
observer.observe(document.querySelector('.create'));

//for scrolling back to the top
document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('toTop');

 scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(1000);
  });
});

function scrollToTop(duration) {
    var start = window.pageYOffset;
    var startTime = performance.now();
    
    function animateScroll(timestamp) {
      var currentTime = timestamp - startTime;
      var scrollY = Math.easeIn(currentTime, start, -start, duration);
      
      window.scrollTo(0, scrollY);
      
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

   Math.easeIn = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animateScroll);
}