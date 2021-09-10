// ? asignar un nombre y versión al cache
const CACHE_NAME = 'ABC_v21.08.13.2';
const urlsToCache = [
        '/',
        'index.html',
        'home.html',
        'institucion.html',
        'institution.html',
        'administracion.html',
        'administration.html',
        'parvularia.html',
        'pre-school.html',
        'primaria.html',
        'middle-school.html',
        'secundaria.html',
        'high-school.html',
        'aula-de-nivelacion.html',
        'development-center.html',
        'vida-escolar.html',
        'school-life.html',
        'circulares.html',
        'newsletter.html',
        'fechas-importantes.html',
        'important-dates.html',
        'contactanos.html',
        'contact.html',
        'mdb-addons/mdb-lightbox-ui.html',
        'mdb-addons/preloader.html',
        '403.html',
        '404.html',
        'img/mdb-favicon.ico',
        'img/equipo/ad_01.jpg',
        'img/equipo/ad_02.jpg',
        'img/equipo/ad_03.jpg',
        'img/equipo/ad_04.jpg',
        'img/equipo/ad_06.jpg',
        'img/equipo/ad_07.jpg',
        'img/equipo/an_Adriana_Somoza.jpg',
        'img/equipo/an_Gabriela_Cuellar.jpg',
        'img/equipo/an_Galia_Merino.jpg',
        'img/equipo/an_Ingrid_Aguilera.jpg',
        'img/equipo/an_Zuleima_Navarro_de_Vigil.jpg',
        'img/equipo/pa_Adriana_Avelar.jpg',
        'img/equipo/pa_Erika_Salinas.jpg',
        'img/equipo/pa_Gabriela_Mira.jpg',
        'img/equipo/pa_Iliana_Guzman.jpg',
        'img/equipo/pa_Marcela_Rodriguez.jpg',
        'img/equipo/pa_Maria_Jose_Rengifo.jpg',
        'img/equipo/pa_Mayra_Alas.jpg',
        'img/equipo/pr_Alejandra_de_Salgado.jpg',
        'img/equipo/pr_Auxiliadora_Melhado.jpg',
        'img/equipo/pr_Carmen_Torres.jpg',
        'img/equipo/pr_Leonidas_Fernandez.jpg',
        'img/equipo/pr_Maria_Begona_Gonzalez.jpg',
        'img/equipo/pr_Maria_Eugenia_de_Calderon.jpg',
        'img/equipo/pr_Tatiana_de_Portillo.jpg',
        'img/equipo/pr_Valeria_Pena.jpg',
        'img/equipo/se_Ana_Gertrudis_de_Barrera.jpg',
        'img/equipo/se_Ana_Regina_Miranda.jpg',
        'img/equipo/se_Carlos_Revolorio.jpg',
        'img/equipo/se_David_Bayona.jpg',
        'img/equipo/se_Guillermo_Torres.jpg',
        'img/equipo/se_Irvin_Avila.jpg',
        'img/equipo/se_Ludwing_Portillo.jpg',
        'img/equipo/se_Luz_Caceres.jpg',
        'img/equipo/se_Veronica_Martinez.jpg',
        'img/circulares/circular-01.jpg',
        'img/circulares/circular-02.jpg',
        'img/circulares/circular-03.jpg',
        'img/circulares/circular-04.jpg',
        'img/circulares/circular-05.jpg',
        'img/eventos/agosto1.jpeg',
        'img/eventos/agosto2.jpeg',
        'img/eventos/agosto3.jpeg',
        'img/eventos/agosto4.jpeg',
        'img/logos/abc-logo.jpg',
        'img/logos/Logo_McGraw-Hill.jpg',
        'img/logos/Logo_alianza-francesa.png',
        'img/logos/Logo_Pearson.png',
        'img/logos/Logo_Santillana.png',
        'img/logos/Logo_t-box.png',
        'img/logos/NIPSA_Logo.png',
        'img/slider/slider_1.jpg',
        'img/slider/slider_2.jpg',
        'img/slider/slider_3.jpg',
        'img/svg/404.svg',
        'img/svg/arrow_left.svg',
        'img/svg/arrow_right.svg',
        'img/svg/astronaut.svg',
        'img/svg/earth.svg',
        'img/svg/hombre-user.svg',
        'img/svg/map-marker-alt-solid.svg',
        'img/svg/moon.svg',
        'img/svg/mujer-user.svg',
        'img/svg/overlay_stars.svg',
        'img/svg/rocket.svg',
        'img/bg_1.jpg',
        'img/foto-01.jpg',
        'img/foto-02.jpg',
        'img/foto-03.jpg',
        'img/foto-04.jpg',
        'img/menu-cafeteria.jpg',
        'img/bg_purple.png',
        'img/vescolar/01_vida-escolar__pre-maternal.jpg',
        'img/vescolar/02_Vida-Escolar__Pre-Kinder.jpg',
        'img/vescolar/03_vida-escolar__kinder-01.jpg',
        'img/vescolar/03_vida-escolar__kinder-02.jpg',
        'img/vescolar/04_vida-escolar__preparatoria.jpg',
        'img/vescolar/05_vida-escolar__grado-1.jpg',
        'img/vescolar/07_vida-escolar__grado-3.jpg',
        'img/vescolar/08_vida-escolar__grado-4.jpg',
        'img/vescolar/09_vida-escolar__grado-5.jpg',
        'img/vescolar/10_vida-escolar__grado-6.jpg',
        'img/vescolar/14_vida-escolar__grado-10-1.jpg',
        'img/vescolar/14_vida-escolar__grado-10-2.jpg',
        'img/vescolar/14_vida-escolar__grado-10-3.jpg',
        'img/vescolar/15_vida-escolar__grado-11.jpg',
        'img/vescolar/16_vida-escolar__grado-12.jpg',
        'img/vescolar/17_Developement Center-01.jpg',
        'img/vescolar/17_Developement Center-02.jpg',
        'img/vescolar/relleno.jpg',
        'img/iconos_admision/ICONO1.png',
        'img/iconos_admision/ICONO2.png',
        'img/iconos_admision/ICONO3.png',
        'img/iconos_admision/ICONO4.png',
        'img/iconos_admision/ICONO5.png',
        'img/iconos_admision/ICONO6.png',
        'img/iconos_admision/ICONO7.png',
        'img/iconos_admision/ICONO8.png',
        'img/menu-items/menu-logo.jpg',
        'img/menu-items/menu-tittle-2.jpg',
        'img/menu-items/menu-item-2-1.jpg',
        'img/menu-items/menu-item-2-2.jpg',
        'img/menu-items/menu-item-2-3.jpg',
        'img/menu-items/menu-item-2-4.jpg',
        'img/menu-items/menu-item-2-5.jpg',
        'img/el-salvador.png',
        'img/usa.png',
        'img/lightbox/close.png',
        'img/lightbox/default-skin.png',
        'img/lightbox/default-skin.svg',
        'img/lightbox/loading.gif',
        'img/lightbox/next.png',
        'img/lightbox/preloader.gif',
        'img/lightbox/prev.png',
        'img/formBackEs.jpg',
        'img/formBackIn.jpg',
        'img/mapBackEs.jpg',
        'img/mapBackIn.jpg',
        'img/smallFormBackEs.png',
        'img/smallFormBackIn.png',
        'img/videoBackEs.jpg',
        'img/videoBackIn.jpg',
        'img/reapertura.png',
        'documents/Manual-de-convivencia-2021-2022.pdf',
        'documents/Manual-Teams.pdf',
        'documents/Calendario-2021-2022.pdf',
        'documents/Reopening0821.pdf',
        'font/coolvetica/coolvetica_rg.ttf',
        'font/roboto/Roboto-Bold.ttf',
        'font/roboto/Roboto-Light.ttf',
        'font/roboto/Roboto-Medium.ttf',
        'font/roboto/Roboto-Regular.ttf',
        'font/roboto/Roboto-Thin.ttf',
        'webfonts/fa-brands-400.ttf',
        'webfonts/fa-regular-400.ttf',
        'webfonts/fa-solid-900.ttf',
        'css/fa.css',
        'css/bootstrap.min.css',
        'css/mdb.min.css',
        'css/lightbox.css',
        'css/venobox.min.css',
        'css/style.css',
        'js/app.js',
        'js/bootstrap.min.js',
        'js/jquery.min.js',
        'js/lightbox.js',
        'js/mdb.min.js',
        'js/my-script.js',
        'js/popper.min.js',
        'js/smooth-scroll.min.js',
        'js/venobox.min.js',
        'js/waypoints.js',
        'carga-sw.js',
        'manifest.json',
        'componentes/barra.js',
        'componentes/buttonfloat.js',
        'componentes/Circular.js',
        'componentes/equipos.js',
        'componentes/fecha.js',
        'componentes/itemsMenu.js',
        'componentes/mapform.js',
        'componentes/Menu.js',
        'componentes/menubottom.js',
        'componentes/menucafeteria.js',
        'componentes/menufix.js',
        'componentes/menutop.js',
        'componentes/modal-info.js',
        'componentes/modal-inicio.js',
        'componentes/myfooter.js',
        'componentes/myparallax.js',
        'componentes/myvideo.js',
        'componentes/reapertura.js',
        'componentes/testimoniales.js',
        'componentes/widget1.js',
        'componentes/widget2.js',
        'componentes/widget3.js',
        'componentes/widget4.js',
        'componentes/widget5.js'
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
    // self.skipWaiting()
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = CACHE_NAME;

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    //Eliminamos lo que ya no se necesita en cache
                    // if (cacheWhitelist.indexOf(cacheName) === -1) {
                    //     return caches.delete(cacheName)
                    // }
                    if( cacheName !== cacheWhitelist ) {
                        Location.reload(true);
                        return caches.delete( cacheName )

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
        caches.open( CACHE_NAME ).then( cache => {
            
            cache.match(e.request)
                .then(res => {
                    if (res) {
                        //recuperar del cache
                        return res
                    }
                    //recupera de la url
                    return fetch( e.request );
                    // return res || fetch( e.request )
                })
        } )
    )
})