Vue.component('slider',{
    template:/*html*/
    `
    <section id="My-Slider" class="carousel slide carousel-fade" data-ride="carousel">
    
        <ol class="carousel-indicators">
            <li data-target="#My-Slider" data-slide-to="0" class="active"></li>
            <li data-target="#My-Slider" data-slide-to="1"></li>
            <li data-target="#My-Slider" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">

            <!-- Slider 1-->
            <div class="carousel-item active" style="background-image:url('img/slider/slider_1.jpg')">
                <!--<img src="img/slider_1.jpg" class="d-block w-100" alt="...">-->
                <div class="mask"></div>
                <!--<div class="carousel-caption d-none d-sm-block">-->
                <div class="container texto-carrusel">
                    <template v-if="ingles == 'true'">
                        <p class="display-3 font-weight-bold animated fadeInDown delay-1s">They are the most important.</p>
                        <p class="h3 animated fadeIn delay-2s">More than 35 years of building values for a better world.</p>
                    </template>
                    <template v-else>
                        <p class="display-3 font-weight-bold animated fadeInDown delay-1s">Ellos son lo más Importante.</p>
                        <p class="h3 animated fadeIn delay-2s">Más de 35 años de construir valores para un mundo mejor.</p>
                    </template>
                </div>
            </div>

            <!-- Slider 2-->
            <div class="carousel-item"  style="background-image:url('img/slider/slider_2.jpg')">
                <!--<img src="img/slider_2.jpg" class="d-block w-100" alt="...">-->
                <div class="mask"></div>
                <!--<div class="carousel-caption d-none d-sm-block">-->
                <div class="container texto-carrusel">
                <template v-if="ingles == 'true'">
                    <p class="display-3 font-weight-bold animated fadeInDown delay-1s">We educate with Values.</p>
                    <p class="h3 animated fadeIn delay-2s">We pride ourselves on our personalized education.</p>
                </template>
                <template v-else>
                    <p class="display-3 font-weight-bold animated fadeInDown delay-1s">Educamos con Valores.</p>
                    <p class="h3 animated fadeIn delay-2s">Nos enorgullecemos de nuestra educación personalizada.</p>
                </template>
                </div>
            </div>

            <!-- Slider 3-->
            <div class="carousel-item"  style="background-image:url('img/slider/slider_3.jpg')">
                <!--<img src="img/slider_3.jpg" class="d-block w-100" alt="...">-->
                <div class="mask"></div>
                <!--<div class="carousel-caption d-none d-sm-block">-->
                <div class="container texto-carrusel-3">
                <template v-if="ingles == 'true'">
                    <p class="display-3 font-weight-bold animated fadeInRight delay-1s">Equality for all.</p>
                    <p class="h3 animated fadeIn delay-2s">We promote respect and equality, "STOP bullying".</p>
                </template>
                <template v-else>
                    <p class="display-3 font-weight-bold animated fadeInRight delay-1s">Igualdad para todos.</p>
                    <p class="h3 animated fadeIn delay-2s">Fomentamos el respeto y la igualdad, "ALTO al bullying".</p>
                </template>
                </div>
            </div>

        </div>

        <a class="carousel-control-prev" href="#My-Slider" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#My-Slider" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

    </section>
    `,
    props: [ 'ingles' ]
});