var searchItems = ["Batman", "Superman", "Brainiac", "Thanos", "Yoda", "Darth Vader"];

$( document ).ready( function( )
{
    function ToggleSearch( event )
    {
        event.preventDefault( );
        
        $( "#DefaultNavBar" ).toggle( );
        $( "#SearchNavBar" ).toggle( );
        
        $( "#SearchItemsContainer" ).toggle( );
    }
    
    $( "#SearchButton" ).click( function( event )
    {
        ToggleSearch( event );
    } );
    
    $( "#CloseSearchButton" ).click( function( event )
    {
        ToggleSearch( event );
    } );
    
    $( "#SearchBar" ).keyup( function( ) {        
        $( "#SearchItems" ).empty( );
        
        for ( var i = 0; i < searchItems.length; i++ )
        {
            if ( searchItems[i].toLowerCase( ).includes( $( "#SearchBar" ).val( ).toLowerCase( ).trim( ) )
               && $( "#SearchBar" ).val( ).trim( ).length > 0 )
            {
                $( "#SearchItems" ).append( "<p>" + searchItems[i] + "</p>" );
            }
        }
    } );
} );