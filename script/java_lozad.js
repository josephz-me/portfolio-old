// Lozad // 
lozad('.lozad', {
  load: function(el) {
      el.src = el.dataset.src;
      el.onload = function() {
          el.classList.add('fade')
          this.style.willChange = 'opacity';
      }
  }
}).observe()

// const observer = lozad();
// observer.observe();

// const coolImage = document.querySelector('.image-to-load-first')
// // ... trigger the load of a image before it appears on the viewport
// observer.triggerLoad(coolImage);