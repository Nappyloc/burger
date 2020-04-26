// var burgers = require("../models/burger")
var express = require( "express" );
var burger = require( "../models/burger" )
var router = express.Router();

router.get( '/', function ( req, res )
{
    burger.all( function ( burgers_info )
    {
        console.log( burgers_info )
        res.render( 'index', { burgers_info } )
    } )

} )















module.exports = router;