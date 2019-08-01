define([
  'esri/layers/FeatureLayer', 
  'esri/renderers/ClassBreaksRenderer',
  'services/mapSymbology',
  'config/Appconfig'
 
], function(FeatureLayer,ClassBreaksRenderer,mapSymbology,Appconfig) {

  function loadServices(config) {

    var layers = [];

    var renderer = new ClassBreaksRenderer(mapSymbology.firstRank(), Appconfig.classRenderAttribute);
    renderer.addBreak(-Infinity,  1   , mapSymbology.firstRank());
    renderer.addBreak(1, 4, mapSymbology.secondRank());
    renderer.addBreak(5, Infinity, mapSymbology.thirdRank());
   
  
    var world_Cities_Pop = new FeatureLayer(Appconfig.operationLayerUrl,
    {
      mode: FeatureLayer.MODE_SNAPSHOT,
      opacity: Appconfig.operationLayeropacity
    });
    world_Cities_Pop.setRenderer(renderer);
    layers.push(world_Cities_Pop);

    return layers;
  }

  return {
    loadServices: loadServices
  };

});
