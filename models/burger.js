// require ORM functions
var orm = require( '../config/orm' )

// create the burger model to use with the controller
var burgers = {
    all: function ( cb )
    {
        orm.all( 'burgers', function ( res )
        {
            cb( res )
        } )
    },

    eat: function ( id, cb )
    {
        orm.eat( "burgers", id, cb );
    },

    add: function ( name, cb )
    {
        orm.add( "burgers", name, cb );
    }

}


module.exports = burgers;