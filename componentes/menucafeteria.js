Vue.component( 'menucafeteria', {
    template:/*html*/
    `
    <div class="modal fade" id="menuModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-xl modal-dialog-scrollable modal-azul modal-dialog-centered" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <h4 class="modal-title color-naranja">ABC Bilingual School.</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>
        
                <!--Body-->
                <div class="modal-body">
                    <div class="row row-cols-1 d-flex justify-content-center">
                        <div class="col text-center menu-item">
                            <img src="./img/menu-logo.jpg" class="img-menu-logo" alt="">
                        </div>
                        <div class="col text-center menu-item">
                            <h1 class="menu__titulo">Menú Almuerzo</h1>
                            <p class="menu__titulo__fecha">Semana del 6 al 10 de septiembre 2021.</p>
                        </div>

                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 d-flex justify-content-center">
                        <div class="col text-center menu-item d-flex justify-content-center">
                            <div class="menu__item__contenedor">
                                <div class="menu__item__dia">
                                    <p>Lunes</p>
                                </div>
                                <div class="menu__item__plato">
                                    <p>Fajitas de pollo.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center menu-item d-flex justify-content-center">
                            <div class="menu__item__contenedor">
                                <div class="menu__item__dia">
                                    <p>Martes</p>
                                </div>
                                <div class="menu__item__plato">
                                    <p>Spaguetis con crema y queso.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center menu-item d-flex justify-content-center">
                            <div class="menu__item__contenedor">
                                <div class="menu__item__dia">
                                    <p>Miércoles</p>
                                </div>
                                <div class="menu__item__plato">
                                    <p>Alitas a la barbacoa.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center menu-item d-flex justify-content-center">
                            <div class="menu__item__contenedor">
                                <div class="menu__item__dia">
                                    <p>Jueves</p>
                                </div>
                                <div class="menu__item__plato">
                                    <p>Picado de carne con verduras.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center menu-item d-flex justify-content-center">
                            <div class="menu__item__contenedor">
                                <div class="menu__item__dia">
                                    <p>Viernes</p>
                                </div>
                                <div class="menu__item__plato">
                                    <p>Hamburguesas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <h4>Todos los platos llevan dos acompañamientos, arroz y ensalada. Refresco natural.</h4>
                        <h4>Teléfono 2264-0508 Ext. 4.</h4>
                    </div>
                </div>

        
                <!--Footer-->
                <div class="modal-footer justify-content-center">
                    <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">Cerrar</a>
                </div>
            </div>
            <!--/.Content-->
        </div>
    </div>
    `
} );