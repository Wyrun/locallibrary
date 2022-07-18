var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, minLength:1, maxLength: 100}
  }
);

GenreSchema.virtual('url').get(function(){
  return 'catalogue/genre/' + this.name;
});

module.exports = mongoose.model('Genre', GenreSchema);
