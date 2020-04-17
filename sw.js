//asignar un nombre y versión al cache
const CACHE_NAME = 'v0.1_cache_ABC',
  urlsToCache = [
    '/',
    '/index.html',
    '/conocenos.html',
    '/administracion.html',
    '/parvularia.html',
    '/primaria.html',
    '/secundaria.html',
    '/aula-de-nivelacion.html',
    '/circulares.html',
    '/fechas-importantes.html',
    '/403.html',
    '/404.html',
    '/img/mdb-favicon.ico',
    '/img/equipo/ad_01.jpg',
    '/img/equipo/ad_02.jpg',
    '/img/equipo/ad_03.jpg',
    '/img/equipo/ad_04.jpg',
    '/img/equipo/ad_05.jpg',
    '/img/equipo/ad_06.jpg',
    '/img/equipo/ad_07.jpg',
    '/img/equipo/an_01.jpg',
    '/img/equipo/an_02.jpg',
    '/img/equipo/an_03.jpg',
    '/img/equipo/an_04.jpg',
    '/img/equipo/an_05.jpg',
    '/img/equipo/an_06.jpg',
    '/img/equipo/an_07.jpg',
    '/img/equipo/pa_01.jpg',
    '/img/equipo/pa_02.jpg',
    '/img/equipo/pa_03.jpg',
    '/img/equipo/pa_04.jpg',
    '/img/equipo/pa_05.jpg',
    '/img/equipo/pa_06.jpg',
    '/img/equipo/pa_07.jpg',
    '/img/equipo/pa_08.jpg',
    '/img/equipo/pr_01.jpg',
    '/img/equipo/pr_02.jpg',
    '/img/equipo/pr_03.jpg',
    '/img/equipo/pr_04.jpg',
    '/img/equipo/pr_05.jpg',
    '/img/equipo/pr_06.jpg',
    '/img/equipo/pr_07.jpg',
    '/img/equipo/se_01.jpg',
    '/img/equipo/se_02.jpg',
    '/img/equipo/se_03.jpg',
    '/img/equipo/se_04.jpg',
    '/img/equipo/se_05.jpg',
    '/img/equipo/se_06.jpg',
    '/img/circulares/circular-01.jpg',
    '/img/circulares/circular-02.jpg',
    '/img/circulares/circular-03.jpg',
    '/img/circulares/circular-04.jpg',
    '/img/circulares/circular-05.jpg',
    '/img/circulares/circular-06.jpg',
    '/img/circulares/circular-07.jpg',
    '/img/circulares/circular-08.jpg',
    '/img/circulares/circular-09.jpg',
    '/img/circulares/circular-10.jpg',
    '/img/eventos/ev-01.jpg',
    '/img/eventos/ev-02.jpg',
    '/img/eventos/ev-03.jpg',
    '/img/eventos/ev-04.jpg',
    '/img/eventos/ev-05.jpg',
    '/img/eventos/ev-06.jpg',
    '/img/eventos/ev-07.jpg',
    '/img/eventos/ev-08.jpg',
    '/img/eventos/ev-09.jpg',
    '/img/logos/abc-logo.jpg',
    '/img/logos/Logo_McGraw-Hill.jpg',
    '/img/logos/Logo_alianza-francesa.png',
    '/img/logos/Logo_Pearson.png',
    '/img/logos/Logo_Santillana.png',
    '/img/logos/Logo_t-box.png',
    '/img/logos/NIPSA_Logo.png',
    '/img/parents/parent-1.jpg',
    '/img/parents/parent-2.jpg',
    '/img/parents/parent-3.jpg',
    '/img/parents/parent-4.jpg',
    '/img/parents/parent-5.jpg',
    '/img/slider/slider_1.jpg',
    '/img/slider/slider_2.jpg',
    '/img/slider/slider_3.jpg',
    '/img/svg/404.svg',
    '/img/svg/arrow_left.svg',
    '/img/svg/arrow_right.svg',
    '/img/svg/astronaut.svg',
    '/img/svg/earth.svg',
    '/img/svg/map-marker-alt-solid.svg',
    '/img/svg/moon.svg',
    '/img/svg/overlay_stars.svg',
    '/img/svg/rocket.svg',
    '/img/bg_1.jpg',
    '/img/bg_2.jpg',
    '/img/foto-01.jpg',
    '/img/foto-02.jpg',
    '/img/foto-03.jpg',
    '/img/foto-04.jpg',
    '/img/menu-cafeteria.jpg',
    '/img/bg_purple.png',
    '/font/coolvetica/coolvetica_rg.ttf',
    '/webfonts/fa-brands-400.ttf',
    '/webfonts/fa-regular-400.ttf',
    '/webfonts/fa-solid-900.ttf',
    '/css/fa.css',
    '/css/bootstrap.min.css',
    '/css/mdb.min.css',
    '/css/baguetteBox.min.css',
    '/css/gallery-grid.css',
    '/css/style.css',
    '/js/jquery.min.js',
    '/js/popper.min.js',
    '/js/bootstrap.min.js',
    '/js/mdb.min.js',
    '/js/waypoints.js',
    '/js/jquery.animateNumber.min.js',
    '/js/baguetteBox.min.js',
    '/js/my-script.js',
    '/carga-sw.js',
    '/mail.php',
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})