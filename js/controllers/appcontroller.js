
/*
 * Create by : Mohamed Masoud
 */

define([
    'controllers/mapcontroller',
    //custom wigdets
   'widgets/CoordintateWidget/CoordController',
   'widgets/WeaetherWidget/WeatherWidgetController'
], function (MapController,CoordintateWidget,WeaetherWidget) {

  function mapLoaded(map) {
    console.debug('map has been loaded', map);
      console.debug("Create coordinates Widget");

    var m_CoordintateWidget = new CoordintateWidget({
      map:map,
      somedata: 'datafrom the controller'
      }, "corrdinates");

    console.debug("coordinates Widget Created");
    
      console.debug("Create Weather  Widget");

    var m_WeaetherWidget = new WeaetherWidget({
       map:map,
      somedata: 'datafrom the controller'
      }, "WeatherContainer");

    console.debug(" Weather Widget Created");
  }

  function init(config) {
   //create intance from map controller and 
    var mapCtrl = new MapController(config);
    //after adding the layers in the map in map controller then calling the map loaded 
    //function here to add the widgets
    mapCtrl.load().then(mapLoaded);
  }

    return {
      //good way to reutrn function instead of writing it as return {}
    init: init
  };

});
