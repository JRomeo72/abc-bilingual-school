Vue.component('reapertura',{
    template: /*html*/
    `
    <div class="reapertura">
        <a :href="page" target="_blank">
            <template v-if="ingles == 'true'">
            <img src="./img/reapertura.png" class="soon"/>
            </template>
            <template v-else>
            <img src="./img/reapertura.png" class="soon"/>
            </template>
        </a>
    </div>
    `,
    props:['page','ingles']
})