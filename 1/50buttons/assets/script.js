$(document).ready(function(){
	
	$('#button-3').hover(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '30pt',
			borderWidth: '10px'
		}, 1000 );
	});

});

function is_touch_device() {
  return !!('ontouchstart' in window) 
      || !!('onmsgesturechange' in window); 
};

$(document).ready(function() {
  if (is_touch_device()) {
    $('span').unbind('mousenter mouseleave touchend touchstart');
    $('span').bind('touchstart', function() {
      $('span').removeClass('hover');
      $(this).addClass('hover');
    });
  }
});

  	$( document ).ready(function() {
		$('#button-10').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

	$( document ).ready(function() {
		$('#button-12').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

	$( document ).ready(function() {
		$('#button-14').hover(function() {
		    $(this).addClass('on-hover');
		});
	});
	$( document ).ready(function() {
		$('#button-16').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

	$( document ).ready(function() {
		$('#button-18').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

  	$( document ).ready(function() {
		$('#button-46').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

  	$( document ).ready(function() {
		$('#button-47').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

  	$( document ).ready(function() {
		$('#button-48').hover(function() {
		    $(this).addClass('on-hover');
		});
	});

  	$( document ).ready(function() {
		$('#button-49').hover(function() {
		    $(this).addClass('on-hover');
		});
	});