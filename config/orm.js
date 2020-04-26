// Import MySQL connection.
var connection = require( "../config/connection.js" );

// Data Object
var orm = {
    all: function ( tableInput, cb )
    {
        connection.query( "SELECT * FROM " + tableInput + ";", function ( err, res )
        {
            if ( err ) throw err;
            cb( res )
        } )
    }
}


module.exports = orm;
