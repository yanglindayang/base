(function() {
  var ThemeUtils;

  ThemeUtils = (function() {
    ThemeUtils.prototype.createCookie = function(name, value, days) {
      var date, expires;
      if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      } else {
        expires = "";
      }
      return document.cookie = name + "=" + value + expires + "; path=/";
    };

    ThemeUtils.prototype.readCookie = function(name) {
      var c, ca, i, nameEQ;
      nameEQ = name + "=";
      ca = document.cookie.split(";");
      i = 0;
      while (i < ca.length) {
        c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
        i++;
      }
      return null;
    };

    ThemeUtils.prototype.eraseCookie = function(name) {
      return window.createCookie(name, "", -1);
    };

    function ThemeUtils() {
      this.updateDisplayedTheme();
      this.syncCustomThemesWithJSON();
    }

    ThemeUtils.prototype.getThemeUrl = function() {
      var current_theme, ref, themeUrl;
      current_theme = this.readCookie("current_theme") || "Standard - Default";
      this.custom_themes = JSON.parse(this.readCookie("custom_themes")) || null;
      return themeUrl = ((ref = this.custom_themes) != null ? ref[current_theme] : void 0) ? this.custom_themes[current_theme] : window.base.THEME_PATHS[current_theme];
    };

    ThemeUtils.prototype.updateDisplayedTheme = function() {
      var themeUrl;
      themeUrl = this.getThemeUrl();
      return document.write("<link rel='stylesheet' type='text/css' media='screen' href='" + themeUrl + "' id='current-theme'>");
    };

    ThemeUtils.prototype.cssLoaded = function() {
      $("#current-theme").remove();
      $('#theme-picker button').attr('disabled', false).removeClass('adb-is-loading');
      $('#theme-picker button').find('.adb-loading').remove();
      return $("#new-theme").attr('id', 'current-theme');
    };

    ThemeUtils.prototype.addCustomThemeToJSON = function(name, href) {
      return this.custom_themes[name] = href;
    };

    ThemeUtils.prototype.addCustomThemeToCookie = function(name, href) {
      var custom_themes;
      custom_themes = JSON.parse(this.readCookie('custom_themes')) || {};
      this.custom_themes[name] = href;
      return this.createCookie('custom_themes', JSON.stringify(custom_themes));
    };

    ThemeUtils.prototype.syncCustomThemesWithJSON = function() {
      var href, name, ref, results;
      ref = JSON.parse(this.readCookie('custom_themes'));
      results = [];
      for (name in ref) {
        href = ref[name];
        results.push(this.addCustomThemeToJSON(name, href));
      }
      return results;
    };

    ThemeUtils.prototype.hidePersistButtons = function() {
      if (window.location.href.indexOf('modify_theme') === -1) {
        return document.getElementsByClassName('persist-buttons')[0].style.display = 'none';
      }
    };

    return ThemeUtils;

  })();

  window.base.themeUtils = new ThemeUtils;

}).call(this);
