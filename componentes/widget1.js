let widget1 = {
    template:
    /*html*/`
                <div class="col-sm-6 col-lg-3 mb-5 animalo">
                    <div class="block-1">

                    <template v-if="ingles=='true'">
                        <h3 class="block-title">Contact Us</h3>
                    </template>
                    <template v-else>
                        <h3 class="block-title">¿ Alguna Pregunta ?</h3>
                    </template>

                        <ul>
                            <li><span class="icon fas fa-map-marker-alt"></span><span class="text">89 Av. Nte. y 3a Calle. Pte. #4628 Colonia Escalón, San Salvador, El Salvador, C.A.</span></li>
                            <li><span class="icon fas fa-phone-alt"></span><span class="text">PBX:2264-0508/7696-9556</span></li>
                            <li><span class="icon far fa-envelope"></span><span class="text">info1@abcbilingualschool.edu.sv</span></li>
                        </ul>
                    </div>
                </div>
    `,
    props: ['ingles']
}
