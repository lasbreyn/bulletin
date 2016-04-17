(function($) {

Drupal.otown = Drupal.otown || {};
Drupal.otown.behaviors = Drupal.otown.behaviors || {};

Drupal.behaviors.otowntheme = {
  attach: function (context) {
    var $context = $(context);
    $("#search-links li").click(function() {
      var id = $(this).attr("id");
      console.log(id);
      $(".form-wrapper").hide();
      $("#" + id + "-wrap").show();
    });
  }
}

})(jQuery);
