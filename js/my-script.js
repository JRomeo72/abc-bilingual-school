$(document).ready(function(){

	/* ESTE CODIGO GENERA LAS ANIMACIONES DEL CONTADOR*/
	var counter = function() {
			
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					{
						number: num,
						numberStep: comma_separator_number_step
					}, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	/*$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});*/

	/* ESTE CODIGO GENERA LAS ANIMACIONES CUANDO LLEGA EL SCROLL*/
	var contentWayPointAnimalo = function() {
		var i = 0;
		$('.animalo').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;
				
				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animalo.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else if (effect === 'fadeInDown') {
								el.addClass('fadeInDown animated');
							} else {
								el.addClass('fadeInUp animated');
							}
							el.removeClass('item-animate');
						},  k * 250, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPointAnimalo();

	/* ESTE CODIGO HACE QUE EL MENU APARESCA Y SE VALLA */
	var flag = false;
	var scroll;
	var nav = $("#navbar-fixed")

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if(scroll >400){
			if(!flag){
				nav.addClass('animated fadeInDown');
				flag = true;
			}

		}
		else{
			if(flag){
				nav.removeClass('fadeInDown');
				nav.addClass('fadeOutUp');
				flag = false;
				setTimeout( function () {
					nav.removeClass('animated fadeOutUp');

				}, 200, 'easeInOutExpo' );
			}
			
			

		}

	});

});


