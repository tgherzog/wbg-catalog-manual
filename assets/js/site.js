
$(document).ready(function() {
  var n = 0;
  $('#page-content h1').each(function() {
	var id = $(this).attr('id');
	var t  = $(this).text();
	if( ! t ) return;

	if( ! id ) {
	  id = t.replace(/\s/, '-').toLowerCase();
	  $(this).attr('id', id);
	}

	var $li = $('<li/>').append( $('<a/>').text(t).attr('href', '#' + id) );
	$('ul.nav').append($li);
  });

  $('ul.main-toc li').first().addClass('first');
  $('ul.main-toc li').last().addClass('last');
});
