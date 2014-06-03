function isTouchDevice() {
    return "ontouchstart" in window;
}

$(function (){
    // Can't use :hover _and_ active toggle, touch device complains.
    // -> go all JS.
    var ev = isTouchDevice() ? 'touchstart' : 'mouseenter';
    var t;
    $('.branding .logos').bind(ev, function(e) {
        $('.branding .copy').show();
        clearTimeout(t);
        t = setTimeout(function() {
            $('.branding .copy').fadeOut();
        }, 3000);
    });
    var nav = $('.nav-wrapper');
    if (!nav || !nav.length) return;
    var top = nav.offset().top - parseFloat(nav.css('marginTop').replace(/auto/, 0));
    $(window).scroll(function (e) {
        if (isTouchDevice()) {
            var topHeight = $(this).scrollTop();
            nav.css('top', topHeight);
        } 
        if ($(window).width() > 920) {
                var y = $(this).scrollTop();
                if (y >= top) {
                    nav.addClass('fixed');
                } else {
                    nav.removeClass('fixed');
                }
        }
    });

    $(window).bind( 'load resize', function () {
        $('body > .navigation').scrollSpy();
    });

    $('a.nav-toggle').click(function(e) {
        e.preventDefault();
        if ($('a.nav-toggle').hasClass('active')) {
            $('a.nav-toggle, .navigation').removeClass('active');
        } else {
            $('a.nav-toggle, .navigation').addClass('active');
        }
    });
});

$(document).ready(function() {
  var n = 0;
  $('div.content h1').each(function() {
	var id = $(this).attr('id');
	var t  = $(this).text();
	if( ! t ) return;

	if( ! id ) {
	  id = t.replace(/\s/, '-').toLowerCase();
	  $(this).attr('id', id);
	}

	var $li = $('<li/>').append( $('<a/>').text(t).attr('href', '#' + id) );
	$('ul.main-toc').append($li);
  });

  $('ul.main-toc li').first().addClass('first active');
  $('ul.main-toc li').last().addClass('last');
});
