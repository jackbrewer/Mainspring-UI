$(document).ready(function() {

	/** jQuery UI Datepicker **/
	$.datepicker.setDefaults({dayNamesMin: $.datepicker._defaults.dayNamesShort});
	$(".datepicker").datepicker({
		dateFormat: 'DD d MM, yy',
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: 0,
		firstDay: 1
	});

	/** Chosen Select Boxes **/
	$(".chzn-select").chosen({
		allow_single_deselect: true,
		disable_search_threshold: 10
	});

	/** Styled Select Box **/
	$('.ui-select-single').click(function(){
		$(this).parent().find('.ui-select-dropdown').toggle();
		return false;
	});

	/** Notification Bars **/
	$('.notification .close').click(function(e){
		$(this).closest('.notification').fadeTo(300, 0).slideUp(300);
		e.preventDefault();
	});

	/** Show page notification when all others re closed - Demo use only **/
	var notificationCount = $('.notification').size();
	$('.notification .close').click(function(e){
		notificationCount--;
		if(notificationCount === 1){
			$('#page-notification .notification').slideDown(300).fadeTo(300, 1);
		}
	});
	$('.notification a.reset').click(function(e){
		$('.notification').slideDown(300).fadeTo(300, 1);
		notificationCount = $('.notification').size();
	});
	$('.notification a').click(function(e){
		$(this).closest('.notification').fadeTo(300, 0).slideUp(300);
		e.preventDefault();
	});


	/** Scroll to Anchors **/
	/** http://css-tricks.com/snippets/jquery/smooth-scrolling/ **/

	function filterPath(string) {
	return string
		.replace(/^\//,'')
		.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
		.replace(/\/$/,'');
	}
	var locationPath = filterPath(location.pathname);
	var scrollElem = scrollableElement('html', 'body');

	$('a[href*=#]').each(function() {
		var thisPath = filterPath(this.pathname) || locationPath;
		if (  locationPath == thisPath && (location.hostname == this.hostname || !this.hostname)  && this.hash.replace(/#/,'') ) {
			var $target = $(this.hash), target = this.hash;
			if (target) {
				var targetOffset = $target.offset().top;
				$(this).click(function(event) {
					event.preventDefault();
					$(scrollElem).stop().animate({scrollTop: targetOffset}, 400, function() {
						location.hash = target;
					});
				});
			}
		}
	});

	// use the first element that is "scrollable"
	function scrollableElement(els) {
		for (var i = 0, argLength = arguments.length; i <argLength; i++) {
			var el = arguments[i],
					$scrollElement = $(el);
			if ($scrollElement.scrollTop()> 0) {
				return el;
			} else {
				$scrollElement.scrollTop(1);
				var isScrollable = $scrollElement.scrollTop()> 0;
				$scrollElement.scrollTop(0);
				if (isScrollable) {
					return el;
				}
			}
		}
		return [];
	}


});