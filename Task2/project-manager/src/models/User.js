const { model, models, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Date,
});

const User = models.User || model('User', userSchema);

module.exports = { User };
