export default class Controller {

  constructor(context) {
    this.context = context;
  }

  index(application, request, reply, callback) {
    callback(null);
  }

  toString(callback) {
    callback(null, 'Success');
  }

  render(target, callback) {
    this.toString(function(err, body) {
      if (err) {
        return callback(err, null);
      }
      ducument.querySelector(target).innerHTML = body;
      callback(null, body);
    });
  }
}
