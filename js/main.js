/*
 * Create by : Mohamed Masoud
 */
require([
  'controllers/appcontroller',
  'services/mapLayers',
  'config/Appconfig',
  'dojo/domReady!'
], function (appCtrl, mapLayers,Appconfig) {


    console.debug('starting my application');
  //call appcontroller init function
  appCtrl.init(
      {
     //set dom element
          elem: 'map-div',
    // set map option from configurations
          mapOptions: Appconfig.mapOptions,
    //call map layers to load the services 
    layers: mapLayers.loadServices()
  });

});
