document.addEventListener('DOMContentLoaded', function() {
  var nodelist = document.querySelectorAll('.dropdown-trigger');
  var elements = Array.prototype.slice.call(nodelist, 0);

  elements.forEach(function(element) {
    var button = element.querySelector('button');
    var dropdown = element.parentNode;

    button.addEventListener('click', function(event) {
      event.stopPropagation();
      dropdown.classList.add('is-active');
    });

    window.onclick = function(event) {
      var menu = document.querySelector('#' + button.getAttribute('aria-controls'));
      if(event.target && !menu.contains(event.target)) {
        dropdown.classList.remove('is-active');
      }
    };
  });
});
