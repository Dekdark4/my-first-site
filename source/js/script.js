document.addEventListener("DOMContentLoaded", function() {

  const toggleButton = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!toggleButton || !dropdownMenu) return;

  toggleButton.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });
  
  document.addEventListener('click', function() {
    dropdownMenu.classList.remove('show');
  });
  
});