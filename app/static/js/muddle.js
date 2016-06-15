function add_trigger(trigger_id, modal_id) {
  $("#" + trigger_id).on("click", function() {
      muddle.open($("#" + modal_id));
  });
}

var muddle = (function() {
  var self = {};

  $(".muddle-overlay").on("click", function() {
    self.close();
  });

  $(".md-close").on("click", function() {
    self.close();
  });

  self.open = function(element) {
    muddle.close();

    var modal = $(element);
    $(modal).addClass("md-active");
    $("body").addClass("md-active");

    mixpanel.track("Modal opened", {"Modal": modal[0].id })
  };

  self.close = function() {
    var modal = $(".md-active");
    if (modal) {
      modal.removeClass("md-active");
      $("body").removeClass("md-active");
    }
  };

  return self;
}());
