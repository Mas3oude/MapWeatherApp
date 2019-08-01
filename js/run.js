/*
 * Create by : Mohamed Masoud
 */
//configure the applicatio
(function () {
  'use strict';

  var pathRX = new RegExp(/\/[^\/]+$/)
    , locationPath = location.pathname.replace(pathRX, '');
    console.debug('app path : ',locationPath);
  require({
    async: true,
    aliases: [
      ['text', 'dojo/text']
    ],
    packages: [{
      name: 'controllers',
      location: locationPath + 'js/controllers'
    }, {
      name: 'services',
      location: locationPath + 'js/services'
    }, {
      name: 'utils',
      location: locationPath + 'js/utils'
    }, {
      name: 'widgets',
      location: locationPath + 'js/widgets'
    },{
      name: 'config',
      location: locationPath + 'js/configurations'
    },
     {
      name: 'app',
      location: locationPath + 'js'
    }]
  }, ['app']);

})();
