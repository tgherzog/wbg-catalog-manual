
$(document).ready(function() {
  return; // disable
  $('#page-content h1').each(function() {
	var id = $(this).attr('id');
	var t  = $(this).text();
	if( ! t ) return;

	if( ! id ) {
	  id = t.replace(/\s/, '-').toLowerCase();
	  $(this).attr('id', id);
	}

	var $li = $('<li/>').append( $('<a/>').text(t).attr('href', '#' + id) );
	$('#navmenu').append($li);
  });

  $('#navmenu li').first().addClass('first');
  $('#navmenu li').last().addClass('last');
});

$(document).ready(function() {
  $('#showall').click(function() {
    $('.todo').toggleClass('showall');
  });
});
