function delay(URL) {
  setTimeout(function() {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "navOut";
  document.getElementById("img").className = "imgOut";
  document.getElementById("divJoueur").className = "divJoueurOut";
  document.getElementById("divTableau").className = "divTableauOut";
  document.getElementById("divRessource").className = "divRessourceOut";
  document.getElementById("divInventaire").className = "divInventaireOut";
}

$(window).load(function() {
  $("#trigger_popup_fricc").click(function() {
    $(".popupBg").show();
  });
  $("#trigger_popup_fricc2").click(function() {
    $(".popupBg2").show();
  });
  // $(".hover_bkgr_fricc").click(function() {
  //   $(".hover_bkgr_fricc").hide();
  // });
  $(".popupCloseButton").click(function() {
    $(".popupBg").hide();
  });

  $(".popupCloseButton").click(function() {
    $(".popupBg2").hide();
  });
});
