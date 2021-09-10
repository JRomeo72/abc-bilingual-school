Vue.component('Menu', {
    template: /*html */
    `<div style="width:100%;">
        <template v-if="traducir == 'true'">
            <template v-if="menuFix == 'true'">
                <itemsmenu
                    menu="Menu"
                    item0="Home"
                    item1="About us"
                    item2="Institution"
                    item3="Our team"
                    item4="School life"
                    item5="Cafeteria Menu"
                    item6="Information"
                    item7="Newsletter"
                    item8="Important dates"
                    item9="ABC Manual 2021"
                    item10="Teams Manual"
                    item11="Calendar 2021-2022"
                    item12="Contact us"
                    url0="home.html"
                    url1="institution.html"
                    url2="administration.html"
                    url3="school-life.html"
                    url4="img/menu-cafeteria.jpg"
                    url5="newsletter.html"
                    url6="important-dates.html"
                    url7="documents/Manual-de-convivencia-2021-2022.pdf"
                    url8="documents/Manual-Teams.pdf"
                    url9="documents/Calendario-2021-2022.pdf"
                    url10="contact.html"
                    imgitem="img-item-1a"
                ></itemsmenu>
            </template>
            <template v-else>
                <itemsmenu
                    menu="Menu"
                    item0="Home"
                    item1="About us"
                    item2="Institution"
                    item3="Our team"
                    item4="School life"
                    item5="Cafeteria Menu"
                    item6="Information"
                    item7="Newsletter"
                    item8="Important dates"
                    item9="ABC Manual 2021"
                    item10="Teams Manual"
                    item11="Calendar 2021-2022"
                    item12="Contact us"
                    url0="home.html"
                    url1="institution.html"
                    url2="administration.html"
                    url3="school-life.html"
                    url4="img/menu-cafeteria.jpg"
                    url5="newsletter.html"
                    url6="important-dates.html"
                    url7="documents/Manual-de-convivencia-2021-2022.pdf"
                    url8="documents/Manual-Teams.pdf"
                    url9="documents/Calendario-2021-2022.pdf"
                    url10="contact.html"
                    imgitem="img-item-1b"
                ></itemsmenu>
            </template>
        </template>
        <template v-else>
            <template v-if="menuFix == 'true'">
                <itemsmenu
                    menu="Menú"
                    item0="Inicio"
                    item1="Conócenos"
                    item2="Institución"
                    item3="Personal"
                    item4="Vida Escolar"
                    item5="Menú Cafetería"
                    item6="Informacíon"
                    item7="Circulares"
                    item8="Fechas Importantes"
                    item9="Manual ABC 2021"
                    item10="Manual Teams"
                    item11="Calendario 2021-2022"
                    item12="Contáctanos"
                    url0="/"
                    url1="institucion.html"
                    url2="administracion.html"
                    url3="vida-escolar.html"
                    url4="img/menu-cafeteria.jpg"
                    url5="circulares.html"
                    url6="fechas-importantes.html"
                    url7="documents/Manual-de-convivencia-2021-2022.pdf"
                    url8="documents/Manual-Teams.pdf"
                    url9="documents/Calendario-2021-2022.pdf"
                    url10="contactanos.html"
                    imgitem="img-item-1a"
                ></itemsmenu>
            </template>
            <template v-else>
                <itemsmenu
                    menu="Menú"
                    item0="Inicio"
                    item1="Conócenos"
                    item2="Institución"
                    item3="Personal"
                    item4="Vida Escolar"
                    item5="Menú Cafetería"
                    item6="Informacíon"
                    item7="Circulares"
                    item8="Fechas Importantes"
                    item9="Manual ABC 2021"
                    item10="Manual Teams"
                    item11="Calendario 2021-2022"
                    item12="Contáctanos"
                    url0="/"
                    url1="institucion.html"
                    url2="administracion.html"
                    url3="vida-escolar.html"
                    url4="img/menu-cafeteria.jpg"
                    url5="circulares.html"
                    url6="fechas-importantes.html"
                    url7="documents/Manual-de-convivencia-2021-2022.pdf"
                    url8="documents/Manual-Teams.pdf"
                    url9="documents/Calendario-2021-2022.pdf"
                    url10="contactanos.html"
                    imgitem="img-item-1b"
                ></itemsmenu>
            </template>
    </div>
    `,
    props:['traducir', 'menuFix']
})