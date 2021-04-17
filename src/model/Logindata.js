const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@ictakmeanstack.tj9rf.mongodb.net/libraryapp?retryWrites=true&w=majority');

const Schema = mongoose.Schema;
const LoginSchema = new Schema({

    email: String,
    pass: String


});
var Logindata = mongoose.model('Logindata',LoginSchema);
module.exports = Logindata;