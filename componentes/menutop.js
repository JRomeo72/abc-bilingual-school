Vue.component('menutop',{
    template: /*html*/
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-blanco" id="navbar-top">
        <template v-if="ingles == 'true'">
            <Menu traducir="true" menuFix="false"></Menu>
        </template>
        <template v-else>
            <Menu traducir="false" menuFix="false"></Menu>
        </template>
    </nav>
    `,
    props: ['ingles']
})