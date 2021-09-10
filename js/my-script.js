$(document).ready(function(){

	// ESTE CODIGO GENERA LAS ANIMACIONES DEL CONTADOR
	/*var counter = function() {
			
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
	counter();*/

	// ESTE CODIGO ES DEL MENU
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
	// ************************************************************
	// ! ESTE CODIGO GENERA LAS ANIMACIONES CUANDO LLEGA EL SCROLL
	// ! VERSION JQUERY
	// ************************************************************
	/*var contentWayPointAnimalo = function() {

		$('.animalo').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animalo.item-animate').each(function(k){
						console.log($('body .animalo.item-animate'))
						console.log('k:',k)
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
						},  k * 350, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};*/
	// contentWayPointAnimalo();
	// ************************************************************
	// ! ESTE CODIGO GENERA LAS ANIMACIONES CUANDO LLEGA EL SCROLL
	// ! VERSION JAVASCRIPT
	// ************************************************************
	var waypoints = document.querySelectorAll('.animalo');
	waypoints.forEach( waypoint => {
		let _waypoint = new Waypoint ({
			element: waypoint,
			handler: function(direction){
				// let el = this.element;
				// console.log(el);
				// console.log(this);
				// console.log($(this.element));
				// console.log(waypoint);
				
				// console.log(this.element.classList.contai)
				if(direction === 'down' && !this.element.classList.contains('animated')){
					// this.element.classList.add('iten-animate')
					waypoint.classList.add('item-animate');
					
					setTimeout(() => {
						let el = document.querySelectorAll('.animalo.item-animate');
						// console.log(el)
						el.forEach((_el, index) =>{
							
							setTimeout( () => {
								let effect = this.element.dataset.animateEffect;
								if ( effect === 'fadeIn') {
									_el.classList.add('fadeIn', 'animated');
								} else if ( effect === 'fadeInLeft') {
									_el.classList.add('fadeInLeft', 'animated');
								} else if ( effect === 'fadeInRight') {
									_el.classList.add('fadeInRight', 'animated');
								} else if (effect === 'fadeInDown') {
									_el.classList.add('fadeInDown', 'animated');
								} else {
									_el.classList.add('fadeInUp', 'animated');
								}
								_el.classList.remove('item-animate');
							},  index * 350, 'easeInOutExpo' );

						})

					}, 100);
					// console.log(waypoint)
					// console.log($(this));
				}
			}, offset: '95%'
		})
	} )

	// ESTE CODIGO HACE QUE EL MENU APARESCA Y SE VALLA
	var flag = false;
	var scroll;
	var nav = $("#navbar-fixed")

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if(scroll >1000){
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

// PROCESO PARA VERIFICAR CONEXION A INTERNET

var contentMessage;
var messages = {
	"true": "✅ Conectado a internet",
	"false": "🚫 Sin conexión a internet"
};

function checkConnection() {
	console.log(messages[window.navigator.onLine]);
	contentMessage.classList.remove("true");
	contentMessage.classList.remove("false");
	setTimeout(function (){
		contentMessage.innerHTML = messages[window.navigator.onLine];
		contentMessage.classList.add(window.navigator.onLine);
	}, 600);

	if(window.navigator.onLine){
		console.log("con conexion");

		//Recarga los iframes
		const iframe = document.querySelectorAll('.iframe');
		iframe.forEach(e =>{
			e.src = e.src;
		});
		
		const cambiarClase = document.querySelectorAll('.oculto');
		setTimeout(function(){
			cambiarClase.forEach(e => {
				//e.removeClass('class', 'visible');
				e.classList.remove("oculto");
				e.classList.add("visible");
			});
		}, 2000);

		const e_OnLine = document.querySelectorAll('.v-offLine');
		e_OnLine.forEach(e => {
			//e.setAttribute('class', 'oculto');
			e.classList.remove("v-offLine");
			// e.classList.add("v-offLine");
		});

		setTimeout(() => {
			const menuBottom = document.querySelector('.nav-eq');
			if ( menuBottom ) {
				menuBottom.classList.remove('subir');
			}
		}, 6000);

		setTimeout(function (){
			contentMessage.classList.remove("true");
		}, 6000);

	}else{
		console.log("sin conexion");

		setTimeout(() => {
			const menuBottom = document.querySelector('.nav-eq');
			if ( menuBottom ) {
				menuBottom.classList.add('subir');
			}
		}, 1200);


		const cambiarClase = document.querySelectorAll('.visible');
		cambiarClase.forEach(e => {
			//e.setAttribute('class', 'oculto');
			e.classList.remove("visible");
			e.classList.add("oculto");
		});

		const e_OffLine = document.querySelectorAll('.v-onLine');
		e_OffLine.forEach(e => {
			//e.setAttribute('class', 'oculto');
			// e.classList.remove("visible");
			e.classList.add("v-offLine");
		});
	}
}
window.addEventListener("online",  checkConnection);
window.addEventListener("offline", checkConnection);

window.addEventListener("load", function(){
	contentMessage = document.querySelector("#contentMessage");
	if(!window.navigator.onLine){
		checkConnection();
	}
});