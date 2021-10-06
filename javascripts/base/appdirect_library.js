(function() {
  $(function() {
    return $('.adb-js-auto_search--input').on('keyup', function() {
      var $search;
      $search = $(this).parents('.adb-search_field');
      $search.addClass('adb-is-loading');
      window.setTimeout((function() {
        $search.removeClass('adb-is-loading').addClass('adb-is-active');
      }), 500);
      return $('.adb-js-auto_search--clear').on('click', function(e) {
        $search = $(this).parents('.adb-search_field');
        e.preventDefault();
        $search.removeClass('adb-is-active');
        $search.find('input').val('');
        return e.stopPropagation();
      });
    });
  });

}).call(this);
(function() {
  $(function() {
    $('button').on('click', function() {
      return $(this).blur();
    });
    return $(document).on('click', '.adb-toggle_button', function() {
      var activeLabel, currentLabel, initLabel;
      initLabel = $(this).attr('data-label-init');
      activeLabel = $(this).attr('data-label-active');
      currentLabel = $(this).text();
      $(this).toggleClass('active');
      if (currentLabel === activeLabel) {
        return $(this).text(initLabel);
      } else {
        return $(this).text(activeLabel);
      }
    });
  });

}).call(this);
/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
*
* TERMS OF USE - jQuery Easing
*
* Open source under the BSD License.
*
* Copyright © 2008 George McGinley Smith
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this list of
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list
* of conditions and the following disclaimer in the documentation and/or other materials
* provided with the distribution.
*
* Neither the name of the author nor the names of contributors may be used to endorse
* or promote products derived from this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
* COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
* GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
* OF THE POSSIBILITY OF SUCH DAMAGE.
*
*/

