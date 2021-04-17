const express=require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    // var authorss=[
    //     {
    //         title:'Joseph Barbera',
    //         year:'1911-2006',
    //         works:'',
    //         img:'jBarbera.jpg'
    //     },
    //     {
    //         title:'J.K.Rowling',
    //         year:'1965-Present',
    //         works:'',
    //         img:'JKRowling.jpg'
    //     },
    //     {
    //         title:'Rachel Caine',
    //         description:'1962-2020',
    //         works:'',
    //         img:'RachelCaine.jpg'
    //     }
    // ]

    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){

            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        });
    });



    authorsRouter.get('/:id',function(req,res){
        var id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        });
    });
    return authorsRouter;
}

module.exports=router;