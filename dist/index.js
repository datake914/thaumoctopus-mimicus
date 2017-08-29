'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

var _controller = require('./lib/controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nunjucks2.default.configure('./dist');

var server = new _hapi2.default.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

var application = new _lib2.default({
  '/': _controller2.default
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

function getName(request) {
  var name = {
    fname: 'Rick',
    lname: 'Sanchez'
  };

  var nameParts = request.params.name ? request.params.name.split('/') : [];

  name.fname = nameParts[0] || request.query.fname || name.fname;
  name.lname = nameParts[1] || request.query.lname || name.lname;

  return name;
}