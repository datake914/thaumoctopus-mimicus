import Hapi from 'hapi';
import nunjucks from 'nunjucks';
import Application from './lib';
import HelloController from './hello-controller';

nunjucks.configure('./dist');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

const application = new Application({
  '/hello/{name*}': HelloController
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