jQuery.easing.jswing = jQuery.easing.swing; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function (e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function (e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function (e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function (e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function (e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function (e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function (e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function (e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function (e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function (e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function (e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function (e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function (e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function (e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function (e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function (e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function (e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });
/*!
 * Hero Carousel - jQuery Plugin
 *
 * Copyright (c) 2011 Paul Welsh
 *
 * Version: 1.3 (26/05/2011)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */


jQuery.fn.heroCarousel = function(options){

    options = jQuery.extend({
        animationSpeed: 1000,
        navigation: true,
        easing: '',
        timeout: 5000,
        pause: true,
        pauseOnNavHover: true,
        prevText: 'Previous',
        nextText: 'Next',
        css3pieFix: false,
        currentClass: 'current',
        onLoad: function(){},
        onStart: function(){},
        onComplete: function(){}
    }, options);

    // if(jQuery.browser.msie && parseFloat(jQuery.browser.version) < 7){
    // 	options.animationSpeed = 0;
    // }
    //
    return this.each(function() {
        var carousel = jQuery(this),
        elements = carousel.children();
        currentItem = 1;
        childWidth = elements.width();
        childHeight = elements.height();

        if(elements.length > 2){

            elements.each(function(i){
                if(options.itemClass){
                    jQuery(this).addClass(options.itemClass);
                }
            });

            elements.filter(':first').addClass(options.currentClass).before(elements.filter(':last'));

            var carouselWidth = Math.round(childWidth * carousel.children().length),
            carouselMarginLeft = '-'+ Math.round(childWidth + Math.round(childWidth / 2) ) +'px'

            carousel.addClass('hero-carousel-container').css({
                'position': 'relative',
                'overflow': 'hidden',
                'left': '50%',
                'top': 0,
                'margin-left': carouselMarginLeft,
                'height': childHeight,
                'width': carouselWidth
            });

            carousel.before('<ul class="hero-carousel-nav"><li class="prev"><a href="#">'+options.prevText+'</a></li><li class="next"><a href="#">'+options.nextText+'</a></li></ul>');

            var carouselNav = carousel.prev('.hero-carousel-nav'),
            timeoutInterval;

            if(options.timeout > 0){
                var paused = false;
                if(options.pause){
                    carousel.hover(function(){
                        paused = true;
                    },function(){
                        paused = false;
                    });
                }
                if(options.pauseOnNavHover){
                    carouselNav.hover(function(){
                        paused = true;
                    },function(){
                        paused = false;
                    });
                }
                function autoSlide(){
                    if(!paused){
                          carouselNav.find('.next a').trigger('click');
                      }
                }
                timeoutInterval = window.setInterval(autoSlide, options.timeout);
            }

            carouselNav.find('a').data('disabled', false).click(function(e){
                e.preventDefault();
                var navItem = jQuery(this),
                isPrevious = navItem.parent().hasClass('prev'),
                elements = carousel.children();
                if(navItem.data('disabled') === false){
                    options.onStart(carousel, carouselNav, elements.eq(currentItem), options);
                    if(isPrevious){
                        animateItem(elements.filter(':last'), 'previous');
                    }else{
                        animateItem(elements.filter(':first'), 'next');
                    }
                    navItem.data('disabled', true);
                    setTimeout(function(){
                        navItem.data('disabled', false);
                    }, options.animationSpeed+200);
                    if(options.timeout > 0){
                           window.clearInterval(timeoutInterval);
                           timeoutInterval = window.setInterval(autoSlide, options.timeout);
                      }
                }

            });

            function animateItem(object,direction){
                var carouselPosLeft = parseFloat(carousel.position().left),
                carouselPrevMarginLeft = parseFloat(carousel.css('margin-left'));

                if(direction === 'previous'){
                    object.before( object.clone().addClass('carousel-clone') );
                    carousel.prepend( object );
                    var marginLeft = Math.round(carouselPrevMarginLeft - childWidth);
                    var plusOrMinus = '+=';
                }else{
                    object.after( object.clone().addClass('carousel-clone') );
                    carousel.append( object );
                    var marginLeft = carouselMarginLeft;
                    var plusOrMinus = '-=';
                }
                if(options.css3pieFix){
                    fixPieClones(jQuery('.carousel-clone'));
                }
                carousel.css({
                    'left': carouselPosLeft,
                    'width': Math.round(carouselWidth + childWidth),
                    'margin-left': marginLeft
                }).animate({'left':plusOrMinus+childWidth}, options.animationSpeed, options.easing, function(){
                    carousel.css({
                        'left': '50%',
                        'width': carouselWidth,
                        'margin-left': carouselPrevMarginLeft
                    });
                    jQuery('.carousel-clone').remove();
                    finishCarousel();
                });
            }

            function fixPieClones(clonedObject){
                var itemPieId = clonedObject.attr('_pieId');
                if(itemPieId){
                    clonedObject.attr('_pieId', itemPieId+'_cloned');
                }
                clonedObject.find('*[_pieId]').each(function(i, item){
                    var descendantPieId = $(item).attr('_pieId');
                    $(item).attr('_pieId', descendantPieId+'_cloned');
                });
            }

            function finishCarousel(){
                var elements = carousel.children();
                elements.removeClass(options.currentClass).eq(currentItem).addClass(options.currentClass);
                options.onComplete(carousel, carousel.prev('.hero-carousel-nav'), elements.eq(currentItem), options);
            }

            // if(jQuery.browser.msie){
            //     carouselNav.find('a').attr("hideFocus", "true");
            // }

            options.onLoad(carousel, carouselNav, carousel.children().eq(currentItem), options);

        }

    });

};
(function() {
  $(function() {
    return $(".adb-hero--carousel").heroCarousel({
      timeout: 10000,
      easing: "easeOutExpo",
      currentClass: "adb-is-active",
      prevText: "",
      nextText: "",
      onLoad: function() {
        $('.adb-hero').removeClass('adb-is-visually_hidden');
        $('.hero-carousel-nav .prev a').on('mouseenter mouseleave', function() {
          return $('.adb-hero--item:first-child').toggleClass('adb-is-hover');
        });
        return $('.hero-carousel-nav .next a').on('mouseenter mouseleave', function() {
          return $('.adb-hero--item:last-child').toggleClass('adb-is-hover');
        });
      },
      onStart: function() {
        return $('.adb-hero--item').removeClass('adb-is-hover');
      },
      onComplete: function() {
        return $('.adb-hero--item').removeClass('adb-is-hover');
      }
    });
  });

}).call(this);
/*!
 * Datepicker for Bootstrap v1.5.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function h(b){var c={};if(p[b]||(b=b.split("-")[0],p[b])){var d=p[b];return a.each(o,function(a,b){b in d&&(c[b]=d[b])}),c}}var i=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new i;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),j=function(b,c){this._process_options(c),this.dates=new i,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(q.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};j.prototype={constructor:j,_process_options:function(e){this._o=a.extend({},this._o,e);var f=this.o=a.extend({},this._o),g=f.language;switch(p[g]||(g=g.split("-")[0],p[g]||(g=n.language)),f.language=g,f.startView){case 2:case"decade":f.startView=2;break;case 1:case"year":f.startView=1;break;default:f.startView=0}switch(f.minViewMode){case 1:case"months":f.minViewMode=1;break;case 2:case"years":f.minViewMode=2;break;default:f.minViewMode=0}f.startView=Math.max(f.startView,f.minViewMode),f.multidate!==!0&&(f.multidate=Number(f.multidate)||!1,f.multidate!==!1&&(f.multidate=Math.max(0,f.multidate))),f.multidateSeparator=String(f.multidateSeparator),f.weekStart%=7,f.weekEnd=(f.weekStart+6)%7;var h=q.parseFormat(f.format);if(f.startDate!==-1/0&&(f.startDate=f.startDate?f.startDate instanceof Date?this._local_to_utc(this._zero_time(f.startDate)):q.parseDate(f.startDate,h,f.language):-1/0),1/0!==f.endDate&&(f.endDate=f.endDate?f.endDate instanceof Date?this._local_to_utc(this._zero_time(f.endDate)):q.parseDate(f.endDate,h,f.language):1/0),f.daysOfWeekDisabled=f.daysOfWeekDisabled||[],a.isArray(f.daysOfWeekDisabled)||(f.daysOfWeekDisabled=f.daysOfWeekDisabled.split(/[,\s]*/)),f.daysOfWeekDisabled=a.map(f.daysOfWeekDisabled,function(a){return parseInt(a,10)}),f.datesDisabled=f.datesDisabled||[],!a.isArray(f.datesDisabled)){var i=[];i.push(q.parseDate(f.datesDisabled,h,f.language)),f.datesDisabled=i}f.datesDisabled=a.map(f.datesDisabled,function(a){return q.parseDate(a,h,f.language)});var j=String(f.orientation).toLowerCase().split(/\s+/g),k=f.orientation.toLowerCase();if(j=a.grep(j,function(a){return/^auto|left|right|top|bottom$/.test(a)}),f.orientation={x:"auto",y:"auto"},k&&"auto"!==k)if(1===j.length)switch(j[0]){case"top":case"bottom":f.orientation.y=j[0];break;case"left":case"right":f.orientation.x=j[0]}else k=a.grep(j,function(a){return/^left|right$/.test(a)}),f.orientation.x=k[0]||"auto",k=a.grep(j,function(a){return/^top|bottom$/.test(a)}),f.orientation.y=k[0]||"auto";else;if(f.defaultViewDate){var l=f.defaultViewDate.year||(new Date).getFullYear(),m=f.defaultViewDate.month||0,o=f.defaultViewDate.day||1;f.defaultViewDate=c(l,m,o)}else f.defaultViewDate=d();f.showOnFocus=f.showOnFocus!==b?f.showOnFocus:!0},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),b],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return q.formatDate(c,b,this.o.language)},this)})},show:function(){return this.element.attr("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.val("").change(),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),setValue:function(){var a=this.getFormattedDate();return this.isInput?this.element.val(a).change():this.component&&this.element.find("input").val(a).change(),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return q.formatDate(a,c,d)}).join(this.o.multidateSeparator)},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container).width(),f=a(this.o.container).height(),g=a(this.o.container).scrollTop(),h=a(this.o.container).offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+10,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>e?(this.picker.addClass("datepicker-orient-right"),n=k.left+m-b):this.picker.addClass("datepicker-orient-left");var p,q,r=this.o.orientation.y;if("auto"===r&&(p=-g+o-c,q=g+f-(o+l+c),r=Math.max(p,q)===q?"top":"bottom"),this.picker.addClass("datepicker-orient-"+r),"top"===r?o+=l:o-=c+parseInt(this.picker.css("padding-top")),this.o.rtl){var s=e-(n+m);this.picker.css({top:o,right:s,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return q.parseDate(a,this.o.format,this.o.language)},this)),c=a.grep(c,a.proxy(function(a){return a<this.o.startDate||a>this.o.endDate||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate&&(this.viewDate=new Date(this.o.endDate)),d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1});var c='<th class="cw">&#160;</th>';b+=c}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+p[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+p[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),f=this.viewDate.getUTCMonth(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<f?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>f)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===g.getFullYear()&&b.getUTCMonth()===g.getMonth()&&b.getUTCDate()===g.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),this.o.datesDisabled.length>0&&a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0&&c.push("disabled","disabled-date"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected")),c},fill:function(){var d,e=new Date(this.viewDate),f=e.getUTCFullYear(),g=e.getUTCMonth(),h=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,i=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,j=1/0!==this.o.endDate?this.o.endDate.getUTCFullYear():1/0,k=1/0!==this.o.endDate?this.o.endDate.getUTCMonth():1/0,l=p[this.o.language].today||p.en.today||"",m=p[this.o.language].clear||p.en.clear||"";if(!isNaN(f)&&!isNaN(g)){this.picker.find(".datepicker-days thead .datepicker-switch").text(p[this.o.language].months[g]+" "+f),this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var n=c(f,g-1,28),o=q.getDaysInMonth(n.getUTCFullYear(),n.getUTCMonth());n.setUTCDate(o),n.setUTCDate(o-(n.getUTCDay()-this.o.weekStart+7)%7);var r=new Date(n);r.setUTCDate(r.getUTCDate()+42),r=r.valueOf();for(var s,t=[];n.valueOf()<r;){if(n.getUTCDay()===this.o.weekStart&&(t.push("<tr>"),this.o.calendarWeeks)){var u=new Date(+n+(this.o.weekStart-n.getUTCDay()-7)%7*864e5),v=new Date(Number(u)+(11-u.getUTCDay())%7*864e5),w=new Date(Number(w=c(v.getUTCFullYear(),0,1))+(11-w.getUTCDay())%7*864e5),x=(v-w)/864e5/7+1;t.push('<td class="cw">'+x+"</td>")}if(s=this.getClassNames(n),s.push("day"),this.o.beforeShowDay!==a.noop){var y=this.o.beforeShowDay(this._utc_to_local(n));y===b?y={}:"boolean"==typeof y?y={enabled:y}:"string"==typeof y&&(y={classes:y}),y.enabled===!1&&s.push("disabled"),y.classes&&(s=s.concat(y.classes.split(/\s+/))),y.tooltip&&(d=y.tooltip)}s=a.unique(s),t.push('<td class="'+s.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+n.getUTCDate()+"</td>"),d=null,n.getUTCDay()===this.o.weekEnd&&t.push("</tr>"),n.setUTCDate(n.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(t.join(""));var z=this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===f&&z.eq(b.getUTCMonth()).addClass("active")}),(h>f||f>j)&&z.addClass("disabled"),f===h&&z.slice(0,i).addClass("disabled"),f===j&&z.slice(k+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var A=this;a.each(z,function(b,c){if(!a(c).hasClass("disabled")){var d=new Date(f,b,1),e=A.o.beforeShowMonth(d);e===!1&&a(c).addClass("disabled")}})}t="",f=10*parseInt(f/10,10);var B=this.picker.find(".datepicker-years").find("th:eq(1)").text(f+"-"+(f+9)).end().find("td");f-=1;for(var C,D=a.map(this.dates,function(a){return a.getUTCFullYear()}),E=-1;11>E;E++)C=["year"],-1===E?C.push("old"):10===E&&C.push("new"),-1!==a.inArray(f,D)&&C.push("active"),(h>f||f>j)&&C.push("disabled"),t+='<span class="'+C.join(" ")+'">'+f+"</span>",f+=1;B.html(t)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.picker.find(".prev").css(this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"});break;case 1:case 2:this.picker.find(".prev").css(this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"})}}},click:function(b){b.preventDefault();var d,e,f,g=a(b.target).closest("span, td, th");if(1===g.length)switch(g[0].nodeName.toLowerCase()){case"th":switch(g[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=q.modes[this.viewMode].navStep*("prev"===g[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var i=new Date;i=c(i.getFullYear(),i.getMonth(),i.getDate(),0,0,0),this.showMode(-2);var j="linked"===this.o.todayBtn?null:"view";this._setDate(i,j);break;case"clear":this.clearDates()}break;case"span":g.hasClass("disabled")||(this.viewDate.setUTCDate(1),g.hasClass("month")?(f=1,e=g.parent().find("span").index(g),d=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(e),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(c(d,e,f))):(f=1,e=0,d=parseInt(g.text(),10)||0,this.viewDate.setUTCFullYear(d),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(d,e,f))),this.showMode(-1),this.fill());break;case"td":g.hasClass("day")&&!g.hasClass("disabled")&&(f=parseInt(g.text(),10)||1,d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),g.hasClass("old")?0===e?(e=11,d-=1):e-=1:g.hasClass("new")&&(11===e?(e=0,d+=1):e+=1),this._setDate(c(d,e,f)))}this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveMonth:function(a,c){if(!a)return b;if(!c)return a;var d,e,f=new Date(a.valueOf()),g=f.getUTCDate(),h=f.getUTCMonth(),i=Math.abs(c);if(c=c>0?1:-1,1===i)e=-1===c?function(){return f.getUTCMonth()===h}:function(){return f.getUTCMonth()!==d},d=h+c,f.setUTCMonth(d),(0>d||d>11)&&(d=(d+12)%12);else{for(var j=0;i>j;j++)f=this.moveMonth(f,c);d=f.getUTCMonth(),f.setUTCDate(g),e=function(){return d!==f.getUTCMonth()}}for(;e();)f.setUTCDate(--g),f.setUTCMonth(d);return f},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(27===a.keyCode&&this.show());var b,c,e,f=!1,g=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+b),e=new Date(g),e.setUTCDate(g.getUTCDate()+b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+7*b),e=new Date(g),e.setUTCDate(g.getUTCDate()+7*b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 32:break;case 13:g=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(g),f=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),"function"==typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(f){this._trigger(this.dates.length?"changeDate":"clearDate");var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+q.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var k=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,m.call(a(this.inputs),c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};k.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var l=a.fn.datepicker,m=function(c){var d=Array.apply(null,arguments);d.shift();var e;return this.each(function(){var f=a(this),i=f.data("datepicker"),l="object"==typeof c&&c;if(!i){var m=g(this,"date"),o=a.extend({},n,m,l),p=h(o.language),q=a.extend({},n,p,m,l);if(f.hasClass("input-daterange")||q.inputs){var r={inputs:q.inputs||f.find("input").toArray()};f.data("datepicker",i=new k(this,a.extend(q,r)))}else f.data("datepicker",i=new j(this,q))}return"string"==typeof c&&"function"==typeof i[c]&&(e=i[c].apply(i,d),e!==b)?!1:void 0}),e!==b?e:this};a.fn.datepicker=m;var n=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,container:"body"},o=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=j;var p=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},q={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,q.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(d,e,f){function g(){var a=this.slice(0,m[k].length),b=m[k].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!d)return b;if(d instanceof Date)return d;"string"==typeof e&&(e=q.parseFormat(e));var h,i,k,l=/([\-+]\d+)([dmwy])/,m=d.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)){for(d=new Date,k=0;k<m.length;k++)switch(h=l.exec(m[k]),i=parseInt(h[1]),h[2]){case"d":d.setUTCDate(d.getUTCDate()+i);break;case"m":d=j.prototype.moveMonth.call(j.prototype,d,i);break;case"w":d.setUTCDate(d.getUTCDate()+7*i);break;case"y":d=j.prototype.moveYear.call(j.prototype,d,i)}return c(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),0,0,0)}m=d&&d.match(this.nonpunctuation)||[],d=new Date;var n,o,r={},s=["yyyy","yy","M","MM","m","mm","d","dd"],t={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};t.M=t.MM=t.mm=t.m,t.dd=t.d,d=c(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0);var u=e.parts.slice();if(m.length!==u.length&&(u=a(u).filter(function(b,c){return-1!==a.inArray(c,s)}).toArray()),m.length===u.length){var v;for(k=0,v=u.length;v>k;k++){if(n=parseInt(m[k],10),h=u[k],isNaN(n))switch(h){case"MM":o=a(p[f].months).filter(g),n=a.inArray(o[0],p[f].months)+1;break;case"M":o=a(p[f].monthsShort).filter(g),n=a.inArray(o[0],p[f].monthsShort)+1}r[h]=n}var w,x;for(k=0;k<s.length;k++)x=s[k],x in r&&!isNaN(r[x])&&(w=new Date(d),t[x](w,r[x]),isNaN(w)||(d=w))}return d},formatDate:function(b,c,d){if(!b)return"";"string"==typeof c&&(c=q.parseFormat(c));var e={d:b.getUTCDate(),D:p[d].daysShort[b.getUTCDay()],DD:p[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:p[d].monthsShort[b.getUTCMonth()],MM:p[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};q.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+q.headTemplate+"<tbody></tbody>"+q.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=q,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=l,this},a.fn.datepicker.version="1.5.0",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),m.call(c,"show"))}),a(function(){m.call(a('[data-provide="datepicker-inline"]'))})}(window.jQuery);
