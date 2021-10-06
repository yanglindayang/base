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
