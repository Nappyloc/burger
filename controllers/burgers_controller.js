// var burgers = require("../models/burger")
var express = require( "express" );
var burgers = require( "../models/burger" )
var router = express.Router();


// Router function to get all burgers to return to the SOM
router.get( '/', function ( req, res )
{
    // Call the all ORM funtion
    burgers.all( function ( burgers_info )
    {
        console.log( burgers_info )
        // Render the Index page with all of the burger info
        res.render( 'index', { burgers_info } )
    } )

} )



// Router function to update a burger by id 
router.put( '/api/burgers/:id', function ( req, res )
{
    // save the burger id to a variable to pass
    var condition = req.params.id
    // Call the the eat ORM function and pass the burger ID number
    burgers.eat( condition, function ( results )
    {
        // If a row was not updated in the table
        if ( results.changedRows == 0 )
        {
            // throw an error becuase no rows were changed
            return res.status( 404 ).end();
        } else
        {
            // if a row was changed we good
            res.status( 200 ).end();
        }


    } )
} )



// Router function to create a new burger where we pass the new burger name
router.post( '/api/burgers/:name', function ( req, res )
{
    // save the burger name as a variable to pass to the database
    var condition = req.params.name
    // Call the ORM function to add a burger
    burgers.add( condition, function ( results )
{
        console.log( " Post Results", results )
        // if a row was not created/affedted 
        if ( results.affectedRows == 0 )
        {
            // throw an error
            return res.status( 404 ).end();
        } else
        {
            // if row was created we good
            res.status( 200 ).end();
        }
    } )
} )















module.exports = router;