(function() {
  $(function() {
    return $('input[type="date"]').datepicker({
      clearBtn: true,
      todayHighlight: true,
      format: "yyyy-mm-dd"
    });
  });

}).call(this);
(function() {
  window.Dialog = (function() {
    function Dialog(item) {
      var dialog_selector;
      this.margin = 14;
      this.trigger_element = $(item);
      this.trigger_event = this.trigger_element.data('event') || "mouseover mouseout";
      this.trigger_width = this.trigger_element.outerWidth();
      this.trigger_height = this.trigger_element.outerHeight();
      if (this.trigger_element.next().hasClass('adb-js-dialog')) {
        dialog_selector = this.trigger_element.next();
      } else {
        dialog_selector = this.trigger_element.data('target') || this.trigger_element.attr('href');
      }
      this.dialog_element = $(dialog_selector);
      this.dialog_placement = this.dialog_element.data('placement') || "top";
      this.dialog_width = this.dialog_element.outerWidth(true);
      this.dialog_height = this.dialog_element.outerHeight(true);
      this.bindEvents();
      this.trigger_element.data('dialog', this);
    }

    Dialog.prototype.bindEvents = function() {
      this.trigger_element.on(this.trigger_event, (function(_this) {
        return function(e) {
          e.preventDefault();
          return _this[_this.is_shown() ? "hide" : "show"]();
        };
      })(this));
      this.dialog_element.on('click', '[data-dismiss="dialog"], .adb-close', (function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.hide();
        };
      })(this));
      return $(window).on('resize', (function(_this) {
        return function(e) {
          return _this.calculatePlacement();
        };
      })(this));
    };

    Dialog.prototype.is_shown = function() {
      return this.dialog_element.is(':visible');
    };

    Dialog.prototype.show = function() {
      var e;
      e = $.Event('show');
      this.dialog_element.triggerHandler(e);
      this.trigger_element.triggerHandler(e);
      $('.adb-js-dialog:visible').hide();
      this.calculatePlacement();
      this.dialog_element.addClass('adb-is-active').show();
      $('[data-toggle="dialog"]').removeClass('adb-is-active');
      this.trigger_element.toggleClass('adb-is-active');
      return this.bindEscape();
    };

    Dialog.prototype.hide = function() {
      var e;
      e = $.Event('hide');
      this.dialog_element.triggerHandler(e);
      this.trigger_element.triggerHandler(e);
      this.dialog_element.removeClass('adb-is-active').hide();
      this.trigger_element.toggleClass('adb-is-active');
      return this.bindEscape();
    };

    Dialog.prototype.bindEscape = function() {
      if (this.is_shown()) {
        return $(document).on('keyup', (function(_this) {
          return function(e) {
            return e.which === 27 && _this.hide();
          };
        })(this));
      } else if (!this.is_shown()) {
        return this.dialog_element.off('keyup');
      }
    };

    Dialog.prototype.calculatePlacement = function() {
      this.trigger_left = parseInt(this.trigger_element.css("margin-left")) || parseInt(this.trigger_element.css("padding-left")) || 0;
      this.trigger_left = this.trigger_element.position().left + this.trigger_left;
      switch (this.dialog_placement) {
        case "top":
        case "top-center":
        case "top-middle":
        case "top-centered":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top - (this.dialog_element.outerHeight() + this.margin),
            'left': this.trigger_left - (this.dialog_element.outerWidth() / 2 - this.trigger_element.outerWidth() / 2)
          });
        case "top-left":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top - (this.dialog_element.outerHeight() + this.margin),
            'left': this.trigger_left
          });
        case "top-right":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top - (this.dialog_element.outerHeight() + this.margin),
            'left': this.trigger_left + (this.trigger_element.outerWidth() - this.dialog_element.outerWidth())
          });
        case "bottom":
        case "bottom-center":
        case "bottom-middle":
        case "bottom-centered":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + this.trigger_element.outerHeight() + this.margin,
            'left': this.trigger_left - (this.dialog_element.outerWidth() / 2 - this.trigger_element.outerWidth() / 2)
          });
        case "bottom-left":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + this.trigger_element.outerHeight() + this.margin,
            'left': this.trigger_left
          });
        case "bottom-right":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + this.trigger_element.outerHeight() + this.margin,
            'left': this.trigger_left + (this.trigger_element.outerWidth() - this.dialog_element.outerWidth())
          });
        case "left-top":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top,
            'left': this.trigger_left - (this.dialog_element.outerWidth() + this.margin)
          });
        case "left":
        case "left-center":
        case "left-middle":
        case "left-centered":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + (this.trigger_element.outerHeight() / 2 - this.dialog_element.outerHeight() / 2),
            'left': this.trigger_left - (this.dialog_element.outerWidth() + this.margin)
          });
        case "left-bottom":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + (this.trigger_element.outerHeight() - this.dialog_element.outerHeight()),
            'left': this.trigger_left - (this.dialog_element.outerWidth() + this.margin)
          });
        case "right-top":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top,
            'left': this.trigger_left + (this.trigger_element.outerWidth() + this.margin)
          });
        case "right":
        case "right-center":
        case "right-middle":
        case "right-centered":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + (this.trigger_element.outerHeight() / 2 - this.dialog_element.outerHeight() / 2),
            'left': this.trigger_left + (this.trigger_element.outerWidth() + this.margin)
          });
        case "right-bottom":
          return this.dialog_element.css({
            'top': this.trigger_element.position().top + (this.trigger_element.outerHeight() - this.dialog_element.outerHeight()),
            'left': this.trigger_left + (this.trigger_element.outerWidth() + this.margin)
          });
      }
    };

    return Dialog;

  })();

  $(function() {
    window.dialogs = [];
    return $('[data-toggle="dialog"]').each(function(index, item) {
      return window.dialogs[index] = new Dialog(item);
    });
  });

}).call(this);
/*
* FormMakeup - Lite
* Version: 0.8.0
* License: MIT
* Author: Remy Martin - @rmartindotco
* Copyright (c) 2014 Remy Martin, All Rights Reserved
*/

;(function ( $, window, document, undefined ) {
  //Defaults currently not used
  var defaults = {
        theme: 'default',
        placeholderClassName: 'adb-js-dropdown-placeholder',
        selectClassName: 'adb-js-dropdown-select'
      };

  function FormMakeup( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this.init();
  }

  FormMakeup.prototype = {

    init: function() {
      //Bind events
      this.bindUIActions( );

      //Find all the elements passed in to apply makeup
      this.getElements( this.element );
    },

    bindUIActions: function( ) {
      var inst = this;
      $( inst.element ).on( 'change keyup focus blur', function( e ){
        var obj = $( e.currentTarget );

        //Let's change the label when a new option is selected
        if( e.type === 'change' || e.type === 'keyup' ){

            obj.prev( 'span' ).text( obj.find( 'option:selected' ).text( ) );

        //Let's add a class when the select is focused
        } else if( e.type === 'focus' ){

          obj.parent().addClass( 'adb-is-focused' );

        //Remove .is-focused class when select looses focus
        } else if ( e.type === 'blur') {

          obj.parent().removeClass( 'adb-is-focused' );
        }
      } );
    },
    getElements: function( el ){
      var obj = $( el ),
          inst = this;
          //Apply makeup to the element
          inst.applyMakeup( obj );
    },
    applyMakeup: function( el ){
      var obj = $( el ),
          inst = this;

      //Check if the element is indeed a select and not a multi-select and don't apply makeup if it already has
      if( obj.is( 'select' ) && !obj.attr('multiple') && !obj.data( 'makeupApplied' ) ) {

        //If select is disabled let's add a class
        if( obj.is( ':disabled' ) ) {
          obj.parent().addClass('adb-is-disabled');
        }

        //This is where the label for the selected option goes
        obj.before( '<span class="'+ inst.options.placeholderClassName +'"></span>' );

        //This is where we apply the classname for the select
        obj.addClass( inst.options.selectClassName );

        //We set the makeApplied boolean to true on the select data object
        obj.data( 'makeupApplied', true );

        //Add element to array to keep track of it
        $.makeup.elements.push( obj[0] );

        //Set the selected option to the as the label
        obj.prev( 'span' ).text( obj.find( 'option:selected' ).text( ) );
      }
    }
  };

  //Empty array to keep track of selects with makeup applied
  $.makeup = {
    elements: []
  };

  //Constructor
  $.fn.makeup = function ( options ) {
    return this.each(function () {
      if (!$(this).data("plugin_" + 'FormMakeup')) {
        $(this).data("plugin_" + 'FormMakeup', new FormMakeup( this, options ));
      }
    });
  };

  //This is a public function used if you make changes to the select via js/ajax you can force it to update the label and select the first option
  $.makeup.update = $.fn.makeup.update = function ( el ) {
    if( !el ) {
      el = $.makeup.elements;
    }
    $( el ).each( function( ) {
      var obj = $( this );
      if( obj.data( 'makeupApplied' ) && obj.is( 'select' ) && !obj.attr('multiple') ) {
          obj.prop( 'selectedIndex', 0 ).prev( 'span' ).text( obj.find( 'option:selected' ).text( ) );
      }
    } );
  };
})( window.Zepto || window.jQuery, window, document );
(function() {
  $(function() {
    return $('.adb-js-dropdown select').makeup({
      placeholderClassName: 'adb-js-dropdown-placeholder',
      selectClassName: 'adb-js-dropdown-select'
    });
  });

}).call(this);
(function() {
  $(function() {});

}).call(this);
/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */

