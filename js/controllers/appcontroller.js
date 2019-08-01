define([
  'controllers/mapcontroller',
  //  'widgets/edit/editTools',
   'widgets/CoordintateWidget/CoordController',
   'widgets/WeaetherWidget/WeatherWidgetController'
], function (MapController,/* EditTools,*/CoordintateWidget,WeaetherWidget) {

  function mapLoaded(map) {
    console.debug('map has been loaded', map);
    //  var editTools = new EditTools({
    //    map: map
    //  }, 'map-tools');
    console.debug("Create coordinates Widget");
    var m_CoordintateWidget = new CoordintateWidget({
      map:map,
      somedata: 'datafrom the controller'
    },"corrdinates");
    console.debug("coordinates Widget Created");
    
    console.debug("Create Weather  Widget");
    var m_WeaetherWidget = new WeaetherWidget({
       map:map,
      somedata: 'datafrom the controller'
    },"WeatherContainer");
    console.debug(" Weather Widget Created");
  }

  function init(config) {
   
    var mapCtrl = new MapController(config);

    mapCtrl.load().then(mapLoaded);
  }

  return {
    init: init
  };

});
