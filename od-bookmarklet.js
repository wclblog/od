if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=runthis;
	jQ.src = '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	callback();
}

function callback() {

	var url = location.href;
	var id = location.pathname;
	id = id.split('/');
	var arrLength = id.length;
	arrLength = arrLength - 1;
	id = id[arrLength];

	var json = window.OverDrive.mediaItems[id];

	var img = json.covers.cover150Wide.href;
	var title = json.title;
	var author = json.firstCreatorName;
	var description = json.description;
	var format = String(jQuery('.TitleDetailsHeading-formatBadge:eq(0)').text());
	format = format.trim();


	var html = '<a href="' + url + '"><img src="' + img + '" alt="Overdrive cover" class="alignleft" /></a> <a href="' + url + '">' + title + "</a>, " + author + ' (' + format + ')' + description + '<p>(Overdrive description)<\/p>';
	prompt('ctrl+a ctrl+c to copy and paste', html);

}
