Vue.component('myvideo',{
    template: /*html*/
    `
    <section class="animalo">
        <div class="container my-5">
            <template v-if="ingles == 'true'">
                <div class="embed-responsive embed-responsive-16by9" style="background-image: url(../img/videoBackIn.jpg); background-position: center;">
                    <div class="visible">
                        <!--<iframe class="embed-responsive-item" src="https://vimeo.com/405312037" allowfullscreen></iframe>-->
                        <iframe class="iframe" src="https://player.vimeo.com/video/405312037" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="embed-responsive embed-responsive-16by9" style="background-image: url(../img/videoBackEs.jpg); background-position: center;">
                    <div class="visible">
                        <!--<iframe class="embed-responsive-item" src="https://vimeo.com/405312037" allowfullscreen></iframe>-->
                        <iframe class="iframe" src="https://player.vimeo.com/video/405312037" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                </div>
            </template>
        </div>
    </section>
    `,
    props: ['ingles']
})