Vue.component('buttonfloat',{
    template: /*html*/
    `
    <div class="buttonfloat">
        <a :href="page">
            <template v-if="ingles == 'true'">
                <img src="./img/el-salvador.png" class="flag"/>
            </template>
            <template v-else>
                <img src="./img/usa.png" class="flag"/>
            </template>
        </a>
    </div>
    `,
    props:['page','ingles']
})