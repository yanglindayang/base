(function() {
  var ThemePicker;

  ThemePicker = (function() {
    function ThemePicker() {
      var attributes_array;
      this.$theme_picker = $('#theme-picker');
      this.button = this.$theme_picker.find('button');
      this.$theme_list = $('#theme-list');
      this.attributes = {};
      attributes_array = [];
      this.bindEvents();
      this.setupThemeList();
      this.monitorThemeChanges();
    }

    ThemePicker.prototype.bindEvents = function() {
      this.$compile = this.$theme_picker.find('.compile');
      this.$compile_spinner = this.$compile.find('.spinner-small');
      this.$save = this.$theme_picker.find('.save');
      this.$save_spinner = this.$save.find('.spinner-small');
      this.$compile_spinner.add(this.$save_spinner).addClass('hidden');
      this.$compile.addClass('icon-refresh');
      this.$save.addClass('icon-star');
      this.$compile.on('click', (function(_this) {
        return function(e) {
          _this.$compile.toggleClass('icon-refresh');
          _this.$compile_spinner.toggleClass('hidden');
          return $.post("http://adlivesass.herokuapp.com/compile-sass", "sass=" + encodeURIComponent(attributes_array.join(' ')), function(data) {
            _this.setNewTheme("Custom", data);
            _this.$compile.toggleClass('icon-refresh');
            return _this.$compile_spinner.toggleClass('hidden');
          });
        };
      })(this));
      return this.$save.on('click', (function(_this) {
        return function(e) {
          _this.$save.toggleClass('icon-star');
          _this.$save_spinner.toggleClass('hidden');
          return $.post("http://adlivesass.herokuapp.com/compile-sass", "sass=" + encodeURIComponent(attributes_array.join(' ')), function(data) {
            var theme_name;
            theme_name = new Date().toGMTString();
            window.base.themeUtils.addCustomThemeToCookie(theme_name, data);
            window.base.themeUtils.syncCustomThemesWithJSON();
            _this.setupThemeList();
            $('li[data-theme="' + theme_name + '"]').click();
            _this.$save.toggleClass('icon-star');
            return _this.$save_spinner.toggleClass('hidden');
          });
        };
      })(this));
    };

    ThemePicker.prototype.setupThemeList = function() {
      var _this, active_item, item_url, li, name, results;
      this.$theme_list.html('');
      this.theme_paths = window.base.THEME_PATHS;
      this.current_theme_url = window.base.themeUtils.getThemeUrl();
      _this = this;
      results = [];
      for (name in this.theme_paths) {
        item_url = _this.theme_paths[name];
        active_item = _this.isActiveMenuItem(item_url);
        li = $("<li " + (active_item ? 'class=\"adb-is-active adb-stack--item\"' : 'class=adb-stack--item') + "  data-theme-name='" + name + "' data-theme-url='" + item_url + "'><a class='adb-link__option adb-stack--item_content'>" + name + "</a></li>");
        li.on('click', function(e) {
          var $body, $this, theme_name, theme_url;
          $this = $(this);
          $this.addClass('active').siblings().removeClass('active');
          $('#theme-picker button').attr('disabled', true).addClass('adb-is-loading');
          $('#theme-picker button').append('<span class="adb-loading"><span class="adb-loading--text">...</span></span>');
          theme_name = $this.data('theme-name');
          theme_url = $this.data('theme-url');
          $body = $('body').data('theme', theme_name);
          $(document.documentElement).addClass('theme-transitions-enabled');
          return _this.setNewTheme(theme_name, theme_url);
        });
        results.push(this.$theme_list.append(li));
      }
      return results;
    };

    ThemePicker.prototype.isActiveMenuItem = function(item_url) {
      return item_url === this.current_theme_url;
    };

    ThemePicker.prototype.setNewTheme = function(name, href) {
      window.base.themeUtils.createCookie("current_theme", name);
      return $('#current-theme').after(this.styleLink(href));
    };

    ThemePicker.prototype.styleLink = function(href) {
      return $("<link>").attr('rel', 'stylesheet').attr('type', 'text/css').attr('media', 'screen').attr('href', href).attr('id', 'new-theme').attr('onLoad', 'window.base.themeUtils.cssLoaded()');
    };

    ThemePicker.prototype.monitorThemeChanges = function() {
      var $fields;
      return $fields = $('[name*="$"]').on('change', (function(_this) {
        return function(e) {
          var attributes_array, name, ref, results, value;
          $fields.each(function() {
            var $field;
            $field = $(e.target);
            if ($field.val()) {
              return _this.attributes[$field.attr('name')] = $field.val();
            }
          });
          attributes_array = [];
          ref = _this.attributes;
          results = [];
          for (name in ref) {
            value = ref[name];
            results.push(attributes_array.push(name + ": " + value + ";"));
          }
          return results;
        };
      })(this));
    };

    ThemePicker.prototype.sendThemeSettings = function() {
      return $.post("http://adlivesass.herokuapp.com/compile-sass", "sass=" + encodeURIComponent(attributes_array.join(' ')), (function(_this) {
        return function(data) {
          return data;
        };
      })(this));
    };

    return ThemePicker;

  })();

  $(function() {
    return window.base.themePicker = new ThemePicker;
  });

}).call(this);
