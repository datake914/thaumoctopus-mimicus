'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

var _helloController = require('./hello-controller');

var _helloController2 = _interopRequireDefault(_helloController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure('./dist');

var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

var application = new _lib2.default({
  '/hello/{name*}': _helloController2.default
}, {
  server: server
});

application.start();

// server.route({
//   method: 'GET',
//   path: '/hello/{name*}',
//   handler: function(request, reply) {
//     nunjucks.render('index.html', getName(request), function(err, html) {
//       reply(html);
//     });
//   }
// });
//
// server.start();