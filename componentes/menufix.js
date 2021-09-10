Vue.component('menufix',{
    template:/*html*/
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-blanco" id="navbar-fixed">
        <template v-if="ingles == 'true'">
            <Menu traducir="true" menuFix="true"></Menu>
        </template>
        <template v-else>
            <Menu traducir="false" menuFix="true"></Menu>
        </template>
    </nav>
    `,
    props: ['ingles']
});