if ('serviceWorker' in navigator)
{
	window.addEventListener('load', function(){
		// navigator.serviceWorker.register('')
		navigator.serviceWorker.register('./sw.js')
			.then(reg => console.log('Registro de SW exitoso', reg))
			.catch(err => console.warn('Error al tratar de registrar el sw', err))

	});
	
}