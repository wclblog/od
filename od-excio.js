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

	function selectElementContents(el) {
		var body = document.body, range, sel;
		if (document.createRange && window.getSelection) {
			range = document.createRange();
			sel = window.getSelection();
			sel.removeAllRanges();
			try {
				range.selectNodeContents(el);
				sel.addRange(range);
			} 
			catch (e) {
				range.selectNode(el);
				sel.addRange(range);
			}
		} 
		else if (body.createTextRange) {
			range = body.createTextRange();
			range.moveToElementText(el);
			range.select();
		}
	}


	if(jQuery('#wcl-od').length > 0) {
		
		jQuery('#wcl-od').foundation('reveal', 'open');

	}
	else {

		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", "https://rawgit.com/wclblog/od/master/od-bookmarklet.css");

		document.getElementsByTagName("head")[0].appendChild(fileref);

		var pageTitle = document.title;

		var wclTable = '';

		jQuery('.js-title-collection-view .TitleCard').each(function() {

			var heading = jQuery(this).find('.title-name:eq(0)');
			
			var title = jQuery(heading).text();
			var link = 'https://wcl.overdrive.com' + jQuery(heading).find('a:eq(0)').attr('href');
			
			var author = jQuery(this).find('.title-author a:eq(0)').text();
			
			var format = jQuery(this).find('.title-format-badge:eq(0)').text();
			
			var img = jQuery(this).find('.CoverImage img:eq(0)').attr('srcset').split(',');
			img = img[0];
			img = img.replace('?quality=80&w=220&dpr=2 2x', '');
			
			//console.log(title + "\t" + author + "\t" + 'https://wcl.overdrive.com' + link + "\t" + img + "\t" + format);
			
			var row  = '<tr><td>' + title + '<\/td><td>' + author + '<\/td><td>' + link + '<\/td><td>' + img + '<\/td><td>' + format + '<\/td><\/tr>';
			
			wclTable += row;

		});


		wclTable = '<p>Click the button below (or anywhere on the table) to highlight the table, then press <strong>Ctrl + C</strong> to copy the contents</p><p><button id="copy-table" class="button" style="margin-right: 1rem;">Highlight table</button> <button id="remove-header" class="button">Remove table header</button></p><table class="table table-striped" id="od-table"><thead><th scope="col">Title<\/th><th scope="col">Author<\/th><th scope="col">Overdrive link<\/th><th scope="col">Image<\/th><th scope="col">Format<\/th><\/thead><tbody>' + wclTable + '<\/tbody><\/table>';

		var wclModal = '<div role="" id="wcl-od" class="reveal-modal small" data-reveal="" aria-hidden="true"> <div class="modal-header text-center"> <h1 class="modal-title primary-color" id="wcl-od">' + pageTitle + '</h1> </div> <div class="modal-container wcl" role="">' + wclTable + '</div> <a class="close-reveal-modal js-last-focus" href="javascript:void(0)" role="button" aria-label="Close" tabindex="0">×</a></div>';
				
		jQuery('body').append(wclModal);

		jQuery('#wcl-od').foundation('reveal', 'open');
		
		jQuery('#copy-table, #od-table').click(function() {
		
			selectElementContents(jQuery('#od-table')[0]);
		
		});
		
		jQuery('#remove-header').click(function() {
		
			jQuery('#od-table thead').remove();
		
		});

		
	}

}


