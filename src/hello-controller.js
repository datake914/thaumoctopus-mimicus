import Controller from './lib/controller';
import nunjucks from 'nunjucks';

nunjucks.configure('./dist');

export default class HelloController extends Controller {
  toString(callback) {
    nunjucks.render('index.html', getName(this.context), (err, html) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, html);
    });
  }
}

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
