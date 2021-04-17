//Accessing mongoose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://user1:user1@ictakmeanstack.tj9rf.mongodb.net/libraryapp?retryWrites=true&w=majority');

//Schema Definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title: String,
    year: String,
    works: String,
    img: String
});

//Model Creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports =Authordata;