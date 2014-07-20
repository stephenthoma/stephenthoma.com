$(document).ready(function() {
    var $head = $('.header');
    animClassDown = $head.data('animateDown');
    animClassUp = $head.data('animateUp' );
    if( $('.gravatar').css('display') !== 'none') {
        $('.story').waypoint( function( direction ) {
            if( direction === 'down' && animClassDown ) {
                $head.attr('class', 'header ' + animClassDown);
            }
            else if( direction === 'up' && animClassUp ){
                $head.attr('class', 'header ' + animClassUp);
            }
        }, { offset: '10%' });
    } else {
        $head.attr('class', 'header ' + animClassDown);
    }
});