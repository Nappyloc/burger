$( function ()
{
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

} )