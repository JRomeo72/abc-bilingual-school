Vue.component('nosotros-small',{
    template:/*html*/
    `
    <section id="conocenos" class="container about-us-section pt-5">
    
        <div class="row pt-5">

            <div class="col-md-5 order-last p-4 bg-claro animalo" data-animate-effect="fadeInUp">
                <template v-if="ingles == 'true'">
                    <h2 class="mb-4">What we offer</h2>
                    <p>We are an institution committed to training individuals with a high sense of personal and social responsibility, comprehensive citizens with academic excellence, who have the tools to lead in a global world.</p>
                    <p>We pride ourselves on our work and our personalized education.</p>
                    <p>Our teachers are dedicated to guiding our students with values and principles to form successful citizens.</p>
                    <br>
                    <p class="text-center"><a href="institution.html" class="btn btn-rounded bg-naranja text-white px-4 py-3">Read more</a></p>
                </template>
                <template v-else>
                    <h2 class="mb-4">Qué ofrecemos</h2>
                    <p>Somos una institución comprometida con la formación de individuos con alto sentido de responsabilidad personal y social, ciudadanos integrales con excelencia académica, que poseen las herramientas para liderar en un mundo global.</p>
                    <p>Nos enorgullecemos de nuestras labor y nuestra educación personalizada.</p>
                    <p>Nuestros maestros están dedicados a guiar a nuestros estudiantes con valores y principios para formar ciudadanos exitosos.</p>
                    <br>
                    <p class="text-center"><a href="institucion.html" class="btn btn-rounded bg-naranja text-white px-4 py-3">Leer más</a></p>
                </template>
            </div>

            <div class="col-md-7 p-4 animalo" data-animate-effect="fadeInUp">
                <template v-if="ingles == 'true'">
                    <h2 class="mb-4">Welcome to ABC Bilingual School</h2>
                    <p>Our institution began operations in 1986, as a team dedicated to providing bilingual education services at the kindergarten level.</p>
                    <p>It started with 8 students, having had strong growth due to the quality of the service provided. This growth gave us the opportunity to establish the organization, legally as of july 1993, as ABC KID'S SCHOOL, S.A. DE C.V.</p>
                    <p>The operating permit was granted by the Ministry of Education of El Salvador (MINED) under agreement No. 15-0536.</p>
                </template>
                <template v-else>
                    <h2 class="mb-4">Bienvenidos a ABC Bilingual School</h2>
                    <p>Nuestra institución inició operaciones en el año 1986, como una empresa dedicada a prestar servicios de educación bilingüe a nivel parvulario.</p>
                    <p>Comenzó con 8 alumnos, habiendo tenido un fuerte crecimiento debido a la calidad del servicio prestado. Este crecimiento hizo que se convirtiera en una pequeña empresa instituyéndose y legalizándose en julio de 1993, como ABC KID'S SCHOOL, S.A. DE C.V.</p>
                    <p>El permiso de funcionamiento fue otorgado por Ministerio de Educación de El Salvador (MINED) bajo el acuerdo No. 15-0536.</p>
                </template>

                <div class="row no-gutters mt-5">

                    <div class="col-lg-12 mb-4">
                        <div class="section-about-us d-flex">
                            <div class="box-icon-about-us">
                                <div class="icono bg-azul mr-2 sombra">
                                    <span class="fas fa-graduation-cap"></span>
                                </div>
                        </div>
                    <div>
                        <template v-if="ingles == 'true'">
                            <h5>Mission</h5>
                            <p class="text-section-about-us">Forge individuals with a high degree of personal and social responsibility, comprehensive citizens with excellent academic quality, endowed with the knowledge and skills to be leaders in their environment.</p>
                        </template>
                        <template v-else>
                            <h5>Misión</h5>
                            <p class="text-section-about-us">Forjar individuos con un alto grado de responsabilidad personal y social, ciudadanos integrales con excelente calidad académica, dotados con los conocimientos y aptitudes para ser líderes en su medio.</p>
                        </template>
                        </div>
                    </div>
                    </div>

                    <div class="col-lg-12 mb-4">
                        <div class="section-about-us d-flex">
                            <div class="box-icon-about-us">
                                <div class="icono bg-azul mr-2 sombra">
                                    <span class="fas fa-handshake"></span>
                                </div>
                            </div>
                            <div>
                            <template v-if="ingles == 'true'">
                                <h5>Vision</h5>
                                <p class="text-section-about-us">To be the bilingual institution that trains committed leaders with a high sense of the practice of values, to succeed in today's professional world.</p>
                            </template>
                            <template v-else>
                                <h5>Visión</h5>
                                <p class="text-section-about-us">Ser la institución bilingüe formadora de líderes comprometidos y con un alto sentido de la práctica de los valores, para triunfar en el mundo profesional actual.</p>
                            </template>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
    `,
    props: ['ingles']
});