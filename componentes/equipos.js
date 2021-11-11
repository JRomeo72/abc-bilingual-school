Vue.component('equipos',{
    template: /*html*/
    `
    <section id="equipo" class="container my-section team-section pt-4 v-onLine">
        <div Class="text-center">

            <template v-if="ingles == 'true'">
                <h2 Class="h2 titulo-seccion">Our Team</h2>
            </template>
            <template v-else>
                <h2 Class="h2 titulo-seccion">Nuestro Equipo</h2>
            </template>

            <p Class="parrafo-seccion"></p>
        </div>

        <h4 class="my-4 text-center sub-titulo-seccion">{{title}}</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">

            <div v-for="equipo in equipos" :key="equipo.id" class="col mb-4 animalo">
                <!-- Card -->
                <div class="card h-100">

                    <!--Card image-->
                    <div class="view overlay">
                        <img class="card-img-top" :src="equipo.link" alt="Card image cap">
                        <a href="#!">
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
        
                    <!--Card content-->
                    <div class="card-body">
                    
                        <template v-if="ingles == 'true'">
                            <!--Title-->
                            <div style="height: 55%;">
                                <h5 class="card-title text-center">{{equipo.nombre}}</h5>
                            </div>
                            <!--Text-->
                            <div style="height: 45%;" class="d-flex justify-content-center align-items-end">
                                <p class="card-text text-center">{{equipo.position}}</p>
                                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                            </div>
                        </template>
                        <template v-else>
                            <!--Title-->
                            <div style="height: 55%;">
                                <h5 class="card-title text-center">{{equipo.nombre}}</h5>
                            </div>
                            <!--Text-->
                            <div style="height: 45%;" class="d-flex justify-content-center align-items-end">
                                <p class="card-text text-center">{{equipo.cargo}}</p>
                                <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                            </div>
                        </template>
                
                    </div>
            
                </div>
                <!-- Card -->
            </div>


        </div>
        <template v-if="id == 'true'">
            <template v-if="ingles == 'true'">
                <p class="mb-4 d-flex justify-content-center animalo pt-4"><a href="pre-school.html" class="btn btn-rounded bg-naranja text-white px-4 py-3">School Staff</a></p>
            </template>
            <template v-else>
                <p class="mb-4 d-flex justify-content-center animalo pt-4"><a href="parvularia.html" class="btn btn-rounded bg-naranja text-white px-4 py-3">Todo el Equipo</a></p>
            </template>
        </template>
    </section>
    `,
    data(){
        return{
            equipos: []
        }
    },
    methods: {
        getEquipos(){

            switch(this.set_equipo){
                case "admin" :
                    this.equipos.push (
                        {"nombre":"Mrs. Verónica Jordan Moore", "cargo":"PRESIDENTA JUNTA DIRECTIVA","position":"PRESIDENT BOARD OF DIRECTORS","link":"../img/equipo/ad_01.jpg"},
                        {"nombre":"Mrs. Valeria Walsh de Arias", "cargo":"DIRECTORA GENERAL","position":"PRINCIPAL","link":"../img/equipo/ad_02.jpg"},
                        {"nombre":"Mrs. Margarita S. de Maldonado", "cargo":"DIRECTORA ACADÉMICA","position":"ACADEMIC DIRECTOR","link":"../img/equipo/ad_03.jpg"},
                        {"nombre":"Mrs. Violeta de Portillo", "cargo":"COORDINADORA GENERAL","position":"GENERAL COORDINATOR","link":"../img/equipo/ad_04.jpg"},
                        // {"nombre":"Mrs. Paola Cuellar de Jule", "cargo":"COORDINADORA DE PRIMARIA","position":"ELEMENTARY SCHOOL COORDINATOR","link":"../img/equipo/ad_05.jpg"},
                        {"nombre":"Mr. Carlos Zavaleta", "cargo":"CONTADOR","position":"ACCOUNTANT","link":"../img/equipo/ad_06.jpg"},
                        {"nombre":"Ms. Elsy de Ramírez", "cargo":"ASISTENTE ADMINISTRATIVA","position":"ADMINISTRATIVE ASSISTANT","link":"../img/equipo/ad_07.jpg"}
                    );
                break;

                case "parvu" :
                    this.equipos.push (
                        {"nombre":"Ms. Lisa Reneé García Pineda", "cargo":"PREMATERNAL","position":"NURSERY","link":"../img/equipo/pa_Lisa_Renee_Garcia_Pineda.jpg"},
                        {"nombre":"Ms. Marcela Rodríguez", "cargo":"MATERNAL","position":"EARLY CHILDHOOD","link":"../img/equipo/pa_Marcela_Rodriguez.jpg"},
                        {"nombre":"Ms. Adriana Somoza", "cargo":"PRE KINDER A","position":"PREKINDER A","link":"../img/equipo/pa_Adriana_Somoza.jpg"},
                        {"nombre":"Ms. Gabriela Mira", "cargo":"PRE KINDER B","position":"PREKINDER B","link":"../img/equipo/pa_Gabriela_Mira.jpg"},
                        {"nombre":"Mrs. Erika Salinas", "cargo":"KINDER A","position":"KINDER A","link":"../img/equipo/pa_Erika_Salinas.jpg"},
                        {"nombre":"Ms. Adriana Avelar", "cargo":"KINDER B","position":"KINDER B","link":"../img/equipo/pa_Adriana_Avelar.jpg"},
                        {"nombre":"Ms. María José Rengifo", "cargo":"PREPARATORIA A","position":"PREPARATORY A","link":"../img/equipo/pa_Maria_Jose_Rengifo.jpg"},
                        {"nombre":"Ms. Iliana Guzmán", "cargo":"PREPARATORIA B","position":"PREPARATORY B","link":"../img/equipo/pa_Iliana_Guzman.jpg"},
                        {"nombre":"Ms. Gabriela Araujo", "cargo":"ASIST. DE PRE KINDER A Y B","position":"PREKINDER A & B ASSISTANT","link":"../img/equipo/pa_Gabriela_Araujo.jpg"},
                        {"nombre":"Ms. Mayra Alas", "cargo":"ASISTENTE DE KINDER A","position":"KINDER A ASSISTANT","link":"../img/equipo/pa_Mayra_Alas.jpg"},
                        {"nombre":"Ms. Michelle Ayala", "cargo":"ASISTENTE DE KINDER B","position":"KINDER B ASSISTANT","link":"../img/equipo/pa_Michelle_Ayala.jpg"},
                        {"nombre":"Ms. Gabriela Toledo", "cargo":"ASIST. DE PREPARATORIA A Y B","position":"PREPARATORY A & B ASSISTANT","link":"../img/equipo/pa_Gabriela_Toledo.jpg"}
                    );
                break;

                case "prima" :
                    this.equipos.push (
                        // {"nombre":"Mrs. Auxiliadora Melhado", "cargo":"1º GRADO A","position":"1st GRADE A","link":"../img/equipo/pr_Auxiliadora_Melhado.jpg"},
                        {"nombre":"Mrs. Alejandra de Salgado", "cargo":"1º GRADO B","position":"1st GRADE B","link":"../img/equipo/pr_Alejandra_de_Salgado.jpg"},
                        {"nombre":"Mrs. Tatiana de Portillo", "cargo":"2º GRADO A","position":"2nd GRADE A","link":"../img/equipo/pr_Tatiana_de_Portillo.jpg"},
                        {"nombre":"Ms. Valeria Peña", "cargo":"2º GRADO B","position":"2nd GRADE B","link":"../img/equipo/pr_Valeria_Pena.jpg"},
                        {"nombre":"Mrs. Carmen Torres", "cargo":"3º GRADO","position":"3rd GRADE","link":"../img/equipo/pr_Carmen_Torres.jpg"},
                        {"nombre":"Mrs. María Eugenia de Calderón", "cargo":"4º GRADO","position":"4th GRADE","link":"../img/equipo/pr_Maria_Eugenia_de_Calderon.jpg"},
                        {"nombre":"Mrs. María Begoña González", "cargo":"5º GRADO","position":"5th GRADE","link":"../img/equipo/pr_Maria_Begona_Gonzalez.jpg"},
                        {"nombre":"Mr. Leonidas Fernández", "cargo":"DEPORTE","position":"PHYSICAL EDUCATION","link":"../img/equipo/pr_Leonidas_Fernandez.jpg"},
                        {"nombre":"Mr. Carlos Revolorio", "cargo":"MÚSICA","position":"MUSIC","link":"../img/equipo/se_Carlos_Revolorio.jpg"},
                        {"nombre":"Mrs. Marielos de Walsh", "cargo":"ARTE","position":"ART","link":"../img/equipo/se_Marielos_de_Walsh.jpg"}
                        
                        // {"nombre":"Mrs. Paola Cuellar de Jule", "cargo":"1º GRADO B","position":"1st GRADE B","link":"../img/equipo/ad_05.jpg"},
                        
                    );
                break;

                case "secun" :
                    this.equipos.push (
                        {"nombre":"Mr. Carlos Revolorio", "cargo":"6º GRADO","position":"6th GRADE","link":"../img/equipo/se_Carlos_Revolorio.jpg"},
                        {"nombre":"Ms. Verónica Martínez", "cargo":"7º GRADO","position":"7th GRADE","link":"../img/equipo/se_Veronica_Martinez.jpg"},
                        {"nombre":"Mrs. Ana Regina Miranda", "cargo":"8º GRADO","position":"8th GRADE","link":"../img/equipo/se_Ana_Regina_Miranda.jpg"},
                        {"nombre":"Mr. Guillermo Torres", "cargo":"9º GRADO","position":"9th GRADE","link":"../img/equipo/se_Guillermo_Torres.jpg"},
                        {"nombre":"Mr. David Bayona", "cargo":"10º GRADO / COMPUTACIÓN","position":"10th GRADE / COMPUTER SCIENCE","link":"../img/equipo/se_David_Bayona.jpg"},
                        {"nombre":"Mr. Ludwing Portillo", "cargo":"11º GRADO","position":"11th GRADE","link":"../img/equipo/se_Ludwing_Portillo.jpg"},
                        {"nombre":"Mrs. Ana Gertrudis de Barrera", "cargo":"12º GRADO","position":"12th GRADE","link":"../img/equipo/se_Ana_Gertrudis_de_Barrera.jpg"},
                        {"nombre":"Ms. Luz Cáceres", "cargo":"MAESTRA DE FRANCES","position":"FRENCH TEACHER","link":"../img/equipo/se_Luz_Caceres.jpg"},
                        {"nombre":"Mr. Irvin Avila", "cargo":"MAESTRO DE FRANCES","position":"FRENCH TEACHER","link":"../img/equipo/se_Irvin_Avila.jpg"},
                        {"nombre":"Mrs. Marielos de Walsh", "cargo":"ARTE","position":"ART","link":"../img/equipo/se_Marielos_de_Walsh.jpg"}
                        // {"nombre":"Mrs. Nancy Romualdo", "cargo":"9º GRADO","position":"9th GRADE","link":"../img/equipo/se_04.jpg"},
                        // {"nombre":"Mrs. Martha Evelyn Dalmau", "cargo":"11º GRADO","position":"11th GRADE","link":"../img/equipo/se_06.jpg"},
                        // {"nombre":"Mrs. Jackeline Coreas", "cargo":"MAESTRA DE FRANCES","position":"FRENCH TEACHER","link":"../img/equipo/se_08.jpg"}
                    );
                break;

                case "nivela" :
                    this.equipos.push (
                        {"nombre":"Ms. Gabriela Cuellar", "cargo":"CICLO IA","position":"LAVEL IA","link":"../img/equipo/an_Gabriela_Cuellar.jpg"},
                        {"nombre":"Ms. Ingrid Aguilera", "cargo":"CICLO IB","position":"LAVEL IB","link":"../img/equipo/an_Ingrid_Aguilera.jpg"},
                        {"nombre":"Mrs. Galia Merino", "cargo":"CICLO IIA","position":"LAVEL IIA","link":"../img/equipo/an_Galia_Merino.jpg"},
                        {"nombre":"Mrs. Ariana Leonor Parrillas Rivera", "cargo":"CICLO IIB","position":"LAVEL IIB","link":"../img/equipo/an_Ariana_Leonor_Parrillas_Rivera.jpg"},
                        
                        {"nombre":"Mrs. Zuleima Navarro de Vigil", "cargo":"CICLO III","position":"LAVEL III","link":"../img/equipo/an_Zuleima_Navarro_de_Vigil.jpg"},
                        // {"nombre":"Ms. Fabiola Peña", "cargo":"PARVULARIA","position":"PARVULARY","link":"../img/equipo/an_06.jpg"},
                        // {"nombre":"Ms. Paola Moreno", "cargo":"AUXILIAR","position":"ASSISTANT","link":"../img/equipo/an_07.jpg"}
                        {"nombre":"Ms. Eugenia González", "cargo":"ASISTENTE CICLO IB","position":"LAVEL IB ASSISTANT","link":"../img/equipo/an_Eugenia_Gonzalez.jpg"}
                    );
                break;
            }

            /*axios.get(this.set_equipo).then( response => {
                this.equipos = response.data
            })*/
            
        }
    },
    mounted() {
        this.getEquipos();
    },
    props:['ingles','title','set_equipo','id']

})