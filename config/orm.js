// Import MySQL connection.
var connection = require( "../config/connection.js" );

// SQL Statement Object
var orm = {
    // Return all tables from the database
    all: function ( table, cb )
    {
        // query string to select all from the passed table
        var query = "SELECT * FROM " + table + ";"
        connection.query( query, function ( err, res )
        {
            if ( err ) throw err;
            cb( res )
        } )
    },



    eat: function ( table, condition, cb )
    {
        var query = "UPDATE " + table + " SET devoured=true WHERE id= " + condition + ";"
        console.log( query )
        connection.query( query, function ( err, result )
        {
            if ( err ) throw err;
            cb( result )
        } )
    },


    add: function ( table, condition, cb )
    {
        var query = 'INSERT INTO ' + table + ' (burger_name) VALUES ("' + condition + '");'
        console.log( query )
        connection.query( query, function ( err, result )
        {
            if ( err ) throw err;
            cb( result )
        } )
    }
}


module.exports = orm;
