export default Controller {

  constructor(context) {
    this.context = context;
  }

  index(application, request, reply, callback) {
    callback(null);
  }

  toString(callback) {
    callback(null, 'Success');
  }
}
