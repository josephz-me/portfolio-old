//var typed = new Typed('#typed',{
//  strings: ['is a Product Designer. ^2000', 'loves ^2000 cats.' , 'loves dogs', '^1000 enjoys micro-interactions.^1000'],
//  smartBackspace: true, // Default value
  //backSpeed: 40,
  //typeSpeed: 40,
  //loop: true,
  //loopCount:30
//});


$(document).ready(function(){
  $('.card').tilt({
    maxTilt:0,
    transition:true,
    speed: 500,
    glare:true,
    maxGlare:.2,
    scale:1.02
  })

  $('.masonry-image').tilt({
    maxTilt:0,
    speed: 500,
    scale:1.01
  })
  
})

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}