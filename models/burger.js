var orm = require( '../config/orm' )

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