(function() {
  Modernizr.load({
    test: document.getElementsByTagName("body")[0].className.match(new RegExp('(\\s|^)lt-ie9(\\s|$)')),
    yep: "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js",
    nope: "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js",
    complete: function() {
      return Modernizr.load({
        test: true,
        yep: ["../javascripts/plugins.js", "../javascripts/main.js"]
      });
    }
  });

}).call(this);
