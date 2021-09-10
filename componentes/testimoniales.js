Vue.component('testimoniales',{
    template:/*html*/
    `
    <section id="testimoniales" class="my-section bg-claro p-0">

        <div class="container-fluid">
            <div class="container">

                <div class="row justify-content-center">

                    <div class="col-md-8 text-center heading-section animalo">
                        <template v-if="ingles == 'true'">
                            <h2 class="titulo-seccion mb-2 h2">Parent's comments<span> about our school</span></h2>
                            <p class="parrafo-seccion">These are some of the opinions of parents of students about the educational work we carry out in our institution</p>
                        </template>
                        <template v-else>
                            <h2 class="titulo-seccion mb-2 h2">¿ Qué opinan los <span>padres de alumnos ?</span></h2>
                            <p class="parrafo-seccion">Estas son algunas de las opiniones de padres de alumno acerca de la labor educativa que desempeñamos en nuestra institución</p>
                        </template>
                    </div>

                </div>

                <div class="row animalo">

                    <div class="col-md-12">
        
                        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" data-interval="15000">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active bg-dark"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1" class="bg-dark"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2" class="bg-dark"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="3" class="bg-dark"></li>
                            </ol>

                            <div class="carousel-inner">
            
                                <div class="carousel-item active">
                                    <div class="d-flex justify-content-center">
                                    <div class="img-box rounded-circle d-flex justify-content-center align-items-center bg-naranja sombra-l">
                                        <div class="imgSvg rounded-circle"></div>
                                    </div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                    <div class="caption py-2 text-center">
                                        <template v-if="ingles == 'true'">
                                            <h5>Evelyn Gracias</h5>
                                            <p>My son studies here from maternal and I am very proud of the growth of his abilities and the acquired knowledge. At ABC Bilingual School they are educated with values and there is constant innovation to give our children added value in each activity carried out. See my son move around school as if it were his own home, see him interact with teachers and classmates in a healthy environment, expanding his culture and knowledge. That is priceless.</p>
                                        </template>
                                        <template v-else>
                                            <h5>Evelyn Gracias</h5>
                                            <p>Mi hijo estudia acá desde maternal y me siento muy orgullosa del crecimiento de sus habilidades y el conocimiento adquirido. En ABC Bilingual School se les educa con valores y hay una constante innovación para darles a nuestros hijos valor agregado en cada actividad realizada. Ver a mi hijo moverse en el colegio como si fuera su propia casa, verlo interactuar con maestros y compañeros en un ambiente sano, ampliando su cultura y conocimiento. Eso no tiene precio.</p>
                                        </template>
                                    </div>
                                    </div>
                                </div>
                
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center">
                                    <div class="img-box rounded-circle d-flex justify-content-center align-items-center bg-naranja sombra-l">
                                        <div class="imgSvg rounded-circle"></div>
                                    </div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                    <div class="caption py-2 text-center">
                                        <template v-if="ingles == 'true'">
                                            <h5>Regina Daboub de Miguel</h5>
                                            <p>I love the personalized attention that the school offers, it is a very receptive institution and cares about the well-being as well educational and emotional stability of its students.</p>
                                        </template>
                                        <template v-else>
                                            <h5>Regina Daboub de Miguel</h5>
                                            <p>Me encanta la atención personalizada que ofrece el colegio, es una institución muy receptiva y se preocupa por el bienestar y la estabilidad educativa y emocional de sus alumnos.</p>
                                        </template>
                                    </div>
                                    </div>
                                </div>
                
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center">
                                    <div class="img-box rounded-circle d-flex justify-content-center align-items-center bg-naranja sombra-l">
                                        <div class="imgSvg rounded-circle"></div>
                                    </div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                    <div class="caption py-2 text-center">
                                        <template v-if="ingles == 'true'">
                                            <h5>Karla Elena Giménez</h5>
                                            <p>I hereby recommend ABC School. More than a school, it has been a second home of my three children since 2004. The School has watched them grow! And thought them values. My oldest son graduated from ABC in 2018. I couldn't be more grateful and proud, of The values that the school has thought of my three children. I wish you the best of luck.</p>
                                        </template>
                                        <template v-else>
                                            <h5>Karla Elena Giménez</h5>
                                            <p>Lo recomiendo a ojos cerrados. Más que un colegio es la segunda familia de mis tres hijos desde el 2004. ¡Los han visto crecer! ¡Y ya en el 2018, mi primer hijo graduado del ABC! Orgullosísima de ustedes como institución. Agradecida por el grado de humanidad que existe. ¡Miles de éxitos más!</p>
                                        </template>
                                    </div>                      
                                    </div>
                                </div>
                
                                <div class="carousel-item">
                                    <div class="d-flex justify-content-center">
                                    <div class="img-box rounded-circle d-flex justify-content-center align-items-center bg-naranja sombra-l">
                                        <div class="imgSvg rounded-circle"></div>
                                    </div>
                                    </div>
                                    <div class="d-flex justify-content-center">
                                    <div class="caption py-2 text-center">
                                        <template v-if="ingles == 'true'">
                                            <h5>Jancy Alberto</h5>
                                            <p>My daughter just entered but in so little time she has learned a lot. I am very happy with the staff, they are excellent teachers. They recommended it to me and I recommend it in the same way. Excellent facilities, staff, attention and above all the best education.</p>
                                        </template>
                                        <template v-else>
                                            <h5>Jancy Alberto</h5>
                                            <p>Mi hija recién entró pero en tan poco tiempo ha aprendido bastante. Estoy muy feliz con el personal, son excelentes docentes. A mi me lo recomendaron y yo lo recomiendo de igual forma. Excelentes instalaciones, personal, atención y sobre todo la mejor educación.</p>
                                        </template>
                                    </div>                      
                                    </div>
                                </div>
                            
                            </div>
                            
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </section>
    `,
    props: ['ingles']
})