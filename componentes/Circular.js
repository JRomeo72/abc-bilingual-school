Vue.component('Circular', {
    template: /*html*/
    `
    <div class="col pb-3 animalo" v-if="img == 'true'">
        <a :href="url" class="venobox" data-gall="myGallery">
            <img :src="url" class="img-fluid card sombra"/>
        </a>
    </div>
    <div class="col pb-3 animalo" v-else>
        <a :href="doc"  target="_blank">
            <img :src="url" class="img-fluid card sombra"/>
        </a>
    </div>
    `,
    props: ['url','img','doc']
})