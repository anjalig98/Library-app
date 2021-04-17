const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@ictakmeanstack.tj9rf.mongodb.net/libraryapp?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
 const SignupSchema = new Schema({
    email: String,
    pass: String,
    confirmpass: String

 });
 var Signupdata =  mongoose.model('Signupdata',SignupSchema);
 module.exports = Signupdata;