(function(b){b.fn.equalize=function(a){var d=!1,g=!1,c,e;b.isPlainObject(a)?(c=a.equalize||"height",d=a.children||!1,g=a.reset||!1):c=a||"height";if(!b.isFunction(b.fn[c]))return!1;e=0<c.indexOf("eight")?"height":"width";return this.each(function(){var a=d?b(this).find(d):b(this).children(),f=0;a.each(function(){var a=b(this);g&&a.css(e,"");a=a[c]();a>f&&(f=a)});a.css(e,f+"px")})}})(jQuery);
(function() {


}).call(this);
(function() {
  var Matrix,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Matrix = (function() {
    function Matrix() {
      this.init_placeholders = bind(this.init_placeholders, this);
      this.contenteditable_blur = bind(this.contenteditable_blur, this);
      this.contenteditable_focus = bind(this.contenteditable_focus, this);
      this.focus_editable = bind(this.focus_editable, this);
      this.delete_matrix = bind(this.delete_matrix, this);
      this.append_row_to_table = bind(this.append_row_to_table, this);
      this.delete_row = bind(this.delete_row, this);
      this.prepend_row = bind(this.prepend_row, this);
      this.append_row = bind(this.append_row, this);
      this.clone_matrix = bind(this.clone_matrix, this);
      this.save_templates = bind(this.save_templates, this);
      console.log("constructor called");
    }

    Matrix.prototype.save_templates = function() {
      return $('[data-matrix-template]').each((function(_this) {
        return function(i, v) {
          var clone;
          clone = $(v).clone(true, true);
          clone.find('tbody tr:gt(0)').remove();
          clone.find('td:not(".controls")').find('[contenteditable], input.text, textarea').val('').text('');
          clone.find('td:not("controls") *').each(function(e) {
            return $(this).trigger('blur.adb-matrix.blur_td');
          });
          return window.matrix[$(v).data('matrix-template')] = clone;
        };
      })(this));
    };

    Matrix.prototype.clone_matrix = function() {
      var $last_matrix, $this, html, matrix_template;
      $this = $(this);
      matrix_template = $this.data('matrix');
      $last_matrix = $('[data-matrix-template="' + matrix_template + '"]').last();
      html = window.matrix[matrix_template].clone(true, true);
      console.log($this, matrix_template, $last_matrix, html);
      $last_matrix.after(html);
      return $last_matrix.find('td:not("controls") *').each(function() {
        return $(this).trigger('blur.adb-matrix.blur_td');
      });
    };

    Matrix.prototype.append_row = function(e) {
      var $this, appended, row_to_clone, row_to_insert, table;
      console.log("append_row");
      $this = $(this);
      table = $this.parents('[data-matrix-template]').find('table');
      console.log($this, table);
      row_to_clone = table.find('tbody tr').last();
      row_to_insert = row_to_clone.clone(true, true);
      row_to_insert.find('[contenteditable], input.text, textarea').text('').val('');
      appended = $this.parents('tr').after(row_to_insert);
      return appended.next('tr').find('*:not(".controls")').each(function(e) {
        return $(this).trigger('blur.adb-matrix.blur_td');
      });
    };

    Matrix.prototype.prepend_row = function(e) {
      var $this, prepended, row_to_clone, row_to_insert, table;
      console.log("prepend_row");
      $this = $(this);
      table = $this.parents('[data-matrix-template]').find('table');
      console.log($this, table);
      row_to_clone = table.find('tbody tr').last();
      row_to_insert = row_to_clone.clone(true, true);
      row_to_insert.find('[contenteditable], input.text, textarea').text('').val('');
      prepended = $this.parents('tr').before(row_to_insert);
      return prepended.prev('tr').find('*:not(".controls")').each(function(e) {
        return $(this).trigger('blur.adb-matrix.blur_td');
      });
    };

    Matrix.prototype.delete_row = function(e) {
      var $this, row_to_delete;
      console.log("delete_row");
      $this = $(this);
      console.log($this);
      row_to_delete = $this.parents('tr');
      if ($this.parents('tbody').find('tr').length === 1) {
        return alert("Sorry, this table requires at least one row.");
      } else {
        return row_to_delete.remove();
      }
    };

    Matrix.prototype.append_row_to_table = function(e) {
      var $this, row_to_clone, row_to_insert, table;
      console.log("append_row_to_table");
      $this = $(this);
      table = $this.parents('[data-matrix-template]').find('table');
      console.log($this, table);
      row_to_clone = table.find('tbody tr').last();
      row_to_insert = row_to_clone.clone(true, true);
      row_to_insert.find('[contenteditable], input.text, textarea').text('').val('');
      table.append(row_to_insert);
      return table.last('tr').find('*:not(".controls")').each(function(e) {
        return $(this).trigger('blur.adb-matrix.blur_td');
      });
    };

    Matrix.prototype.delete_matrix = function(e) {
      var $this, table;
      $this = $(this);
      table = $this.parents('[data-matrix-template]');
      console.log($this, table);
      return table.remove();
    };

    Matrix.prototype.focus_editable = function(e) {
      var $this;
      $this = $(this);
      return $(this).focus();
    };

    Matrix.prototype.contenteditable_focus = function(e) {
      var $this, ph;
      $this = $(this);
      ph = $this.data('placeholder');
      if ($this.text() === ph) {
        return $this.text('').removeClass('adb-js-matrix_field-placeholder');
      }
    };

    Matrix.prototype.contenteditable_blur = function(e) {
      var $this, ph;
      $this = $(this);
      ph = $this.data('placeholder');
      if ($this.text() === '' && (ph != null)) {
        return $this.text(ph).addClass('adb-js-matrix_field-placeholder');
      }
    };

    Matrix.prototype.init_placeholders = function() {
      return $('.adb-matrix_field [contenteditable]').each(function(index, value) {
        var $this, ph;
        $this = $(value);
        ph = $this.data('placeholder');
        if ($this.text() === '' && (ph != null)) {
          return $this.text(ph).addClass('adb-js-matrix_field-placeholder');
        }
      });
    };

    return Matrix;

  })();

  $(function() {
    window.matrix = {};
    Matrix.prototype.save_templates();
    return Matrix.prototype.init_placeholders();
  });

  $(document).on('click.adb-matrix.append_row', '.adb-matrix_field--append_row', Matrix.prototype.append_row);

  $(document).on('click.adb-matrix.prepend_row', '.adb-matrix_field--prepend_row', Matrix.prototype.prepend_row);

  $(document).on('click.adb-matrix.delete_row', '.adb-matrix_field--delete_row', Matrix.prototype.delete_row);

  $(document).on('click.adb-matrix.delete_row', '.adb-matrix_field--append_table', Matrix.prototype.append_row_to_table);

  $(document).on('click.adb-matrix.delete_row', '.adb-matrix_field--delete_matrix', Matrix.prototype.delete_matrix);

  $(document).on('click.adb-matrix.clone_matrix', '.adb-matrix_field--clone_matrix', Matrix.prototype.clone_matrix);

  $(document).on('click.adb-matrix.enter_td', '.adb-matrix_field td', Matrix.prototype.focus_editable);

  $(document).on('click.adb-matrix.focus_td', '.adb-matrix_field td', Matrix.prototype.contenteditable_focus);

  $(document).on('focus.adb-matrix.focus_td', '[contenteditable]', Matrix.prototype.contenteditable_focus);

  $(document).on('blur.adb-matrix.blur_td', '.adb-matrix_field td', Matrix.prototype.contenteditable_blur);

}).call(this);
(function() {
  $(function() {
    var sbw, scrollbar;
    scrollbar = function() {
      var width;
      document.body.style.overflow = 'hidden';
      width = document.body.clientWidth;
      document.body.style.overflow = 'scroll';
      width -= document.body.clientWidth;
      if (!width) {
        width = document.body.offsetWidth - document.body.clientWidth;
      }
      document.body.style.overflow = '';
      return width;
    };
    sbw = scrollbar();
    return $('[maxlength]').each(function(index, item) {
      var $count, $item, $parent, max;
      $item = $(item);
      $item.wrap('<div class="adb-js-maxlength"></div>');
      $parent = $item.parent();
      max = $item.attr('maxlength');
      $count = $("<span class='adb-js-maxlength-count'>" + max + "</span>");
      $item.after($count);
      if ($item.is('textarea')) {
        $parent.addClass('adb-js-maxlength-textarea');
      }
      $item.on('focus', function(event) {
        $count.addClass('adb-is-active');
        $parent.addClass('adb-is-focused');
        if ($item.is('input')) {
          return $item.css({
            'padding-right': $count.outerWidth()
          });
        } else if ($item.is('textarea')) {
          if (!(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) {
            return $item.css({
              'padding-right': sbw + "px"
            });
          }
        }
      });
      $item.on('blur', function(event) {
        $count.removeClass('adb-is-active');
        return $parent.removeClass('adb-is-focused');
      });
      return $item.on('keyup', function(event) {
        var keys, original_position;
        keys = {
          BACKSPACE: 8,
          TAB: 9,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40
        };
        switch (event.which) {
          case keys.UP:
          case keys.DOWN:
          case keys.LEFT:
          case keys.RIGHT:
          case keys.TAB:
          case keys.BACKSPACE:
            break;
          default:
            if ($(this).val().length >= max) {
              $(this).val($(this).val().substring(0, max));
              event.preventDefault();
              event.stopPropagation();
            }
        }
        original_position = $item.scrollTop();
        $item.scrollTop(original_position + 1);
        if ($item.scrollTop() === 0) {
          $count.animate({
            'right': 1
          }, 200);
          $count.data('scrolled', 'false');
        } else {
          if ($count.data('scrolled') !== "true") {
            $count.animate({
              'right': sbw + 1
            }, 200);
            $count.data('scrolled', 'true');
          }
        }
        $count.text(max - $(this).val().length);
        if ($(this).val().length >= max) {
          return $count.addClass('adb-is-error');
        } else {
          return $count.removeClass('adb-is-error');
        }
      });
    });
  });

}).call(this);
(function() {
  $(function() {
    var optionMenuOnClick;
    optionMenuOnClick = function() {
      var me, menu;
      me = $(this);
      menu = me.closest('.adb-js-context_menu');
      menu.toggleClass('adb-is-active');
      return me.toggleClass('adb-is-active');
    };
    $(document).on('click', '.adb-js-context_menu--trigger', optionMenuOnClick);
    $(document).on('mousedown', function(e) {
      var isOptions, isTargetToggle, isToggle, isToggleActive, target;
      target = $(e.target);
      isTargetToggle = target.hasClass('adb-js-context_menu--trigger');
      isToggle = isTargetToggle || target.closest('.adb-js-context_menu--trigger').length > 0;
      isOptions = target.hasClass('adb-js-context_menu--menu') || target.closest('.adb-js-context_menu--menu').length > 0;
      if (isTargetToggle) {
        isToggleActive = target.hasClass('adb-is-active');
      } else if (isToggle) {
        isToggleActive = target.closest('.adb-js-context_menu--trigger').hasClass('adb-is-active');
      } else {
        isToggleActive = false;
      }
      if ((!isToggle || !isToggleActive) && !isOptions) {
        $('.adb-js-context_menu').removeClass('adb-is-active');
        return $('.adb-js-context_menu--trigger').removeClass('adb-is-active');
      }
    });
    $(document).on('mouseup', function(e) {
      var isOptions, target;
      target = $(e.target);
      isOptions = target.hasClass('adb-js-context_menu--menu') || target.closest('.adb-js-context_menu--menu').length > 0;
      if (isOptions) {
        $('.adb-js-context_menu').removeClass('adb-is-active');
        return $('.adb-js-context_menu--trigger').removeClass('adb-is-active');
      }
    });
    $('a.adb-js-context_menu--trigger').attr("tabindex", 0);
    return $('a.adb-js-context_menu--trigger').keypress(function(e) {
      if (e.keyCode === 32 || e.keyCode === 13) {
        optionMenuOnClick.call(this);
        return false;
      }
    });
  });

}).call(this);
(function() {
  $(function() {
    return $('.adb-js-meter').each(function(i, element) {
      var $meter, percent, state;
      $meter = $(this);
      percent = $meter.data('percent') || '0';
      state = $meter.data('state');
      if (state === 'loading') {
        $meter.children().animate({
          'width': percent + '%'
        }, 1800);
      } else {
        $meter.children().css({
          'width': percent + '%'
        });
      }
      return $meter.data('percent', percent).attr('data-percent', percent);
    });
  });

}).call(this);
(function() {
  var tagsField;

  tagsField = (function() {
    function tagsField(item) {
      this.total = 0;
      this.element = item;
      this.inputs = this.element.find('.adb-js-checkbox input');
      this.categories = this.element.find('.adb-js-tags_field--category');
      this.tags = this.element.find('.adb-js-tags_field--tags');
      this.subcategory = $('<div class="adb-tag"><span class="adb-tag--text adb-js-tag--text"></span><a class="adb-tag--remove adb-js-tag--remove" href="# title="Remove"></a></div>');
      this.bindEvents();
    }

    tagsField.prototype.bindEvents = function() {
      this.categories.first().addClass('adb-is-active');
      this.categories.find('a').on('click', function(e) {
        var $category, $target, target;
        e.preventDefault();
        target = $(this).attr('href') || $(this).data('target');
        $target = $(target);
        $category = $(this).parent();
        $category.siblings().removeClass('adb-is-active');
        $category.addClass('adb-is-active');
        $target.siblings().hide();
        return $target.show();
      });
      return this.inputs.on('change', (function(_this) {
        return function(e) {
          var $target, id, value;
          $target = $(e.target);
          id = $target.attr('id');
          value = $target.val();
          if ($target.is(':checked')) {
            return _this.addToList(id, value);
          } else {
            return _this.removeFromList(id);
          }
        };
      })(this));
    };

    tagsField.prototype.bindCloseEvent = function(id) {
      return $("#tag-" + id).find('.adb-js-tag--remove').click((function(_this) {
        return function(e) {
          e.preventDefault();
          return _this.removeFromList(id);
        };
      })(this));
    };

    tagsField.prototype.evalTotal = function() {
      if (this.total > 0) {
        return this.tags.show();
      } else {
        return this.tags.hide();
      }
    };

    tagsField.prototype.updateCategoryCount = function() {
      return this.element.find('.adb-js-tags_field--subcategory').each((function(_this) {
        return function(i, element) {
          var $number, count;
          count = $(element).find('input:checked').length;
          $number = $('#' + $(element).attr('id') + '-link').find('.adb-js-tags_field--badge');
          if (count > 0) {
            $number.show().text(count);
          } else {
            $number.hide();
          }
          return _this.evalTotal();
        };
      })(this));
    };

    tagsField.prototype.activePanel = function() {
      return this.element.find('.adb-js-tags_field--subcategory:visible');
    };

    tagsField.prototype.addToList = function(id, value) {
      this.newsub = this.subcategory.clone();
      this.newsub.find('.adb-js-tag--text').text(value);
      this.newsub.attr('id', "tag-" + id);
      this.tags.append(this.newsub);
      this.bindCloseEvent(id);
      this.total++;
      return this.updateCategoryCount();
    };

    tagsField.prototype.removeFromList = function(id) {
      $('#tag-' + id).remove();
      this.activePanel().find('#' + id).removeAttr('checked');
      this.activePanel().find('#' + id).parents('.adb-js-checkbox').removeClass('adb-is-active');
      this.total--;
      return this.updateCategoryCount();
    };

    return tagsField;

  })();

  $(window).on('load', function() {
    var tagsFields;
    if ($('.adb-js-tags_field').length) {
      tagsFields = [];
      return $('.adb-js-tags_field').each(function(index, item) {
        return tagsFields[index] = new tagsField($(item));
      });
    }
  });

}).call(this);
/*! http://mths.be/placeholder v2.0.7 by @mathias */

;
(function(window, document, $) {

    var isInputSupported = 'placeholder' in document.createElement('input'),
        isTextareaSupported = 'placeholder' in document.createElement('textarea'),
        prototype = $.fn,
        valHooks = $.valHooks,
        hooks,
        placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function() {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                'focus.placeholder': clearPlaceholder,
                'blur.placeholder': setPlaceholder
            })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        hooks = {
            'get': function(element) {
                var $element = $(element);
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
                    if (element != document.activeElement) {
                        // We can't use `triggerHandler` here because of dummy text/password inputs :(
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
                return $element;
            }
        };

        isInputSupported || (valHooks.input = hooks);
        isTextareaSupported || (valHooks.textarea = hooks);

        $(function() {
            // Look for forms
            $(document).delegate('form', 'submit.placeholder', function() {
                // Clear the placeholder values so they don't get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {},
        rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this,
            $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                // If `clearPlaceholder` was called from `$.valHooks.input.set`
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == document.activeElement && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement,
        input = this,
            $input = $(input),
            $origInput = $input,
            id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({
                            'type': 'text'
                        });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {
                            'type': 'text'
                        }));
                    }
                    $replacement.removeAttr('name')
                        .data({
                        'placeholder-password': true,
                        'placeholder-id': id
                    })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input.data({
                        'placeholder-textinput': $replacement,
                        'placeholder-id': id
                    })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
                // Note: `$input[0] != input` now!
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

}(this, document, jQuery));
(function() {
  $(function() {
    return $('input, textarea').placeholder();
  });

}).call(this);
(function() {
  $(function() {
    $('.adb-js-checkbox, .adb-js-radio').each((function(_this) {
      return function(i, element) {
        if ($(element).find('input').prop('checked')) {
          return $(element).addClass('adb-is-selected');
        } else if ($(element).find('input').prop('disabled')) {
          return $(element).addClass('adb-is-disabled');
        }
      };
    })(this));
    return $(document).on('click', '.adb-js-checkbox', function(e) {
      var $input, label;
      $input = $(this).find('input');
      label = $(this).is('label');
      if (!$input.prop('disabled')) {
        if (!label) {
          if ($input.prop('checked')) {
            $input.prop('checked', false);
          } else {
            $input.prop('checked', true);
          }
        }
        if ($input.prop('checked')) {
          return $(this).addClass('adb-is-selected');
        } else {
          return $(this).removeClass('adb-is-selected');
        }
      }
    });
  });

  $(function() {
    return $(document).on('click', '.adb-js-radio', function(e) {
      var $input, name;
      $input = $(this).find('input');
      name = $input.attr('name');
      if (!$input.prop('disabled')) {
        $input.prop('checked', true);
        $('[name="' + name + '"]').closest('.adb-js-radio').removeClass('adb-is-selected');
        $(this).addClass('adb-is-selected');
      }
      return e.stopPropagation();
    });
  });

  $(function() {
    return $('.adb-js-checkboxes_field .adb-js-checkbox').on('click', function() {
      var $input, $list, $parent, $siblings;
      console.log($(this).next());
      $input = $(this).find('input');
      $list = $(this).siblings('ul');
      $parent = $(this).parent();
      if ($input.is(':checked')) {
        $list.show();
        $parent.addClass('adb-is-selected');
        if ($parent.data('check') === 'all') {
          $siblings = $parent.siblings();
          $siblings.find('input').prop('checked', true);
          return $siblings.find('.adb-js-checkbox').addClass('adb-is-selected');
        }
      } else {
        $list.find('.adb-is-selected input').removeAttr('checked');
        $list.find('.adb-is-selected').removeClass('adb-is-selected');
        $list.hide();
        $parent.removeClass('adb-is-selected');
        if ($parent.data('check') === 'all') {
          $siblings = $parent.siblings();
          $siblings.find('input').prop('checked', false);
          return $siblings.find('.adb-js-checkbox').removeClass('adb-is-selected');
        }
      }
    });
  });

}).call(this);
(function() {
  var Slider,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Slider = (function() {
    function Slider(element) {
      this.animateSlide = bind(this.animateSlide, this);
      this.offScreenItems = bind(this.offScreenItems, this);
      this.parent = element.parent();
      this.parent.data('slider', this);
      this.bounding_box = element;
      this.slider_container = this.bounding_box.find('.adb-slider--items');
      this.items = this.slider_container.find('.adb-slider--item');
      this.margin_adjust = $(this.items[1]).css('margin-left');
      this.prev_btn = this.parent.find('.adb-js-slider-prev');
      this.next_btn = this.parent.find('.adb-js-slider-next');
      this.offscreen_left = [];
      this.offscreen_right = [];
      this.setSlideContainerWidth();
      this.offScreenItems();
      this.bindEvents();
      if (this.parent.hasClass('modal')) {
        console.log("yup, modal");
        this.bounding_box.css({
          overflow: 'hidden'
        });
      }
    }

    Slider.prototype.bindEvents = function() {
      this.next_btn.on('click', (function(_this) {
        return function(e) {
          e.preventDefault();
          if (_this.next_btn.prop('disabled') !== true) {
            return _this.nextPage();
          }
        };
      })(this));
      this.prev_btn.on('click', (function(_this) {
        return function(e) {
          e.preventDefault();
          if (_this.prev_btn.prop('disabled') !== true) {
            return _this.prevPage();
          }
        };
      })(this));
      return this.parent.on('show', (function(_this) {
        return function() {
          return window.setTimeout(function() {
            _this.setSlideContainerWidth();
            return _this.offScreenItems();
          }, 200);
        };
      })(this));
    };

    Slider.prototype.setSlideContainerWidth = function() {
      var w;
      if (this.parent.hasClass('single')) {
        this.items.each((function(_this) {
          return function(index, value) {
            return $(value).width(_this.bounding_box.outerWidth());
          };
        })(this));
      }
      w = 0;
      this.items.each(function(i, v) {
        return w += $(v).outerWidth(true);
      });
      return this.slider_container.width(w);
    };

    Slider.prototype.offScreenItems = function() {
      this.offScreenLeft();
      this.offScreenRight();
      return this.adjustButtons();
    };

    Slider.prototype.adjustButtons = function() {
      if (this.offscreen_right.length >= 1) {
        this.next_btn.prop('disabled', false);
      } else {
        this.next_btn.prop('disabled', true);
      }
      if (this.offscreen_left.length >= 1) {
        return this.prev_btn.prop('disabled', false);
      } else {
        return this.prev_btn.prop('disabled', true);
      }
    };

    Slider.prototype.offScreenLeft = function() {
      this.offscreen_left.length = 0;
      return this.items.each((function(_this) {
        return function(i, v) {
          if ($(v).offset().left + $(v).outerWidth(true) + parseInt(_this.slider_container.css('margin-left')) < 0) {
            return _this.offscreen_left.push(v);
          }
        };
      })(this));
    };

    Slider.prototype.offScreenRight = function() {
      this.offscreen_right.length = 0;
      return this.items.each((function(_this) {
        return function(i, v) {
          if (v.offsetLeft + parseInt(_this.slider_container.css('margin-left')) > _this.bounding_box.get(0).offsetWidth) {
            return _this.offscreen_right.push(v);
          }
        };
      })(this));
    };

    Slider.prototype.nextPage = function() {
      var new_offset;
      new_offset = parseInt(this.slider_container.css('margin-left')) - parseInt(this.bounding_box.get(0).offsetWidth) - parseInt(this.margin_adjust);
      return this.animateSlide(new_offset);
    };

    Slider.prototype.prevPage = function() {
      var new_offset;
      new_offset = parseInt(this.slider_container.css('margin-left')) + parseInt(this.bounding_box.get(0).offsetWidth) + parseInt(this.margin_adjust);
      return this.animateSlide(new_offset);
    };

    Slider.prototype.animateSlide = function(new_offset) {
      this.next_btn.addClass('disabled');
      this.prev_btn.addClass('disabled');
      this.slider_container.stop(true, true);
      return this.slider_container.animate({
        'margin-left': new_offset
      }, 400, this.offScreenItems);
    };

    return Slider;

  })();

  $(function() {
    var sliders;
    if ($('.adb-js-slider').length) {
      sliders = {};
      return $('.adb-js-slider').each(function(i, v) {
        return sliders[i] = new Slider($(v));
      });
    }
  });

}).call(this);
/* HTML5 Sortable (http://farhadi.ir/projects/html5sortable)
 * Released under the MIT license.
 */
(function(a){var b,c=a();a.fn.sortable=function(d){var e=String(d);return d=a.extend({connectWith:!1},d),this.each(function(){if(/^enable|disable|destroy$/.test(e)){var f=a(this).children(a(this).data("items")).attr("draggable",e=="enable");e=="destroy"&&f.add(this).removeData("connectWith items").off("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s");return}var g,h,f=a(this).children(d.items),i=a("<"+(/^ul|ol$/i.test(this.tagName)?"li":"div")+' class="adb-js-sortable-placeholder">');f.find(d.handle).mousedown(function(){g=!0}).mouseup(function(){g=!1}),a(this).data("items",d.items),c=c.add(i),d.connectWith&&a(d.connectWith).add(this).data("connectWith",d.connectWith),f.attr("draggable","true").on("dragstart.h5s",function(c){if(d.handle&&!g)return!1;g=!1;var e=c.originalEvent.dataTransfer;e.effectAllowed="move",e.setData("Text","dummy"),h=(b=a(this)).addClass("adb-js-sortable-dragging").index()}).on("dragend.h5s",function(){b.removeClass("adb-js-sortable-dragging").show(),c.detach(),h!=b.index()&&f.parent().trigger("sortupdate",{item:b}),b=null}).not("a[href], img").on("selectstart.h5s",function(){return this.dragDrop&&this.dragDrop(),!1}).end().add([this,i]).on("dragover.h5s dragenter.h5s drop.h5s",function(e){return!f.is(b)&&d.connectWith!==a(b).parent().data("connectWith")?!0:e.type=="drop"?(e.stopPropagation(),c.filter(":visible").after(b),!1):(e.preventDefault(),e.originalEvent.dataTransfer.dropEffect="move",f.is(this)?(d.forcePlaceholderSize&&i.height(b.outerHeight()),b.hide(),a(this)[i.index()<a(this).index()?"after":"before"](i),c.not(i).detach()):!c.is(this)&&!a(this).children(d.items).length&&(c.detach(),a(this).append(i)),!1)})})}})(jQuery);
(function() {
  $(function() {
    $('.adb-js-sortable').sortable({
      handle: '.adb-js-sortable-reorder'
    }).on('sortupdate', function() {
      return $(this).find('.adb-js-sortable-reorder').removeClass('adb-is-hover');
    });
    $('.adb-js-sortable-reorder').on('mouseover mouseout', function(e) {
      return $(this).toggleClass('adb-is-hover');
    }).on('mousedown', function(e) {
      return $(this).parents('.adb-js-sortable').addClass('adb-is-dragging');
    }).on('mouseup mouseleave', function(e) {});
    return $(this).parents('.adb-js-sortable').removeClass('adb-is-dragging');
  });

}).call(this);
(function() {
  $(function() {
    return $(document).on('click', '[data-loading]', function(e) {
      var $icon, $trigger, icon, loading;
      $trigger = $(this);
      icon = '<span class="adb-loading"><span class="adb-loading--text">...</span></span>';
      loading = $(this).data('loading');
      $icon = $(icon);
      $trigger.attr('disabled', true).addClass('adb-is-loading');
      $trigger.append($icon);
      return setTimeout(function() {
        $trigger.attr('disabled', false).removeClass('adb-is-loading');
        return $icon.remove();
      }, 4000);
    });
  });

}).call(this);
(function() {
  $(function() {
    return $('.adb-js-sticky').each(function(index, item) {
      var parentWidth, top;
      parentWidth = $(item).parent().outerWidth();
      top = $(item).position().top - 24;
      $(item).width(parentWidth);
      return $(item).affix({
        offset: {
          top: top
        }
      });
    });
  });

}).call(this);
(function() {
  $(function() {
    $(document).on('click', '[data-toggle="filters"]', function() {
      var $target;
      $target = $(this).parents('[data-filters]').find('.adb-js-filters');
      $(this).toggleClass('adb-is-active');
      $(this).text(function(i, text) {
        if (text === "Hide Filters") {
          return "Show Filters";
        } else {
          return "Hide Filters";
        }
      });
      return $target.toggleClass('adb-is-visually_hidden');
    });
    $(document).on('click', '[data-url]', function(e) {
      var $url;
      $url = $(this).data('url');
      if ($url) {
        return window.document.location = $url;
      }
    });
    $('[data-toggle-rows] tr').each(function(i, item) {
      var $input, $row;
      $row = $(this);
      $input = $row.find('[type="checkbox"]');
      if (!$input.prop('checked')) {
        $row.addClass('adb-is-disabled');
      }
      return $input.on('change', function(e) {
        var final;
        final = $input.prop('checked');
        console.log(e, final);
        if (final === true) {
          $row.removeClass('adb-is-disabled').addClass('adb-is-enabled');
          $row.siblings('tr').removeClass('adb-is-enabled');
          return setTimeout((function() {
            $row.removeClass('adb-is-enabled');
          }), 4000);
        } else {
          return $row.removeClass('adb-is-enabled').addClass('adb-is-disabled');
        }
      });
    });
    $('th[data-sort].adb-is-active').each((function(_this) {
      return function(i, element) {
        var order;
        order = $(element).data('sort-order');
        if (!order) {
          return $(element).data('sort-order', 'descending').attr('data-sort-order', 'descending');
        }
      };
    })(this));
    return $(document).on('click', 'th[data-sort]', function(e) {
      var order, sort;
      sort = $(this).data('sort');
      order = $(this).data('sort-order');
      if ($(this).hasClass('adb-is-active')) {
        if (order === 'ascending') {
          return $(this).data('sort-order', 'descending').attr('data-sort-order', 'descending');
        } else if (order === 'descending') {
          return $(this).data('sort-order', 'ascending').attr('data-sort-order', 'ascending');
        }
      } else {
        $(this).siblings('[data-sort]').removeClass('adb-is-active');
        $(this).data('sort-order', 'descending').attr('data-sort-order', 'descending');
        return $(this).addClass('adb-is-active');
      }
    });
  });

}).call(this);
(function() {
  $(function() {
    return $('[data-toggle="tab"], [data-toggle="pill"]').on('shown', function(e) {
      var $target, target;
      target = $(e.target).attr('href') || $(e.target).data('target');
      $target = $(target);
      if ($target.find('[data-truncate="paragraph"]').length) {
        $('[data-truncate="paragraph"]').each((function(_this) {
          return function(i, element) {
            var lines;
            lines = $(element).data("lines");
            return $(element).trunk8({
              lines: lines
            });
          };
        })(this));
      }
      if ($target.find('.dropdown').length) {
        console.log($target.find('.dropdown'));
        $('.dropdown select').chosen({
          disable_search_threshold: 12
        });
      }
      if (target = '#product-pricing') {
        return $target.find('.adb-subscriptions').each(function(index, item) {
          var cell, cellHeight, j, k, len, len1, results, row, rowHeight, subscriptionRows;
          subscriptionRows = new Array();
          $(this).find('.adb-subscription').each(function(index, item) {
            return $(this).find('.adb-subscription--content_section').each(function(index, item) {
              var row;
              if (!subscriptionRows[index]) {
                row = [this];
                return subscriptionRows.push(row);
              } else {
                return subscriptionRows[index].push(this);
              }
            });
          });
          results = [];
          for (j = 0, len = subscriptionRows.length; j < len; j++) {
            row = subscriptionRows[j];
            console.log($(row));
            rowHeight = 0;
            for (k = 0, len1 = row.length; k < len1; k++) {
              cell = row[k];
              cellHeight = $(cell).outerHeight();
              if (cellHeight > rowHeight) {
                rowHeight = cellHeight;
              }
              console.log(rowHeight);
            }
            results.push($(row).height(rowHeight));
          }
          return results;
        });
      }
    });
  });

}).call(this);
(function() {
  $(function() {
    $('.adb-js-input_row').find('input').on('focus', function() {
      $(this).parents('.adb-js-input_row').addClass('adb-is-focused');
      return $(this).parents('.adb-js-input_row').removeAttr('data-error').removeClass('adb-is-error');
    }).on('blur', function() {
      return $(this).parents('.adb-js-input_row').removeClass('adb-is-focused');
    });
    $('.adb-js-input_row').find('[disabled]').each(function(i, element) {
      return $(this).parents('.adb-js-input_row').addClass('adb-is-disabled');
    });
    return $('[data-validate]').each(function(i, element) {
      var $icon;
      $(this).wrap('<div></div>');
      $(this).parent().addClass('adb-js-text__validated');
      $(this).after('<span class="adb-js-text__validated--status"></span>');
      $icon = $(this).next('.adb-js-text__validated--status');
      console.log($icon);
      $icon.data({
        html: true,
        toggle: 'tooltip',
        title: $(this).data('error')
      });
      return $icon.tooltip('show');
    });
  });

}).call(this);
(function() {
  /**
   * @constructor
   */
  var ToggleSwitch = function(eCheckBox, sOnText, sOffText) 
  {
    /**
     * @private
     */
    this.eCheckBox = eCheckBox;

    /**
     * @private
     */
    this.eTrack = document.createElement('div');
    this.eTrack.className = 'ts-track ' + this.eCheckBox.className;
    this.eTrack.innerHTML = '<div class="ts-switch-container">' + 
                  '<span class="ts-on-text">' + sOnText + '</span>' + 
                  '<span class="ts-switch"></span>' + 
                  '<span class="ts-off-text">' + sOffText + '</span>' + 
                '</div>';

    /**
     * @private
     */
    this.eSwitchContainer = this.eTrack.firstChild;

    /**
     * @private
     */
    this.eOnText = this.eSwitchContainer.firstChild;

    /**
     * @private
     */
    this.eSwitch = this.eOnText.nextSibling;

    /**
     * @private
     */
    this.eOffText = this.eSwitch.previousSibling;

    this.eTrack.addEventListener('click', this._click.bind(this), false);

    // Events for mobile devices
    this.eSwitch.addEventListener('touchend', this._touchEnd.bind(this), false);
    this.eSwitch.addEventListener('touchstart', this._touchStart.bind(this), false);
    this.eSwitch.addEventListener('touchmove', this._touchMove.bind(this), false);

    // Events for dragging on desktop devices.
    document.addEventListener('mousemove', this._mouseMove.bind(this), false);
    this.eSwitch.addEventListener('mousedown', this._mouseDown.bind(this), false);
    document.addEventListener('mouseup', this._mouseUp.bind(this), false);

    this.eCheckBox.parentNode.replaceChild(this.eTrack, this.eCheckBox);
    this.eTrack.appendChild(this.eCheckBox);

    if (this.eCheckBox.checked)
    {
      this._disableTransition();
      this._switch(true, true);
    }
  };

  ToggleSwitch.prototype = 
  {
    /**
     * @private 
     */
    _isOn: false,

    /**
     * @private 
     */
    _isMouseDown: false,

    /**
     * @private
     */
    _isDragging: false,

    // -- Public Methods --

    /**
     * Returns TRUE if the switch is on, false otherwise.
     * @return {boolean}
     */
    isOn: function()
    {
      return this._isOn;
    },

    /**
     * Switches the switch on.
     */
    on: function()
    {
      this._switch(true);
    },

    /**
     * Switches the switch off.
     */
    off: function()
    {
      this._switch(false);
    },

    /**
     * Toggle the switch to the opposite state.
     */
    toggle: function()
    {
      (this._isOn) ? this.off() : this.on();
    },

    /**
     * Adds a listener to listen to changes
     */
    addListener: function(fCallback)
    {
      this.fCallback = fCallback;
    },

    // -- Private Methods --

    /**
     * @private
     */
    _click: function(e)
    {
      if (!this._isDragging)
      {
        this.toggle();  
      }
      this._isMouseDown = false;
      this._isDragging = false;
    },

    /**
     * @private
     */
    _mouseDown: function()
    {
      this._disableTransition();
      this._isMouseDown = true;
    },

    /**
     * @private
     */
    _mouseMove: function(e)
    {
      if (this._isMouseDown)
      {
        this._isDragging = true;
        this._pointerMove(e, e.pageX);
      }
    },

    /**
     * @private
     */
    _mouseUp: function(e)
    {
      if (this._isDragging)
      {
        this._snapSwitch();
      }
    },

    /**
     * @private
     */
    _touchStart: function(e)
    {
      this._disableTransition();
      // Prevent scrolling of the window.
      e.preventDefault(); 
    },

    /**
     * @private
     */
    _touchMove: function(e)
    {
      if (e.touches.length == 1)
      {
        this._pointerMove(e, e.touches[0].pageX, true);
      }
    },

    /**
     * @private
     */
    _touchEnd: function(e)
    {
      this._snapSwitch(); 
    },

    /**
     * Called for both desktop and mobile pointing.
     * @private
     */
    _pointerMove: function(e, nCoordX, bPreventDefault)
    {
      var nPos = this._convertCoordToMarginLeft(nCoordX);
      var nBackgroundPos = this._convertCoordToBackgroundPosition(nCoordX);

      var maxMarginLeft = this._getMaxContainerMarginLeft();
      var minMarginLeft = this._getMinContainerMarginLeft();

      if (nPos <= minMarginLeft)
      {
        nPos = minMarginLeft;
        nBackgroundPos = this._getMinTrackBackgroundX();
      }
      else if (nPos >= maxMarginLeft)
      {
        nPos = maxMarginLeft;
        nBackgroundPos = 0;
      }

      this.eSwitchContainer.style.marginLeft = nPos + "px";
      this.eTrack.style.backgroundPosition = nBackgroundPos + "px";

      if (bPreventDefault) 
      {
        e.preventDefault();
      }
    },

    /**
     * @private
     */
    _disableTransition: function()
    {
      this._addClass(this.eTrack, 'no-transition');
    },

    /**
     * @private
     */
    _enableTransition: function()
    {
      this._removeClass(this.eTrack, 'no-transition');
    },

    /**
     * @private
     */
    _convertCoordToMarginLeft: function(nCoordX)
    {
      var left = this._getPosition(this.eTrack).left;
      return nCoordX - left - (-this._getMinContainerMarginLeft()) - (this.eSwitch.offsetWidth / 2);
    },

    /**
     * @private
     */
    _convertCoordToBackgroundPosition: function(nCoordX)
    {
      var left = this._getPosition(this.eTrack).left;
      return nCoordX - left - (-this._getMinTrackBackgroundX()) - (this.eSwitch.offsetWidth / 2);
    },

    /**
     * @private
     */
    _getOccupiedSpaceBeforeSwitch: function()
    {
      return this.eOnText.offsetWidth +
        (this._getPosition(this.eSwitch).left - this._getPosition(this.eOnText).left - this.eOnText.offsetWidth);
    },

    /**
     * @private
     */
    _getMaxContainerMarginLeft: function()
    {
      return this.eTrack.offsetWidth - this.eSwitch.offsetWidth - this._getOccupiedSpaceBeforeSwitch() - 1;
    },

    /**
     * @private
     */
    _getMinContainerMarginLeft: function() 
    {
      return -this._getOccupiedSpaceBeforeSwitch() - 1;
    },

    /**
     * @private
     */
    _getMinTrackBackgroundX: function()
    {
      return -this.eTrack.offsetWidth + this.eSwitch.offsetWidth - 1;
    },

    /**
     * @private
     */
    _snapSwitch: function()
    {
      var pos = parseInt(this.eSwitchContainer.style.marginLeft, 0);
      var max = this._getMaxContainerMarginLeft();
      var min = this._getMinContainerMarginLeft();

      (pos > (max + min) / 2) ? this.on() : this.off();
    },

    /**
     * @private
     */
    _switch: function(bEnabled, bDisableTransition)
    {
      this._isOn = bEnabled;
      if (!bDisableTransition)
      {
        this._enableTransition(); 
      }

      var nMargin = (bEnabled) ? this._getMaxContainerMarginLeft() : this._getMinContainerMarginLeft();
      var nBackgroundPos = (bEnabled) ? 0 : this._getMinTrackBackgroundX();
      this.eSwitchContainer.style.marginLeft = nMargin + "px";
      this.eTrack.style.backgroundPosition = nBackgroundPos + "px 0px";
      (bEnabled) ? this.eTrack.className += " active" : this.eTrack.className = this.eTrack.className.replace( /(?:^|\s)active(?!\S)/g , '' );
      (bEnabled) ? this.eCheckBox.setAttribute('checked', 'checked') : this.eCheckBox.removeAttribute('checked');
      if (this.fCallback) this.fCallback(bEnabled);
    },

    // -- UTILITY METHODS --

    /**
     * @private
     */
    _getPosition: function(eEl)
    {
      var curleft = curtop = 0;
      if (eEl.offsetParent) 
      {
        do 
        {
          curleft += eEl.offsetLeft;
          curtop += eEl.offsetTop;
        } while (eEl = eEl.offsetParent);
      }
      return {left: curleft, top: curtop};
    },

    /**
     * @private
     */
    _removeClass: function(eEl, sClass)
    {
      var sClassName = (eEl.className) || '';
      eEl.className = sClassName.replace(new RegExp('(\\b' + sClass + '\\b)'), '').trim();
    },

    /**
     * @private
     */
    _addClass: function(eEl, sClass)
    {
      this._removeClass(eEl, sClass);
      eEl.className += ' ' + sClass;
    }
  };

  // Google Closure Externs.
  window['ToggleSwitch'] = ToggleSwitch;
  window['ToggleSwitch'].prototype['on'] = ToggleSwitch.prototype.on;
  window['ToggleSwitch'].prototype['isOn'] = ToggleSwitch.prototype.isOn;
  window['ToggleSwitch'].prototype['off'] = ToggleSwitch.prototype.off;
  window['ToggleSwitch'].prototype['toggle'] = ToggleSwitch.prototype.toggle;
})();
(function() {
  $(function() {
    var switches;
    switches = $('.switch');
    return $(switches).each(function(index, item) {
      var $item;
      $item = $(item);
      return new ToggleSwitch(item, $item.attr('data-active-label'), $item.attr('data-inactive-label'));
    });
  });

}).call(this);
(function() {
  $(function() {
    return $(document).find('[data-toggle~="tooltip"], .has_tooltip').tooltip({
      html: true,
      container: 'body'
    });
  });

}).call(this);
/**!
 * trunk8 v1.3.1
 * https://github.com/rviscomi/trunk8
 * 
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 * 
 * Date: September 26, 2012
 */


(function ($) {
	var methods,
		utils,
		SIDES = {
			/* cen...ter */
			center: 'center',
			/* ...left */
			left: 'left',
			/* right... */
			right: 'right'
		},
		WIDTH = {
			auto: 'auto'
		};
	
	function trunk8(element) {
		this.$element = $(element);
		this.original_text = this.$element.html();
		this.settings = $.extend({}, $.fn.trunk8.defaults);
	}
	
	trunk8.prototype.updateSettings = function (options) {
		this.settings = $.extend(this.settings, options);
	};

	function stripHTML(html) {
		var tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return tmp.textContent||tmp.innerText;
	}

	function getHtmlArr(str) {
		/* Builds an array of strings and designated */
		/* HTML tags around them. */
		if (stripHTML(str) === str) {
			return str.split(/\s/g);
		}
		var allResults = [],
			reg = /<([a-z]+)([^<]*)(?:>(.*?(?!<\1>)*)<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/ig,
			outArr = reg.exec(str),
			lastI,
			ind;
		while (outArr && lastI !== reg.lastIndex) {
			lastI = reg.lastIndex;
			if (outArr[5]) {
				allResults.push(outArr[5]);
			} else if (outArr[1]) {
				allResults.push({
					tag: outArr[1],
					attribs: outArr[2],
					content: outArr[3],
					after: outArr[4]
				});
			}
			outArr = reg.exec(str);
		}
		for (ind = 0; ind < allResults.length; ind++) {
			if (typeof allResults[ind] !== 'string' &&
					allResults[ind].content) {
				allResults[ind].content = getHtmlArr(allResults[ind].content);
			}
		}
		return allResults;
	}

	function rebuildHtmlFromBite(bite, htmlObject, fill) {
		// Take the processed bite after binary-search
		// truncated and re-build the original HTML
		// tags around the processed string.
		bite = bite.replace(fill, '');

		var biteHelper = function(contentArr, tagInfo) {
				var retStr = '',
					content,
					biteContent,
					biteLength,
					nextWord,
					i;
				for (i = 0; i < contentArr.length; i++) {
					content = contentArr[i];
					biteLength = $.trim(bite).split(' ').length;
					if ($.trim(bite).length) {
						if (typeof content === 'string') {
							if (!/<br\s*\/?>/.test(content)) {
								if (biteLength === 1 && $.trim(bite).length <= content.length) {
									content = bite;
									// We want the fill to go inside of the last HTML
									// element if the element is a container.
									if (tagInfo === 'p' || tagInfo === 'div') {
										content += fill;
									}
									bite = '';
								} else {
									bite = bite.replace(content, '');
								}
							}
							retStr += $.trim(content) + ((i === contentArr.length-1 || biteLength <= 1) ? '' : ' ');
						} else {
							biteContent = biteHelper(content.content, content.tag);
							if (content.after) bite = bite.replace(content.after, '');
							if (biteContent) {
								if (!content.after) content.after = ' ';
								retStr += '<'+content.tag+content.attribs+'>'+biteContent+'</'+content.tag+'>' + content.after;
							}
						}
					}
				}
				return retStr;
			},
			htmlResults = biteHelper(htmlObject);

		// Add fill if doesn't exist. This will place it outside the HTML elements.
		if (htmlResults.slice(htmlResults.length - fill.length) === fill) {
			htmlResults += fill;
		}

		return htmlResults;
	}

	function truncate() {
		var data = this.data('trunk8'),
			settings = data.settings,
			width = settings.width,
			side = settings.side,
			fill = settings.fill,
			parseHTML = settings.parseHTML,
			line_height = utils.getLineHeight(this) * settings.lines,
			str = data.original_text,
			length = str.length,
			max_bite = '',
			lower, upper,
			bite_size,
			bite,
			text,
			htmlObject;
		
		/* Reset the field to the original string. */
		this.html(str);
		text = this.text();

		/* If string has HTML and parse HTML is set, build */
		/* the data struct to house the tags */
		if (parseHTML && stripHTML(str) !== str) {
			htmlObject = getHtmlArr(str);
			str = stripHTML(str);
			length = str.length;
		}

		if (width === WIDTH.auto) {
			/* Assuming there is no "overflow: hidden". */
			if (this.height() <= line_height) {
				/* Text is already at the optimal trunkage. */
				return;
			}

			/* Binary search technique for finding the optimal trunkage. */
			/* Find the maximum bite without overflowing. */
			lower = 0;
			upper = length - 1;

			while (lower <= upper) {
				bite_size = lower + ((upper - lower) >> 1);
				
				bite = utils.eatStr(str, side, length - bite_size, fill);

				if (parseHTML && htmlObject) {
					bite = rebuildHtmlFromBite(bite, htmlObject, fill);
				}
				
				this.html(bite);

				/* Check for overflow. */
				if (this.height() > line_height) {
					upper = bite_size - 1;
				}
				else {
					lower = bite_size + 1;

					/* Save the bigger bite. */
					max_bite = (max_bite.length > bite.length) ? max_bite : bite;
				}
			}

			/* Reset the content to eliminate possible existing scroll bars. */
			this.html('');
			
			/* Display the biggest bite. */
			this.html(max_bite);
			
			if (settings.tooltip) {
				this.attr('title', text);
			}
		}
		else if (!isNaN(width)) {
			bite_size = length - width;

			bite = utils.eatStr(str, side, bite_size, fill);

			this.html(bite);
			
			if (settings.tooltip) {
				this.attr('title', str);
			}
		}
		else {
			$.error('Invalid width "' + width + '".');
		}
	}

	methods = {
		init: function (options) {
			return this.each(function () {
				var $this = $(this),
					data = $this.data('trunk8');
				
				if (!data) {
					$this.data('trunk8', (data = new trunk8(this)));
				}
				
				data.updateSettings(options);
				
				truncate.call($this);
			});
		},

		/** Updates the text value of the elements while maintaining truncation. */
		update: function (new_string) {
			return this.each(function () {
				var $this = $(this);
				
				/* Update text. */
				if (new_string) {
					$this.data('trunk8').original_text = new_string;
				}

				/* Truncate accordingly. */
				truncate.call($this);
			});
		},
		
		revert: function () {
			return this.each(function () {
				/* Get original text. */
				var text = $(this).data('trunk8').original_text;
				
				/* Revert element to original text. */
				$(this).html(text);
			});
		},

		/** Returns this instance's settings object. NOT CHAINABLE. */
		getSettings: function () {
			return $(this.get(0)).data('trunk8').settings;
		}
	};

	utils = {
		/** Replaces [bite_size] [side]-most chars in [str] with [fill]. */
		eatStr: function (str, side, bite_size, fill) {
			var length = str.length,
				key = utils.eatStr.generateKey.apply(null, arguments),
				half_length,
				half_bite_size;

			/* If the result is already in the cache, return it. */
			if (utils.eatStr.cache[key]) {
				return utils.eatStr.cache[key];
			}
			
			/* Common error handling. */
			if ((typeof str !== 'string') || (length === 0)) {
				$.error('Invalid source string "' + str + '".');
			}
			if ((bite_size < 0) || (bite_size > length)) {
				$.error('Invalid bite size "' + bite_size + '".');
			}
			else if (bite_size === 0) {
				/* No bite should show no truncation. */
				return str;
			}
			if (typeof (fill + '') !== 'string') {
				$.error('Fill unable to be converted to a string.');
			}

			/* Compute the result, store it in the cache, and return it. */
			switch (side) {
				case SIDES.right:
					/* str... */
					return utils.eatStr.cache[key] =
							$.trim(str.substr(0, length - bite_size)) + fill;
					
				case SIDES.left:
					/* ...str */
					return utils.eatStr.cache[key] =
							fill + $.trim(str.substr(bite_size));
					
				case SIDES.center:
					/* Bit-shift to the right by one === Math.floor(x / 2) */
					half_length = length >> 1; // halve the length
					half_bite_size = bite_size >> 1; // halve the bite_size

					/* st...r */
					return utils.eatStr.cache[key] =
							$.trim(utils.eatStr(str.substr(0, length - half_length), SIDES.right, bite_size - half_bite_size, '')) +
							fill +
							$.trim(utils.eatStr(str.substr(length - half_length), SIDES.left, half_bite_size, ''));
					
				default:
					$.error('Invalid side "' + side + '".');
			}
		},
		
		getLineHeight: function (elem) {
				var floats = $(elem).css('float');
				if (floats !== 'none') {
					$(elem).css('float', 'none');
				}
				var pos = $(elem).css('position');
				if (pos === 'absolute') {
					$(elem).css('position', 'static');
				}
	
				var html = $(elem).html(),
				wrapper_id = 'line-height-test',
				line_height;
	
				/* Set the content to a small single character and wrap. */
				$(elem).html('i').wrap('<div id="' + wrapper_id + '" />');
	
				/* Calculate the line height by measuring the wrapper.*/
				line_height = $('#' + wrapper_id).innerHeight();
	
				/* Remove the wrapper and reset the content. */
				$(elem).html(html).css({ 'float': floats, 'position': pos }).unwrap();
	
				return line_height;
			}
	};

	utils.eatStr.cache = {};
	utils.eatStr.generateKey = function () {
		return Array.prototype.join.call(arguments, '');
	};
	
	$.fn.trunk8 = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + method + ' does not exist on jQuery.trunk8');
		}
	};
	
	/* Default trunk8 settings. */
	$.fn.trunk8.defaults = {
		fill: '&hellip;',
		lines: 1,
		side: SIDES.right,
		tooltip: true,
		width: WIDTH.auto,
		parseHTML: false
	};
})(jQuery);
(function() {
  $(function() {
    return $('[data-truncate="paragraph"]').each((function(_this) {
      return function(i, element) {
        return $(element).trunk8({
          lines: $(element).data("lines")
        });
      };
    })(this));
  });

}).call(this);
(function() {
  var Tutorial;

  Tutorial = (function() {
    function Tutorial(elements, show_on_load) {
      this.elements = elements;
      this.show_on_load = show_on_load;
      this.steps = [];
      this.elements.each((function(_this) {
        return function(index, item) {
          return _this.steps[index] = new Dialog(item);
        };
      })(this));
      this.currentSlide = 0;
      this.bindEvents();
      this.positionSteps();
      if (this.show_on_load) {
        this.showFirst();
      }
    }

    Tutorial.prototype.orderSteps = function() {
      return this.steps.sort(function(a, b) {
        return a.order - b.order;
      });
    };

    Tutorial.prototype.bindEvents = function() {
      $(this.steps).each((function(_this) {
        return function(index, step) {
          step.dialog_element.find('.adb-pager--button__next').on('click', function(e) {
            e.preventDefault();
            return _this.nextSlide();
          });
          return step.dialog_element.find('.adb-pager--button__prev').on('click', function(e) {
            e.preventDefault();
            return _this.prevSlide();
          });
        };
      })(this));
      return $('[data-toggle="guided"]').on('show', (function(_this) {
        return function(e) {
          _this.currentSlide = parseInt($(e.delegateTarget).data('order')) - 1;
          return _this.setActiveIndicator();
        };
      })(this));
    };

    Tutorial.prototype.nextSlide = function() {
      if (this.currentSlide !== this.steps.length - 1) {
        return this.showSlide(this.steps[this.currentSlide + 1]);
      }
    };

    Tutorial.prototype.prevSlide = function() {
      if (this.currentSlide !== 0) {
        return this.showSlide(this.steps[this.currentSlide - 1]);
      }
    };

    Tutorial.prototype.showSlide = function(slide) {
      this.hideCurrentSlide();
      slide.calculatePlacement();
      return slide.show();
    };

    Tutorial.prototype.hideSlide = function(slide) {
      return slide.hide();
    };

    Tutorial.prototype.hideCurrentSlide = function() {
      return this.hideSlide(this.steps[this.currentSlide]);
    };

    Tutorial.prototype.showFirst = function() {
      return this.steps[0].show();
    };

    Tutorial.prototype.setActiveIndicator = function() {
      return $('.adb-pager--caption').text((this.currentSlide + 1) + " of " + this.steps.length);
    };

    Tutorial.prototype.positionSteps = function() {
      return $(this.steps).each((function(_this) {
        return function(index, step) {
          step.dialog_height = step.dialog_element.outerHeight();
          return step.calculatePlacement();
        };
      })(this));
    };

    return Tutorial;

  })();

  $(function() {
    var $firstSlide, groups, key, value;
    if ($('[data-toggle="guided"]').length) {
      groups = {};
      $('[data-toggle="guided"]').each(function() {
        var group;
        group = $(this).attr('data-group');
        if (group != null) {
          return groups[group] = $('[data-toggle="guided"][data-group="' + group + '"]');
        } else {
          return groups["loose"] = $('[data-toggle="guided"]:not([data-group])');
        }
      });
      window.guided = (function() {
        var results;
        results = [];
        for (key in groups) {
          value = groups[key];
          results.push(new Tutorial(value, false));
        }
        return results;
      })();
    }
    if ($('[data-toggle="guided"][data-event="load"]').length) {
      $firstSlide = $('[data-toggle="guided"][data-event="load"]').first().data('dialog');
      return window.guided[0].showSlide($firstSlide);
    }
  });

}).call(this);
(function() {
  $(function() {
    return $('.adb-upload').find('[type="file"]').on('change', function(e) {
      var $clear, $select, $text, $upload, value;
      value = $(this).val();
      value = value.substring(value.lastIndexOf('\\') + 1);
      $upload = $(this).closest('.adb-upload');
      $select = $(this).closest('.adb-upload--select');
      $clear = $('<a/>').addClass('adb-upload--clear');
      $text = $upload.find('[type="text"]');
      $text.val(value);
      $select.before($clear);
      $text.css({
        'padding-right': $select.outerWidth() + $clear.innerWidth() + 'px'
      });
      $clear.css({
        right: $select.outerWidth()
      });
      return $clear.on('click', function(e) {
        console.log(e);
        $text.val('');
        $select.find('[type="file"]').val('');
        return $(this).remove();
      });
    });
  });

  $('.upload_field').find('.spinner-large:not(".preserve")').hide();

  $(window).on('dragover', function(e) {
    return e.preventDefault();
  });

  $(window).on('drop', function(e) {
    return e.preventDefault();
  });

  $('.upload_field').on('click', 'button.remove', function(e) {
    var $target_parent, $upload_field;
    e.preventDefault();
    $target_parent = $(e.target).parents('.file_uploaded');
    $upload_field = $target_parent.siblings('.upload_field');
    $target_parent.remove();
    return $upload_field.removeClass('hidden');
  });

  $(document).on('dragover', function(e) {
    $('.upload_field').addClass('dragging');
    return window.clearTimeout(window.dragTimer);
  });

  $('.upload_field').on('dragenter', function(e) {
    return $(e.target).parents('.upload_field').addClass('over');
  });

  $('.upload_field').on('dragleave', function(e) {
    return $(e.target).parents('.upload_field').removeClass('over');
  });

  $('.upload_field').on('drop', function(e) {
    var $target;
    e.preventDefault();
    $target = $(e.target);
    if ($target.get(0).nodeName === "LABEL") {
      $target = $(e.target);
    } else {
      $target = $(e.target).parents('label');
    }
    $target.find('.text').addClass('hidden');
    $target.find('.spinner-large').show();
    setTimeout(function() {
      $target.find('.spinner-large').hide();
      $target.find('.text').removeClass('hidden');
      return $target.before($('<div class="upload_field file_uploaded dragging"> <div class="info"> <span class="file"> <i class="icon icon-file"></i> file-name-here.jpg</span> <button class="delete small square"><i class="icon icon-trash"></i></button> </div> <div class="image framed"> <img src="/images/content/product-screenshot.png"> </div> </div>'));
    }, 2000);
    return $('.upload_field').removeClass('dragging');
  });

  $('body').on('dragleave', function(e) {
    window.clearTimeout(window.dragTimer);
    return window.dragTimer = window.setTimeout(function(ev) {
      return $('.upload_field').removeClass('dragging');
    }, 85);
  });

}).call(this);
(function() {


}).call(this);
