// Import MySQL connection.
var connection = require( "../config/connection.js" );

// SQL Statement Object
var orm = {
    // Return all tables from the database
    all: function ( table, cb )
    {
        // query string to select all from the passed table
        var query = "SELECT * FROM " + table + ";"
        // Connect to the database to start the query
        connection.query( query, function ( err, res )
        {
            // Throw an error if it doesn't connect
            if ( err ) throw err;
            // else return the results
            cb( res )
        } )
    },


    // Update existing burger
    eat: function ( table, condition, cb )
    {
        // Create query to update the selected burger to devoured
        var query = "UPDATE " + table + " SET devoured=true WHERE id= " + condition + ";"
        console.log( query )
        // Conenct to the database to start the query
        connection.query( query, function ( err, result )
        {
            // Throw an error if it doesn't connect
            if ( err ) throw err;
             // else return the results
            cb( result )
        } )
    },


    
    // Add a new burger to the list
    add: function ( table, condition, cb )
    {
        // Create SQL statatement to create the new line in the database
        var query = 'INSERT INTO ' + table + ' (burger_name) VALUES ("' + condition + '");'
        console.log( query )
         // Conenct to the database to create the new row
        connection.query( query, function ( err, result )
        {
            // Throw an error if it doesn't connect
            if ( err ) throw err;
             // else return the results
            cb( result )
        } )
    }
}

// Export out the ORM functions
module.exports = orm;
