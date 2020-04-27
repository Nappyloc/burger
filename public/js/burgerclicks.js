$( function ()
{
    // Click function for eat burger
    $( "#eat" ).on( "click", function ()
    {
        var id = $( this ).data( 'id' )


        // Send the Put Request
        $.ajax( "/api/burgers/" + id, {
            type: "PUT"

        } ).then(
            function ()
            {
                console.log( "updated devoured" );
                location.reload();
            } )

    } )




    // Click function for sumbit burger
    $( "#submit" ).on( "click", function ( event )
    {
        // prevent page refresh
        event.preventDefault();

        var newBurger = $( "#burgerName" ).val()


        // send the POST request
        $.ajax( "/api/burgers/" + newBurger, {
            type: "POST"
        } ).then(
            function ()
            {
                console.log( "created a new burger" )
                location.reload();
            }
        )

    } )




} )