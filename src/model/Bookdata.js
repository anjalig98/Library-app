//Accessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://user1:user1@ictakmeanstack.tj9rf.mongodb.net/libraryapp?retryWrites=true&w=majority');

//Schema Definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    authore: String,
    genre: String,
    img: String
});

//Model Creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;