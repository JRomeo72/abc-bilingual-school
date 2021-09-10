Vue.component('myparallax',{
    template:/*html*/
    `
    <section class="view jarallax" style="height: 500px;">
        <img class="jarallax-img" src="img/bg_1.jpg" alt="">
        
        <div class="mask rgba-black-light">
            <div class="container flex-center text-center">
                <div class="row mt-5">

                    <template v-if="ingles == 'true'">
                        <div class="col-md-9 wow fadeIn mb-3 text-box-parallax">
                            <h1 class="text-white font-weight-bold mb-2 wow fadeInDown" data-wow-delay="0.5s">We teach your child with love and respect.</h1>
                            <p class="parrafo text-white wow fadeIn" data-wow-delay="1s">Respect and love for our students is what defines us as integral educators in our society.</p>
                        </div>
                        <div class="col-md-3 d-flex align-items-center">
                            <p><a href="school-life.html" class="btn btn-rounded bg-naranja text-white px-4 py-3 wow fadeIn" data-wow-delay="2s">School Life</a></p>
                        </div>
                    </template>

                    <template v-else>
                        <div class="col-md-9 wow fadeIn mb-3 text-box-parallax">
                            <h1 class="text-white font-weight-bold mb-2 wow fadeInDown" data-wow-delay="0.5s">Enseñamos a su hijo con Amor y Respeto.</h1>
                            <p class="parrafo text-white wow fadeIn" data-wow-delay="1s">
                                El respeto y el amor hacia nuestros alumnos, es lo que nos define como educadores integrales en nuestra sociedad.
                            </p>
                        </div>
                        <div class="col-md-3 d-flex align-items-center">
                            <p><a href="vida-escolar.html" class="btn btn-rounded bg-naranja text-white px-4 py-3 wow fadeIn" data-wow-delay="2s">Vida Escolar</a></p>
                        </div>
                    </template>

                </div>
            </div>
        </div>
    </section>
    `,
    props: ['ingles']
})