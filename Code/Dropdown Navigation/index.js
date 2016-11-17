var dropdownMenuID = $( "#DropdownMenu" );

$( document ).ready( function( )
{
    $( "#DropdownButton" ).click( function( )
    {
        if ( dropdownMenuID.width( ) > 992 )
        {
            if ( "none" == dropdownMenuID.css( "display" ) )
            {
                dropdownMenuID.show( );
            }
            else
            {
                dropdownMenuID.hide( );
            }
        }
    } );
} );

$( document ).mouseup( function ( event )
{
    if ( !dropdownMenuID.is( event.target )
        && 0 === dropdownMenuID.has( event.target  ).length
        && "DropdownButton" != event.target.id
        && dropdownMenuID.width( ) > 992 )
    {
        dropdownMenuID.hide();
    }
} );