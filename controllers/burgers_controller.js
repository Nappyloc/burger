// var burgers = require("../models/burger")
var express = require( "express" );
var burgers = require( "../models/burger" )
var router = express.Router();

router.get( '/', function ( req, res )
{
    burgers.all( function ( burgers_info )
    {
        console.log( burgers_info )
        res.render( 'index', { burgers_info } )
    } )

} )

router.put( '/api/burgers/:id', function ( req, res )
{
    var condition = req.params.id
    burgers.eat( condition, function ( results )
    {
        // console.log( res );
        if ( results.changedRows == 0 )
        {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status( 404 ).end();
        } else
        {
            res.status( 200 ).end();
        }


    } )
} )















module.exports = router;