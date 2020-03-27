// Mobile Menu Bar //
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

// Menu Title
let logoName = document.getElementById('logo-name');
let logoDescription = document.getElementById('logo-description');

let descriptions = [
	"wants you to click again.",
	"wishes he liked seafood.",
	"thinks he's a minimalist.",
	"hates holding grudges.",
	"needs to read more.",
	"cooks too much chicken.",
	"is an avid procrastinator.",
	"owns a chihuahua/lab.",
	"is 60% extroverted.",
]


// hide text spazzing on scroll
$(window).scroll(function(){
    $("#logo-description").css("opacity", 1 - $(window).scrollTop() / 100);
  });

// performs text spazzing
let count = 0;
function addLogoDescription() {
	for( i = 0; i < descriptions.length; i++){
		(function (i) {
			if(i === descriptions.length - 1){
				if (count < 1){
					setTimeout( () => logoDescription.innerHTML = descriptions[0] , i * 30);
				}
				else{ setTimeout( () => logoDescription.innerHTML = descriptions[Math.floor(Math.random() * descriptions.length)] , i * 30);}
			}
			else{ setTimeout( () => logoDescription.innerHTML = descriptions[i] , i * 30); }
		})(i);
	}
	count++;
}
// if scroll is active, change 'joseph' behavior

document.addEventListener('click', josephBehavior);
document.addEventListener('load', josephBehavior);
document.addEventListener('scroll', josephBehavior);

function josephBehavior(){
	// disable text spazzing on mobile
	console.log('active');
	const mobileWidth = window.matchMedia("(max-width: 450px)");
	if(!mobileWidth.matches && $(window).scrollTop() < 10){
		logoName.addEventListener('click', addLogoDescription);	
		document.getElementById('logo-name').style.cursor = 'help';
	}
	else{
		document.getElementById('logo-name').style.cursor = 'n-resize';
		logoDescription.innerHTML = '';
		logoName.removeEventListener('click', addLogoDescription);	
	}

}

// Typed.JS //
// var typed = new Typed('#typed', {
//   stringsElement: '#typed-strings',
//   smartBackspace: true, // Default value
//   typeSpeed: 70,
//   backSpeed: 70,
// });



// Page Transitions //
// function fadeInPage() {
//   if (!window.AnimationEvent) {
//     return;
//   }
//   var fader = document.getElementById('fader');
//   fader.classList.add('fade-out');
// }

// document.addEventListener('DOMContentLoaded', function() {
//   if (!window.AnimationEvent) { return; }
//   var anchors = document.getElementsByTagName('a');
//   for (var idx=0; idx<anchors.length; idx+=1) {
//     if (anchors[idx].hostname !== window.location.hostname) {
//       continue;
//     }
//     anchors[idx].addEventListener('click', function(event) {
//       var fader = document.getElementById('fader'),
//           anchor = event.currentTarget;
      
//       var listener = function() {
//           window.location = anchor.href;
//           fader.removeEventListener('animationend', listener);
//       };
//       fader.addEventListener('animationend', listener);
      
//       event.preventDefault();
//       fader.classList.add('fade-in');
//     });
// }
// });

// window.addEventListener('pageshow', function (event) {
//   if (!event.persisted) {
//     return;
//   }
//   var fader = document.getElementById('fader');
//   fader.classList.remove('fade-in');
// });
