Vue.component('fecha', {
    template: /*html*/
    `
    <div class="col pb-3 animalo">
        <a :href="url" class="venobox" data-gall="myGallery">
            <img :src="url" class="img-fluid card sombra"/>
        </a>
    </div>
    `,
    props: ['url']
})