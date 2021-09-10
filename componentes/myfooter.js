Vue.component('myfooter',{
    template: /*html*/
    `   <footer>
            <div class="container-fluid seccion-footer">

                <div class="container">

                    <div class="row">

                        <template v-if="ingles == 'true'">

                            <widget1 ingles="true"></widget1>
                            <widget2 ingles="true"></widget2>

                                <template v-if="pagina == 1">
                                    <widget3 ingles="true" link1="#" link2="#conocenos" link3="#equipo" link4="school-life.html" link5="contact.html"></widget3>
                                </template>
                                <template v-if="pagina == 2">
                                    <widget3 ingles="true" link1="home.html" link2="#conocenos" link3="administration.html" link4="school-life.html" link5="contact.html"></widget3>
                                </template>
                                <template v-if="pagina == 3">
                                    <widget3 ingles="true" link1="home.html" link2="institution.html" link3="#equipo" link4="school-life.html" link5="contact.html"></widget3>
                                </template>
                                <template v-if="pagina == 4">
                                    <widget3 ingles="true" link1="home.html" link2="institution.html" link3="administration.html" link4="#vida-escolar" link5="contact.html"></widget3>
                                </template>
                                <template v-if="pagina == 5">
                                    <widget3 ingles="true" link1="home.html" link2="institution.html" link3="administration.html" link4="school-life.html" link5="contact.html"></widget3>
                                </template>
                                <template v-if="pagina == 6">
                                    <widget3 ingles="true" link1="home.html" link2="institution.html" link3="administration.html" link4="school-life.html" link5="#contactanos"></widget3>
                                </template>

                            <widget4 ingles="true"></widget4>
                    
                        </template>

                        <template v-else>

                            <widget1 ingles="false"></widget1>
                            <widget2 ingles="false"></widget2>

                                <template v-if="pagina == 1">
                                    <widget3 ingles="false" link1="#" link2="#conocenos" link3="#equipo" link4="vida-escolar.html" link5="contactanos.html"></widget3>
                                </template>
                                <template v-if="pagina == 2">
                                    <widget3 ingles="false" link1="/" link2="#conocenos" link3="administracion.html" link4="vida-escolar.html" link5="contactanos.html"></widget3>
                                </template>
                                <template v-if="pagina == 3">
                                    <widget3 ingles="false" link1="/" link2="institucion.html" link3="#equipo" link4="vida-escolar.html" link5="contactanos.html"></widget3>
                                </template>
                                <template v-if="pagina == 4">
                                    <widget3 ingles="false" link1="/" link2="institucion.html" link3="administracion.html" link4="#vida-escolar" link5="contactanos.html"></widget3>
                                </template>
                                <template v-if="pagina == 5">
                                    <widget3 ingles="false" link1="/" link2="institucion.html" link3="administracion.html" link4="vida-escolar.html" link5="contactanos.html"></widget3>
                                </template>
                                <template v-if="pagina == 6">
                                    <widget3 ingles="false" link1="/" link2="institucion.html" link3="administracion.html" link4="vida-escolar.html" link5="#contactanos"></widget3>
                                </template>

                            <widget4 ingles="false"></widget4>
                    
                        </template>


                    </div>

                    <widget5></widget5>

                </div>



            </div>
        </footer>
    `,
    components:{
        widget1,
        widget2,
        widget3,
        widget4,
        widget5
    },
    props: ['ingles','pagina']
});