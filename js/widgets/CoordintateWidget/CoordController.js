/*Mohamed Masoud*/
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    
    // Dijit 
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    // dom 
    'dojo/dom-class',
    // template
    'text!widgets/CoordintateWidget/CoordintateWidgetTemplate.html',
    //GeometryService
    'esri/geometry/webMercatorUtils',
    'esri/geometry/coordinateFormatter',
    'esri/geometry/Point',
    //UI 
    "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/TitlePane",
    "dojo/domReady!"
  ], function(declare, lang, on, _WidgetBase,
     _TemplatedMixin, domClass, template,
     webMercatorUtils, coordinateFormatter,Point,
     BorderContainer,ContentPane,TitlePane) {
  
    return declare([_WidgetBase, _TemplatedMixin], {
      declaredClass: 'widgets.CoordintateWidget.CoordController',
      templateString: template,
  
      editing: false,
      latitude:"0",
      longitude:0,

      // lifecycle 1
      constructor: function(options, srcRefNode) {
        this.inherited(arguments);
  
        // mix in settings and defaults
        this.options = options || {};
        this.map = options.map;
  
        // widget node
        this.domNode = srcRefNode;
        coordinateFormatter.load();
      },
  
      postCreate: function() {
        
        console.debug('CoordintateWidget Options are : ', this.options);
        this.map.on('click',lang.hitch(this,this.GetLatLongByMapPoint));
      },
  

      GetLatLongByMapPoint: function (evt) {
        if (this.map.spatialReference.wkid === '102100')
        {
        var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
        //i also can use this function to conver the X,y to Lat and Lang
        //but because there is another function convert to Geographic which WGS84 
        //var latLongValue = esri.geometry.xyToLngLat(evt.mapPoint.x, evt.mapPoint.y);
        if (coordinateFormatter.isLoaded())
         {
          var currentPoint = new Point(mp.x,mp.y,mp.spatialReference);
          console.debug("Coordinates : ",currentPoint.x,currentPoint.y,currentPoint.spatialReference);
          var resutlts = coordinateFormatter.toLatitudeLongitude(currentPoint,"ddm", 3);
          console.debug(resutlts);
          // coordinateFormatter.load().then(lang.hitch(this,this.GetAndDisplayResults(mp)))
         }
        }
        else{
          coordinateFormatter.load().then(lang.hitch(this,this.GetAndDisplayResults(evt.mapPoint)))
        }
       },
       GetAndDisplayResults:function(mp)
       {
                
       },
      // start widget
      startup: function() {
        this._init();
      },
  
      // cleanup
      destroy: function() {
        // default destroy
        this.inherited(arguments);
      },
  
      // public methods
  
      // widget methods
      _addRequest: function() {
        // console.debug('editTools#_addRequest: start or stop adding a request.');
        // this.editing = !this.editing;
        // this._toggleEditButton();
      },
  
      // private functions
      _init: function() {
      },
  
      _toggleEditButton: function() {
        if(this.editing) {
          this.editNode.innerHTML = 'Adding Request';
        } else {
          this.editNode.innerHTML = 'Add Request';
        }
        domClass.toggle(this.editNode, 'btn-primary');
        domClass.toggle(this.editNode, 'btn-success');
      }
  
    });
  
  });
  