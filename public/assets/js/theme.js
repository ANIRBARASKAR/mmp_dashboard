(function ($) {
  "use strict";

  function initLeftMenuCollapse() {
    // Left menu collapse
    $("#vertical-menu-btn").on("click", function () {
      console.log("Button clicked");
      $("body").toggleClass("enable-vertical-menu");
    });

    $(".menu-overlay").on("click", function () {
      console.log("Overlay clicked");
      $("body").removeClass("enable-vertical-menu");
      return false; // Prevent default behavior
    });
  }

  function init() {
    initLeftMenuCollapse();
  }

  init();
})(jQuery);
