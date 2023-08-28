const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = require('../../config/vars');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },

  password: {
    type: String,
    required:true,

    },

});

UserSchema.pre('save',  async function save (next){
  try{
    let password = this.password;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    this.password=hash;
 
  }
  catch(error){
    console.log(error);
  }


});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};


module.exports = mongoose.model("user", UserSchema);
