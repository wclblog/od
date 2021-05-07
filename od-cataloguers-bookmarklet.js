if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload = callback;
	jQ.src = '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	callback();
}

function callback() {

	if(jQuery('#wcl-od').length > 0) {
	
		jQuery('#wcl-od').foundation('reveal', 'open');
	
	}
	else {
	
		var reserveId = jQuery(document).find('.title-header-overlay .js-details-cover-image:eq(0)').attr('src');
		var patt = /\{([^\}]*?)\}/;
		reserveId = patt.exec(String(reserveId));

		if(reserveId === null) {
			reserveId = 'Reserve ID not found';
		}
		else {
			reserveId = reserveId[1];
		}
									
		var crossRefId = jQuery(document).find('.js-details-cover-sample:eq(0)').attr('data-media-id');
		
		var link = 'http:\/\/link.overdrive.com\/?websiteID=241&titleID=' + crossRefId;
		
		var wclContent = '<h3>037$a<\/h3><p>' + reserveId + '<\/p><h3>856$u<\/h3><p>' + link + '<\/p>';
		
		var wclModal = '<div role="" id="wcl-od" class="reveal-modal small" data-reveal="" aria-hidden="true"> <div class="modal-header text-center"> <h1 class="modal-title primary-color" id="wcl-od">MARC codes</h1> </div> <div class="modal-container" role="">' + wclContent + '</div> <a class="close-reveal-modal js-last-focus" href="javascript:void(0)" role="button" aria-label="Close" tabindex="0">×</a></div>';
		
		jQuery('body').append(wclModal);
		
		jQuery('#wcl-od').foundation('reveal', 'open');
	
	}

}
