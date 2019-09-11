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