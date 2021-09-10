Vue.component( 'modal-inicio', {
    template:/*html*/
    `
    <div class="modal fade" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-azul modal-dialog-centered" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <h4 class="modal-title color-naranja">ABC Bilingual School</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>
        
                <!--Body-->
                <div class="modal-body">
                    <div class="text-center">
                        <!--<i class="fas fa-check fa-4x mb-3 animated rotateIn"></i>-->
                        <img class="abc-logo" src="img/logos/abc-logo.jpg" alt="ABC Bilingual School El Salvador">
                        <template v-if="traducir == 'true'">
                            <!-- <h5>We properly care about you and your family's safety. That is why we have created the admission process online.</h5> -->
                            <h5>Open enrollment for school year 2021-2022.</h5>
                            <h5>More information at 7696-9556 or 2264-0508.</h5>
                        </template>
                        <template v-else>
                            <!-- <h5>Pensando en la seguridad de tu familia, hemos adaptado el proceso de admisión para que lo realices en línea.</h5> -->
                            <h5>¡ Matrícula abierta para año escolar 2021 - 2022 !</h5>
                            <h5>Más información al 7696-9556 o al 2264-0508.</h5>
                        </template>
                    </div>
                </div>
        
                <!--Footer-->
                <div class="modal-footer justify-content-center">
                    <template v-if="traducir == 'true'">
                        <!-- <a type="button" class="btn btn-azul" data-toggle="modal" data-target="#infoModal" data-dismiss="modal">More Information ?</a>
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">No, thanks</a> -->
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">Close</a>
                    </template>
                    <template v-else>
                        <!-- <a type="button" class="btn btn-azul" data-toggle="modal" data-target="#infoModal" data-dismiss="modal">Más Información ?</a>
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">No, gracias</a> -->
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">Cerrar</a>
                    </template>
                </div>
            </div>
            <!--/.Content-->
        </div>
    </div>
    `,
    props:['traducir']
} );