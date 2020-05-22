document.addEventListener('DOMContentLoaded', function() {
  var nodelist = document.querySelectorAll('.dropdown-trigger');
  var elements = Array.prototype.slice.call(nodelist, 0);

  elements.forEach(function(element) {
    element.addEventListener('click', function() {
      element.parentNode.classList.add('is-active');
    });
  });
});
