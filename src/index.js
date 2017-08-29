import Hapi from 'hapi';
import nunjucks from 'nunjucks';
import Application from './lib';
import Controller from './lib/controller';

nunjucks.configure('./dist');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

const application = new Application({
  '/': Controller
}, {
  server: server
})

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
  let name = {
    fname: 'Rick',
    lname: 'Sanchez'
  }

  let nameParts = request.params.name ? request.params.name.split('/') : [];

  name.fname = (nameParts[0] || request.query.fname) || name.fname;
  name.lname = (nameParts[1] || request.query.lname) || name.lname;

  return name;
}
