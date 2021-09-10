Vue.component('itemsmenu', {
    template:/*html*/
    `
    <div class="container">

        <a class="navbar-brand" href="#">
            <img class="abc-logo" src="img/logos/abc-logo.jpg" alt="ABC Bilingual School El Salvador">
            <span class="texto-brand">ABC Bilingual School</span>
        </a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> {{menu}}
        </button>
            
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a :href="url0" class="nav-link link-inicio">{{item0}}</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle link-conocenos" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{item1}}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item link-institucion" :href="url1">{{item2}}</a>
                        <a class="dropdown-item link-personal v-onLine" :href="url2">{{item3}}</a>
                        <a class="dropdown-item link-escolar v-onLine" :href="url3">{{item4}}</a>
                        <hr>
                        <!-- <a class="dropdown-item link-menu" :data-lightbox="imgitem" :href="url4">{{item5}}</a> -->
                        <a class="dropdown-item link-menu" href="" data-toggle="modal" data-target="#menuModal">{{item5}}</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle link-informacion" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{item6}}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item link-circulares" aria-disabled="true" :href="url5">{{item7}}</a>
                        <a class="dropdown-item link-fechas" :href="url6">{{item8}}</a>
                        <hr>
                        <a class="dropdown-item" target="_blank" :href="url7">{{item9}}</a>
                        <a class="dropdown-item" target="_blank" :href="url8">{{item10}}</a>
                        <a class="dropdown-item" target="_blank" :href="url9">{{item11}}</a>
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link link-contact" :href="url10">{{item12}}</a></li>
            </ul>
        </div>

    </div>
    `,
    props: ['menu','item0','item1','item2','item3','item4','item5','item6','item7','item8','item9','item10','item11','item12',
            'url0','url1','url2','url3','url4','url5','url6','url7','url8','url9','url10','imgitem']

})