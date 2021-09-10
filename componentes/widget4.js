let widget4 = {
    template:
    /*html*/`

    <div class="col-sm-8 col-lg-4 mb-5 animalo retardo-5">

        <div class="block-4">

            <div class="border border-light m-2 p-3">
                
                <div class="text-center">
                <template v-if="ingles == 'true'">
                    <h3 class="block-title mb-4">Subscribe</h3>
                    <p class="text">Subscribe to receive weekly information in your email.</p>
                    <div class="small-form-back" style="background-image: url(../img/smallFormBackIn.png);">
                        <div class="visible">
                            <iframe class="iframe" :src="urlEmailIn" frameborder="0" style="height: 200px; width: 100%;"></iframe>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <h3 class="block-title mb-4">Suscríbete</h3>
                    <p class="text">Suscríbete para recibir información semanal en tu correo.</p>
                    <div class="small-form-back" style="background-image: url(../img/smallFormBackEs.png);">
                        <div class="visible">
                            <iframe class="iframe" :src="urlEmailEs" frameborder="0" style="height: 200px; width: 100%;"></iframe>
                        </div>
                    </div>
                </template>
                </div>

            </div>
        
        </div>

    </div>
    `,

    data(){
        return{
            // urlEmailEs: 'https://progressive-web-app.000webhostapp.com/enviar_email/email-es.html',
            // urlEmailIn: 'https://progressive-web-app.000webhostapp.com/enviar_email/email-in.html'
            // urlEmailEs: 'https://mi-email.000webhostapp.com/abc/email-es.html',
            // urlEmailIn: 'https://mi-email.000webhostapp.com/abc/email-in.html'
            urlEmailEs: 'enviar_email/email-corto.html',
            urlEmailIn: 'enviar_email/email-short.html'
        }
    },
    props: ['ingles']

}