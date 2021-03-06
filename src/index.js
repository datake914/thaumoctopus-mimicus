import Application from './lib';
import HelloController from './hello-controller';
import nunjucks from 'nunjucks';
import options from './options';

nunjucks.configure(options.nunjucks);

const application = new Application({
  '/{name*}': HelloController
}, options);

application.start();
