Vue.component('menubottom',{
    template:/*html*/
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-eq">
        <div class="container justify-content-start">
            <a class="navbar-brand" href="#"></a>

            <template v-if="ingles == 'true'">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> Menu
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link link-admin" href="administration.html">Administration</a>
                    <a class="nav-item nav-link link-parvu" href="pre-school.html">Preschool</a>
                    <a class="nav-item nav-link link-prima" href="middle-school.html">Primary School</a>
                    <a class="nav-item nav-link link-secun" href="high-school.html" >High School</a>
                    <a class="nav-item nav-link link-nivel" href="development-center.html" >Development Center</a>
                    </div>
                </div>
            </template>
            <template v-else>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span> Menú
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link link-admin" href="administracion.html">Administración</a>
                    <a class="nav-item nav-link link-parvu" href="parvularia.html">Parvularia</a>
                    <a class="nav-item nav-link link-prima" href="primaria.html">Primaria</a>
                    <a class="nav-item nav-link link-secun" href="secundaria.html" >Secundaria</a>
                    <a class="nav-item nav-link link-nivel" href="aula-de-nivelacion.html" >Aula de Nivelación</a>
                    </div>
                </div>
            </template>

        </div>

    </nav>
    `,
    props: ['ingles']
})