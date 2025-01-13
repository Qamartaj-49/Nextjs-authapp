import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema({
     username: {
        type: string,
        required: [true, "Please provide a Username"],
        unique : true,
     },
     email: {
      type: string,
      required: [true, "Please provide a Emailid"],
      unique : true,
   },

   password:{
    type: string,
    required: [true, "Please provide a password"],
   },

   isverified:{
      type: Boolean,
      default: false,
   },

   isAdminc:{
     type: Boolean,
     default: false,
   },

    

})

const User = mongoose.models.users || mongoose.model("users", userSchema);
