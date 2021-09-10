Vue.component('mapform',{
    template:/*html*/
    `
    <section class="mapa-y-form bg-azul py-5">
        <div class="container-fluid">
            <div class="row">
                <template v-if="ingles == 'true'">
                    <div class="form-back col-md-12 col-lg-5 mb-3 order-lg-last animalo p-0 h-100" style="background-image: url(../img/formBackIn.jpg);">
                        <div class="d-flex justify-content-center visible p-0 h-100">
                            <iframe class="iframe" src="enviar_email/email-full.html" frameborder="0" style="height: 550px; width: 100%; max-width: 400px;"></iframe>
                        </div>
                    </div>

                    <div class="map-back col-md-12 col-lg-7 animalo p-0 h-100" style="background-image: url(../img/mapBackIn.jpg);">
                        <div class="visible p-0 h-100">
                            <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2161397145815!2d-89.24494204874848!3d13.705355302011316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301f44ce3d33%3A0xfa50e6bfe968f136!2sABC%20BILINGUAL%20SCHOOL!5e0!3m2!1sen!2ssv!4v1584989650307!5m2!1sen!2ssv" width="100%" height="550px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <div>
                    </div>

                </template>

                <template v-else>
                    <div class="form-back col-md-12 col-lg-5 mb-3 order-lg-last animalo p-0 h-100" style="background-image: url(../img/formBackEs.jpg);">
                        <div class="d-flex justify-content-center visible p-0 h-100">
                            <iframe class="iframe" src="enviar_email/email-completo.html" frameborder="0" style="height: 550px; width: 100%; max-width: 400px;"></iframe>
                        </div>
                    </div>

                    <div class="map-back col-md-12 col-lg-7 animalo p-0 h-100" style="background-image: url(../img/mapBackEs.jpg);">
                        <div class="visible p-0 h-100">
                            <iframe class="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2161397145815!2d-89.24494204874848!3d13.705355302011316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301f44ce3d33%3A0xfa50e6bfe968f136!2sABC%20BILINGUAL%20SCHOOL!5e0!3m2!1sen!2ssv!4v1584989650307!5m2!1sen!2ssv" width="100%" height="550px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </template>



            </div>
        </div>
    </section>
    `,
    props: ['ingles']
})