const mongoose = require ("mongoose");



const schema=mongoose.Schema ;



const { Schema } = mongoose;

const userSchema = new Schema({
  name : String,
  email : {type:String ,unique : true},
  isadmin:{type :Boolean, default : false},
});


const User = mongoose.model('user', userSchema);

module.exports = User;
