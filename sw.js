const CACHE_NAME = 'ABC_v22.04.25-1',
    urlsToCache = [
        '/',
        // ! Vistas de la Web *************
        '/index.html',
        '/home.html',
        '/institucion.html',
        '/institution.html',
        // '/administracion.html',
        // '/administration.html',
        // '/parvularia.html',
        // '/pre-school.html',
        // '/primaria.html',
        // '/middle-school.html',
        // '/secundaria.html',
        // '/high-school.html',
        // '/aula-de-nivelacion.html',
        // '/development-center.html',
        // '/vida-escolar.html',
        // '/school-life.html',
        '/circulares.html',
        '/newsletter.html',
        '/fechas-importantes.html',
        '/important-dates.html',
        '/contactanos.html',
        '/contact.html',
        // ! Complementos ********************
        '/mdb-addons/mdb-lightbox-ui.html',
        '/mdb-addons/preloader.html',
        '/403.html',
        '/404.html',
        // ! Imagenes ************************
        '/img/mdb-favicon.ico', // ! Favicon
        //!=================================
        // ! IMAGENES PERSONAL DEL COLEGIO |
        //!----------------------------------------------Administracion
        '/img/equipo/ad_01.jpg',
        '/img/equipo/ad_02.jpg',
        '/img/equipo/ad_03.jpg',
        '/img/equipo/ad_04.jpg',
        // '/img/equipo/ad_05.jpg',
        '/img/equipo/ad_06.jpg',
        '/img/equipo/ad_07.jpg',
        'img/circulares/circular-00.jpg',
        'img/circulares/circular-00.pdf',
        'img/circulares/circular-01.jpg',
        'img/circulares/circular-01.pdf',
        'img/circulares/circular-02.jpg',
        'img/circulares/circular-03.jpg',
        'img/circulares/circular-04.jpg',
        //!===============================
        // ! IMAGENES FECHAS IMPORTANTES |
        //!-------------------------------
        '/img/eventos/fechas.jpg',
        '/img/eventos/abril1.jpg',
        '/img/eventos/abril2.jpg',
        '/img/eventos/abril3.jpg',
        '/img/eventos/abril4.jpg',
        '/img/eventos/abril5.jpg',
        '/img/eventos/abril6.jpg',
        // ! Logos
        '/img/logos/abc-logo.jpg',
        '/img/logos/Logo_McGraw-Hill.jpg',
        '/img/logos/Logo_alianza-francesa.png',
        '/img/logos/Logo_Pearson.png',
        '/img/logos/Logo_Santillana.png',
        '/img/logos/Logo_t-box.png',
        '/img/logos/NIPSA_Logo.png',
        // ! Imagenes Slider
        '/img/slider/slider_1.jpg',
        '/img/slider/slider_2.jpg',
        '/img/slider/slider_3.jpg',
        // ! Imagenes en formato SVG
        '/img/svg/404.svg',
        '/img/svg/arrow_left.svg',
        '/img/svg/arrow_right.svg',
        '/img/svg/astronaut.svg',
        '/img/svg/earth.svg',
        '/img/svg/hombre-user.svg',
        '/img/svg/map-marker-alt-solid.svg',
        '/img/svg/moon.svg',
        '/img/svg/mujer-user.svg',
        '/img/svg/overlay_stars.svg',
        '/img/svg/rocket.svg',
        // ! Imagenes Parallax
        'img/bg_1.jpg',
        //'img/bg_2.jpg',
        // ! Imagenes de Galeria
        '/img/foto-01.jpg',
        '/img/foto-02.jpg',
        '/img/foto-03.jpg',
        '/img/foto-04.jpg',
        '/img/menu-cafeteria.jpg',
        '/img/bg_purple.png',
        // ! Iconos Ventana Modal - 1
        // '/img/iconos_admision/ICONO1.png',
        // '/img/iconos_admision/ICONO2.png',
        // '/img/iconos_admision/ICONO3.png',
        // '/img/iconos_admision/ICONO4.png',
        // '/img/iconos_admision/ICONO5.png',
        // '/img/iconos_admision/ICONO6.png',
        // '/img/iconos_admision/ICONO7.png',
        // '/img/iconos_admision/ICONO8.png',
        // ! Iconos Ventana Modal - 2 - Menu
        '/img/menu-logo.jpg',
        // ! Imagenes de Banderas
        '/img/el-salvador.png',
        '/img/usa.png',
        // ! Imagenes Lightbox
        '/img/lightbox/close.png',
        '/img/lightbox/default-skin.png',
        '/img/lightbox/default-skin.svg',
        '/img/lightbox/loading.gif',
        '/img/lightbox/next.png',
        '/img/lightbox/preloader.gif',
        '/img/lightbox/prev.png',
        // ! Imagenes Seccion sin Conexión
        '/img/formBackEs.jpg',
        '/img/formBackIn.jpg',
        '/img/mapBackEs.jpg',
        '/img/mapBackIn.jpg',
        '/img/smallFormBackEs.png',
        '/img/smallFormBackIn.png',
        '/img/videoBackEs.jpg',
        '/img/videoBackIn.jpg',
        '/img/reapertura.png',
        // ! Documentos **********************
        '/documents/Manual-de-convivencia-2021-2022.pdf',
        '/documents/Manual-Teams.pdf',
        '/documents/Calendario-2021-2022.pdf',
        '/documents/Reopening0821.pdf',
        // ! Fuentes Tipograficas ***********
        '/font/coolvetica/coolvetica_rg.ttf',
        '/font/roboto/Roboto-Bold.ttf',
        '/font/roboto/Roboto-Light.ttf',
        '/font/roboto/Roboto-Medium.ttf',
        '/font/roboto/Roboto-Regular.ttf',
        '/font/roboto/Roboto-Thin.ttf',
        '/webfonts/fa-brands-400.ttf',
        '/webfonts/fa-regular-400.ttf',
        '/webfonts/fa-solid-900.ttf',
        // ! Archivos CSS ******************
        '/css/fa.css',
        '/css/bootstrap.min.css',
        '/css/mdb.min.css',
        '/css/lightbox.css',
        '/css/venobox.min.css',
        '/css/style.css',
        // ! Archivos JS ******************
        '/js/app.js',
        '/js/bootstrap.min.js',
        '/js/jquery.min.js',
        '/js/lightbox.js',
        '/js/mdb.min.js',
        '/js/my-script.js',
        '/js/popper.min.js',
        '/js/smooth-scroll.min.js',
        '/js/venobox.min.js',
        '/js/waypoints.js',
        '/carga-sw.js',
        '/manifest.json',
        '/sw.js',
        // ! Vue Components ***************
        '/componentes/barra.js',
        '/componentes/buttonfloat.js',
        '/componentes/Circular.js',
        '/componentes/equipos.js',
        '/componentes/fecha.js',
        '/componentes/itemsMenu.js',
        '/componentes/mapform.js',
        '/componentes/Menu.js',
        '/componentes/menubottom.js',
        '/componentes/menucafeteria.js',
        '/componentes/menufix.js',
        '/componentes/menutop.js',
        '/componentes/modal-info.js',
        '/componentes/modal-inicio.js',
        '/componentes/myfooter.js',
        '/componentes/myparallax.js',
        '/componentes/myvideo.js',
        '/componentes/reapertura.js',
        '/componentes/testimoniales.js',
        '/componentes/widget1.js',
        '/componentes/widget2.js',
        '/componentes/widget3.js',
        '/componentes/widget4.js',
        '/componentes/widget5.js'
    ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                // .then(() => self.skipWaiting())
            })
            .catch(err => console.log('Falló registro de cache', err))
    )
    self.skipWaiting()
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = CACHE_NAME;

    e.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {

                        if (cacheName !== cacheWhitelist) {
                            return caches.delete(cacheName)
                        }
                    })
                )
            })
            // Le indica al SW activar el cache actual
            .then(() => self.clients.claim())
    )
    // self.clients.claim()
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
                //recupera de la url
                return fetch(e.request);

            })
    )
})