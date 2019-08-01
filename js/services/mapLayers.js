/*
 * Create by : Mohamed Masoud
 */
define([
  'esri/layers/FeatureLayer', 
  'esri/renderers/ClassBreaksRenderer',
  'services/mapSymbology',
  'config/Appconfig'
 
], function(FeatureLayer,ClassBreaksRenderer,mapSymbology,Appconfig) {

  function loadServices(config) {

    var layers = [];
     //create render class 
      var renderer = new ClassBreaksRenderer(mapSymbology.firstRank(), Appconfig.classRenderAttribute);

      renderer.addBreak(-Infinity,  1   , mapSymbology.firstRank());
      renderer.addBreak(1, 4, mapSymbology.secondRank());
      renderer.addBreak(5, Infinity, mapSymbology.thirdRank());
   
    //create operation layer
    var world_Cities_Pop = new FeatureLayer(Appconfig.operationLayerUrl,
    {
       mode: FeatureLayer.MODE_SNAPSHOT,
       //set opacity from config file
      opacity: Appconfig.operationLayeropacity
          });
      //set render
      world_Cities_Pop.setRenderer(renderer);
      //add to layers array
    layers.push(world_Cities_Pop);

    return layers;
  }

  return {
    loadServices: loadServices
  };

});
