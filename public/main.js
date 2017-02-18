document.addEventListener("DOMContentLoaded", init);

function init() {
  options = document.getElementsByClassName("option");
  for (var i = 0; i<options.length; i++) {
    options[i].addEventListener("click", function() {
      clearOptions();
      this.style.backgroundColor = "#12073B";
    });
  }
}

function clearOptions() {
  for (var i = 0; i<options.length; i++) {
    options[i].style.backgroundColor = "#251758";
  }
}
