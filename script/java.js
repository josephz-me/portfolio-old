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

let firstDescription = 	"wants you to click again.";
let descriptions = [
	"wishes he liked seafood.",
	"thinks he's a minimalist.",
	"is learning 3D modeling",
	"thinks he can code.",
	"needs to read more.",
	"cooks too much chicken.",
	"thrives off the gCal app.",
	"owns a chihuahua/lab.",
	"is 60% extroverted.",
	"is a photographer.",
]


// hide text spazzing on scroll
$(window).scroll(function(){
    $("#logo-description").css("opacity", 1 - $(window).scrollTop() / 100);
  });

// performs text spazzing
let count = 0;
function addLogoDescription() {
	for( i = 0; i < 10; i++){
		(function (i) {
			if(i === descriptions.length - 1){
				//first description
				if (count === 0){ setTimeout( () => logoDescription.innerHTML = firstDescription , i * 30); }
				else{ setTimeout( () => logoDescription.innerHTML = descriptions[Math.floor(Math.random() * descriptions.length)] , i * 30);}
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
document.addEventListener('load', josephBehavior);
document.addEventListener('scroll', josephBehavior);


function josephBehavior(){
	// disable text spazzing on mobile
	mobileWidth = window.matchMedia("(max-width: 450px)");
	if($(window).scrollTop() < 20){
		if(!mobileWidth.matches){
			logoName.addEventListener('click', addLogoDescription);	
			logoName.style.cursor = 'help';
		}
		logoName.removeAttribute("href");
	}
	else if($(window).scrollTop() > 100){
		logoDescription.innerHTML = '';
		logoName.style.cursor = 'n-resize';
		logoName.href = "#top";
	}
	else{
		logoName.style.cursor = 'n-resize';
		logoName.href = "#top";
	}
	console.log('ran');
}

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
