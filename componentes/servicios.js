Vue.component('servicios',{
    template:/*html*/
    `
    <section class="row no-gutters services-section bg-light">
    
    <!--SECCION 1-->
    <div class="col-sm-12 col-md-6 col-lg-3 bg-rojo animalo" data-animate-effect="fadeInUp">

        <a href="#" class="link-1">
            <div class="p-4 w-100 h-100">

                <div class="d-flex justify-content-center">
                    <div class="icono bg-blanco sombra-l">
                        <i class="far fa-newspaper"></i>
                    </div>
                </div>

                <template v-if="ingles == 'true'">
                    <h4 class="text-white text-center">Circulars and monthly newsletter</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Our monthly newsletter as well as the communications contain or have important information. We invite you to read them!</p>
                </template>
                <template v-else>
                    <h4 class="text-white text-center">Circulares y Boletín mensual</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Nuestro boletín informativo mensual y todas las circulares contienen información importante de las actividades que se desarrollan en el colegio. ¡Los invitamos a estar pendientes!.</p>
                </template>

            </div>
        </a>

    </div>
    
    <!--SECCION 2-->
    <div class="col-sm-12 col-md-6 col-lg-3 bg-naranja animalo" data-animate-effect="fadeInUp">

        <a href="" class="link-2" data-toggle="modal" data-target="#menuModal">
            <div class="p-4 w-100 h-100">

                <div class="d-flex justify-content-center">
                    <div class="icono bg-blanco sombra-l">
                    <i class="fas fa-mug-hot"></i>
                    </div>
                </div>

                <template v-if="ingles == 'true'">
                    <h4 class="text-white text-center">Cafeteria Menu</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Every week we offer a delicious variety of healthy food and snacks for our students.</p>
                </template>
                <template v-else>
                    <h4 class="text-white text-center">Menú de Cafetería</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Todas las semanas ofrecemos una deliciosa variedad de comida saludable para el almuerzo de sus hijos. Le recordamos que además tenemos a la venta refrigerios.</p>
                </template>

            </div>
        </a>

    </div>

    <!--SECCION 3-->
    <div class="col-sm-12 col-md-6 col-lg-3 bg-azul animalo" data-animate-effect="fadeInUp">

        <a href="fechas-importantes.html" class="link-3">
            <div class="p-4 w-100 h-100">

                <div class="d-flex justify-content-center">
                    <div class="icono bg-blanco sombra-l">
                    <i class="far fa-calendar-alt"></i>
                    </div>
                </div>

                <template v-if="ingles == 'true'">
                    <h4 class="text-white text-center">Important dates</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Monthly we share important dates for parents and students of the different activities that take place in the school.</p>
                </template>
                <template v-else>
                    <h4 class="text-white text-center">Fechas Importantes</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Mes a mes les compartimos las fechas importantes para que como padres de familia estén pendientes de las actividades de sus hijos.</p>
                </template>
            
            </div>
        </a>

    </div>

    <!--SECCION 4-->
    <div class="col-sm-12 col-md-6 col-lg-3 bg-rojo animalo" data-animate-effect="fadeInUp">

        <a href="vida-escolar.html" class="link-4">
            <div class="p-4 w-100 h-100">

                <div class="d-flex justify-content-center">
                    <div class="icono bg-blanco sombra-l">
                    <i class="fas fa-user-graduate"></i>
                    </div>
                </div>

                <template v-if="ingles == 'true'">
                    <h4 class="text-white text-center">School life</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">We invite you to see our school activities.</p>
                </template>
                <template v-else>
                    <h4 class="text-white text-center">Vida Escolar</h4>
                    <hr class="bg-light">
                    <p class="text-white text-center">Lo invitamos a ver el día a día de sus hijos y sus actividades dentro de nuestra institución a través de las fotos de vida escolar.</p>
                </template>

            </div>
        </a>

    </div>

</section>
    `,
    props: [ 'ingles' ]
});