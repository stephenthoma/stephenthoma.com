var header_resize = function() {
  var $head = $('.header');
  animClassDown = $head.data('animateDown');
  animClassUp = $head.data('animateUp' );
  if( $('body').css('bottom') == '0px') {

    $head.attr('class', 'header ' + animClassUp);

    $('.story').waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        mixpanel.track("Scrolled");
        $head.attr('class', 'header ' + animClassDown);
      }
      else if( direction === 'up' && animClassUp ){
        $head.attr('class', 'header ' + animClassUp);
      }
    }, { offset: '10%' });
  }
  else {
    $head.attr('class', 'header ' + animClassDown);
    $('.story').waypoint('destroy');
  }
};

$(document).ready(function() { header_resize(); });
$(window).resize(function() { header_resize(); });

