(function() {
  var standardWait;

  $.waypoints.settings.scrollThrottle = 10;

  $.waypoints.settings.resizeThrottle = 20;

  standardWait = 50;

  describe('Waypoints Sticky Elements Shortcut', function() {
    var $return, $sticky, $win, handlerSpy;
    $sticky = $return = handlerSpy = null;
    $win = $(window);
    beforeEach(function() {
      loadFixtures('sticky.html');
      $sticky = $('.sticky');
      handlerSpy = jasmine.createSpy('on handler');
      return $return = $sticky.waypoint('sticky', {
        handler: handlerSpy
      });
    });
    it('returns the same jQuery object for chaining', function() {
      return expect($return.get()).toEqual($sticky.get());
    });
    it('wraps the sticky element', function() {
      return expect($sticky.parent()).toHaveClass('sticky-wrapper');
    });
    it('gives the wrapper the same height as the sticky element', function() {
      return expect($sticky.parent().height()).toEqual($sticky.outerHeight());
    });
    it('adds stuck class when you reach the element', function() {
      runs(function() {
        return $win.scrollTop($sticky.offset().top);
      });
      waits(standardWait);
      runs(function() {
        expect($sticky).toHaveClass('stuck');
        return $win.scrollTop($win.scrollTop() - 1);
      });
      waits(standardWait);
      return runs(function() {
        return expect($sticky).not.toHaveClass('stuck');
      });
    });
    it('executes handler option after stuck class applied', function() {
      runs(function() {
        return $win.scrollTop($sticky.offset().top);
      });
      waits(standardWait);
      return runs(function() {
        return expect(handlerSpy).toHaveBeenCalled();
      });
    });
    describe('#waypoint("unsticky")', function() {
      beforeEach(function() {
        return $return = $sticky.waypoint('unsticky');
      });
      it('returns the same jQuery object for chaining', function() {
        return expect($return.get()).toEqual($sticky.get());
      });
      it('unwraps the sticky element', function() {
        return expect($sticky.parent()).not.toHaveClass('sticky-wrapper');
      });
      return it('should not have stuck class', function() {
        return expect($sticky).not.toHaveClass('stuck');
      });
    });
    return afterEach(function() {
      $.waypoints('destroy');
      return $win.scrollTop(0);
    });
  });

}).call(this);
