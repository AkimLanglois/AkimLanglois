function delay(URL) {
  setTimeout(function() {
    window.location = URL;
  }, 500);
  document.getElementById("nav").className = "navOut";
  document.getElementById("img").className = "imgOut";
  document.getElementById("divLogin").className = "loginOut";
}

$(window).load(function() {
  $("#trigger_popup_fricc").click(function() {
    $(".popupBg").show();
  });
  // $(".hover_bkgr_fricc").click(function() {
  //   $(".hover_bkgr_fricc").hide();
  // });
  $(".popupCloseButton").click(function() {
    $(".popupBg").hide();
  });
});
