function delay(URL) {
  setTimeout(function() {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "navOut";
  document.getElementById("img").className = "imgOut";
  document.getElementById("divParagraphe").className = "out";
}
