let widget3 = {
    template:
    /*html*/`

            <div class="col-sm-4 col-lg-2 mb-5 d-flex justify-content-center animalo retardo-2">
                <div class="block-3">

                <template v-if="ingles == 'true'">

                    <h3 class="block-title">Menu</h3>

                    <ul class="menu">
                        <li><a :href="link1">Home</a></li>
                        <li><a :href="link2">About us</a></li>
                        <li><a :href="link3">Team</a></li>
                        <li><a :href="link4">School life</a></li>
                        <li><a :href="link5">Contact us</a></li>
                    </ul>

                </template>
                <template v-else>

                <h3 class="block-title">Menú</h3>

                <ul class="menu">
                    <li><a :href="link1">Inicio</a></li>
                    <li><a :href="link2">Conócenos</a></li>
                    <li><a :href="link3">Equipo</a></li>
                    <li><a :href="link4">Vida Escolar</a></li>
                    <li><a :href="link5">Contáctanos</a></li>
                </ul>

            </template>

                    <ul class="footer-social list-unstyled float-md-left float-lft mt-3">
                        <li class="animalo retardo-3">
                            <a href="https://www.facebook.com/abcbilingualschool" target="_blank">
                                <span class="fab fa-facebook-f"></span>
                            </a>
                        </li>
                        <li class="animalo retardo-4">
                            <a href="https://www.instagram.com/abc_bilingual_school" target="_blank">
                                <span class="fab fa-instagram"></span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

    `,
    props: ['ingles','link1','link2','link3','link4','link5']
}