$( document ).ready(function() {
    
    //var scrollPercentage = 100 * $(this).scrollTop() / ($( window ).height() - $(this).height());
    
    var Percent = 100 - Math.round( $( window ).scrollTop() * 100 / ( $( document ).height() - $( window ).height() ) );
	
	$( '.background' ).css('background-position', '100% ' + Percent + '%');
    
    $(window).on('scroll', function() {
    
    	//console.log( Math.round( $( window ).scrollTop() / 100 ) );
    	var Percent = 100 - Math.round( $( window ).scrollTop() * 100 / ( $( document ).height() - $( window ).height() ) );
    	console.log( Percent );
    	
    	$( '.background' ).css('background-position', '100% ' + Percent + '%');
    
    });
 
 });