if (typeof jQuery == 'undefined') {
	// http://www.hunlock.com/blogs/Howto_Dynamically_Insert_Javascript_And_CSS
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
	id = id[2];
	
	var json = window.OverDrive.mediaItems[id];
	console.log(json);
	
	var img = json.covers.cover150Wide.href;
	var title = json.title;
	var author = json.firstCreatorName;
	var description = json.description;
	var format = String(jQuery('.TitleDetailsHeading-formatBadge:eq(0)').text());
	format = format.trim();
	
	
	var html = '<a href="' + url + '"><img src="' + img + '" alt="Overdrive cover" class="alignleft" /></a> <a href="' + url + '">' + title + "</a>, " + author + ' (' + format + ')<br />"' + description + '" (Overdrive description)';
	prompt('ctrl+a ctrl+c to copy and paste', html);

}