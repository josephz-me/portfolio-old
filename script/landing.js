// Menu Title
let logoName = document.getElementById('logo-name');
let logoDescription = document.getElementById('logo-description');

let firstDescription = 	"wants you to click again.";
let descriptions = [
	"wishes he liked seafood.",
	"thinks he's a minimalist.",
	"is learning 3D modeling",
	"thinks he can code.",
	"needs to read more.",
	"cooks too much chicken.",
	"lives by Google Calendar.",
	"owns a chihuahua/lab.",
	"is 60% extroverted.",
	"is a photographer.",
	"loves spreadsheets.",
];


// hide text spazzing on scroll
$(window).scroll(function(){
    $("#logo-description").css("opacity", 1 - $(window).scrollTop() / 100);
  });

// performs text spazzing
let count = 0;
let prevRandom;
const loopLength = 10;

function addLogoDescription() {
	for( i = 0; i < loopLength; i++){
		(function (i) {
			if(i === loopLength - 1){
				//first description
				if (count === 0){ setTimeout( () => logoDescription.innerHTML = firstDescription , i * 30); }
				//final result
				else{ 
					let currRandom = Math.floor(Math.random() * descriptions.length);

					if (currRandom === prevRandom){
						currRandom = Math.floor(Math.random() * descriptions.length);
					}
					else{ prevRandom = currRandom; }

					setTimeout( () => logoDescription.innerHTML = descriptions[currRandom] , i * 30);
				}
			}
			// everything thing in between
			else{ setTimeout( () => logoDescription.innerHTML = descriptions[i] , i * 30); }
		})(i);
	}
	count++;
}



let mobileWidth = window.matchMedia("(max-width: 500px)");
if(!mobileWidth.matches && $(window).scrollTop() < 10){
	logoName.addEventListener('click', addLogoDescription);
}

// if scroll is active, change 'joseph' behavior
document.addEventListener('load', debounce(josephBehavior));
document.addEventListener('scroll', debounce(josephBehavior));

// debounce function
function debounce(func, wait = 15, immediate = true) {
	var timeout;
	return function() {
	  var context = this, args = arguments;
	  var later = function() {
		timeout = null;
		if (!immediate) func.apply(context, args);
	  };
	  var callNow = immediate && !timeout;
	  clearTimeout(timeout);
	  timeout = setTimeout(later, wait);
	  if (callNow) func.apply(context, args);
	};
  }

function josephBehavior(){
	// disable text spazzing on mobile
	mobileWidth = window.matchMedia("(max-width: 450px)");
	// if scroll is on top
	if($(window).scrollTop() < 20){
		console.log('running');
		if(!mobileWidth.matches){
			logoName.addEventListener('click', addLogoDescription);	
			logoName.style.cursor = 'help';
		}
		logoName.removeAttribute("href");
	}
	// if it's scrolled down
	else if($(window).scrollTop() > 100){
		logoDescription.innerHTML = '';
		logoName.style.cursor = 'n-resize';
		logoName.href = "#top";
	}
	// else{
	// 	logoName.style.cursor = 'n-resize';
	// 	logoName.href = "#top";
	// }
}

// window.addEventListener('pageshow', function (event) {
//   if (!event.persisted) {
//     return;
//   }
//   var fader = document.getElementById('fader');
//   fader.classList.remove('fade-in');
// });