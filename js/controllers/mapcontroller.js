/*
 * Create by : Mohamed Masoud
 */
define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/on',
  'dojo/Deferred',
  'esri/map'
], function (declare, lang, on, Deferred, Map) {

  return declare(null, {
    map: null,
    options: {},

      constructor: function (options) {
        //set the options
        this.options = options;
        /*
         * can be user to mix two objects
         * //lang.mixin(this.options, options);
         */
      console.debug('options?', this.options);
    },

    // public methods
      load: function () {
        //create instance of deferred
      var deferred = new Deferred();
       // resolve the promise after adding the layers to map
      var layersAdded = lang.hitch(this, function(layers) {
         deferred.resolve(this.map);
        });

        //create instance from the map
        this.map = new Map(this.options.elem, this.options.mapOptions);
        // onse the layers are added to the map the layeradded function should be called
        //to resolve the promise
        on.once(this.map, 'layers-add-result', layersAdded);
        // adding the layers to the map from the options parameters
        this.map.addLayers(this.options.layers);
        //return promise 
        return deferred.promise;
    }
  });

});
