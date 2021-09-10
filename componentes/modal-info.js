Vue.component( 'modal-info', {
    template:/*html*/
    `
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-notify modal-lg modal-dialog-scrollable modal-azul modal-dialog-centered" role="document">
            <!--Content-->
            <div class="modal-content">
                <!--Header-->
                <div class="modal-header">
                    <template v-if="traducir == 'true'">
                        <h4 class="modal-title color-naranja">We want to assist you promptly and easily.</h4>
                    </template>
                    <template v-else>
                        <h4 class="modal-title color-naranja">Queremos atenderte con prontitud y facilidad.</h4>
                    </template>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="white-text">&times;</span>
                    </button>
                </div>
        
                <!--Body-->
                <div class="modal-body">
                    <div class="row row-cols-1 row-cols-sm-2">
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO1.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">1- Request information from the school to receive a brochur with prices and payment plans.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">1- Solicite información del colegio para recibir prospecto con precios y planes de pago.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO2.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">2- You will receive the prospectus and a phone call to get more information.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">2- Recibirá el prospecto y una llamada telefónica para ampliar la información.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO3.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">3- You will receive an email for an interview via Zoom.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">3- Recibirá un correo para una entrevista vía Zoom.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO4.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">4- Pay $ 25 corresponding to the admission exam via payment button or bank transfer.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">4- Pagar $25 correspondiente al examen de admisión vía botón de pago o transferencia bancaria.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO5.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">5- Send proof of payment to the mail: carlos.zavaleta@abcbilingualschool.edu.sv.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">5- Enviar comprobante de pago al correo: carlos.zavaleta@abcbilingualschool.edu.sv.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO6.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">6- You will receive a link with instructions for the student to take the admission exam and connect to an interview.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">6- Recibirá un enlace con indicaciones para que el alumno realice el examen de admisión y se conecte a una entrevista.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO7.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">7- We will notify the results by mail or phone call.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">7- Notificaremos los resultados por correo o por llamada telefónica.</p>
                            </template>
                        </div>
                        <div class="col text-center">
                            <img src="./img/iconos_admision/ICONO8.png">
                            <template v-if="traducir == 'true'">
                                <p class="color-rojo">8- You must send documentation via email to start the enrollment process.</p>
                            </template>
                            <template v-else>
                                <p class="color-rojo">8- Debe enviar documentación vía correo electrónico para iniciar con el proceso de matrícula.</p>
                            </template>
                        </div>
                    </div>
                </div>
        
                <!--Footer-->
                <div class="modal-footer justify-content-center">
                    <template v-if="traducir == 'true'">
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">No thanks</a>
                        <a href="enviar_email/form-survey-phpMailer.html"  target="_blank" type="button" class="btn btn-azul" style="color: white;">Fill out form</a>
                    </template>
                    <template v-else>
                        <a href="enviar_email/form-encuesta-phpMailer.html"  target="_blank" type="button" class="btn btn-azul" style="color: white;">Llenar formulario</a>
                        <a type="button" class="btn btn-outline-primary waves-effect" data-dismiss="modal">No, gracias</a>
                    </template>
                </div>
            </div>
            <!--/.Content-->
        </div>
    </div>
    `,
    props:['traducir']
} );