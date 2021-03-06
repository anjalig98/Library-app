const express=require('express');
const booksRouter = express.Router();
function router(nav){
    var books=[
        {
            title:'Tom and Jerry',
            author:'Joseph Barbera',
            genre:'cartoon',
            img:'tom.jpg'
        },
        {
            title:'Harry Potter',
            author:'J.K.Rowling',
            genre:'Fantasy',
            img:'harrypotter.jpg'
        },
        {
            title:'Ink and Bone',
            author:'Rachel Caine',
            genre:'Fantasy',
            img:'download.jpg'
        }
    ]

    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title:'Library',
            books
        });
    });



    booksRouter.get('/:id',function(req,res){
        var id=req.params.id;
        res.render('book',{
            nav,
            title:'Library',
            book : books[id]
        });
    });
    return booksRouter;
}

module.exports=router;