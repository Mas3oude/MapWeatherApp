require([
  'controllers/appcontroller',
  'services/mapLayers',
  'config/Appconfig',
  'dojo/domReady!'
], function (appCtrl, mapLayers,Appconfig) {

  console.debug('starting my application');
  appCtrl.init(
    {
    elem: 'map-div',
    mapOptions: Appconfig.mapOptions,
    layers: mapLayers.loadServices()
  });

});
