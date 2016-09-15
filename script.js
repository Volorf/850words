(function() {
  $(document).ready(function() {
    $("body").on("mousedown", function() {
      return $(this).css({
        "background": "white"
      });
    });
    return $("body").on("mouseup", function() {
      return $(this).css({
        "background": "#FF8A8A"
      });
    });
  });

}).call(this);

