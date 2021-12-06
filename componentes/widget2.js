let widget2 = {
    template:/*html*/`

    <div class="col-sm-6 col-lg-3 mb-5 animalo retardo-1">
        <div class="block-2">

            <template v-if="ingles == 'true'">
                <h3 class="block-title">Latest News</h3>
            </template>
            <template v-else>
                <h3 class="block-title">Últimas Circulares</h3>
            </template>

            <div class="mb-3 d-flex">

                <a href="img/circulares/circular-04.jpg" data-lightbox="image-1">
                    <img src="img/circulares/circular-04.jpg" alt="" class="card-img-top">
                </a>

                <div class="content-info">

                    <a href="img/circulares/circular-04.jpg" data-lightbox="image-2">
                        <template v-if="ingles == 'true'">
                            No Bullying T-Shirt
                        </template>
                        <template v-else>
                            Camiseta No Bullying
                        </template>
                    </a>
                
                    <div class="meta mt-2">
                        <div><a href=""><i class="icon far fa-calendar-alt"></i> Ago 27, 2021</a></div>
                        <div><a href=""><i class="icon fas fa-user-alt"></i> Admin</a></div>
                        <div><a href=""><i class="icon far fa-comment-alt"></i> 19</a></div>
                    </div>
                </div>
                
            </div>

            <div class="d-flex">

                <a href="" data-toggle="modal" data-target="#menuModal">
                    <img src="img/menu-cafeteria.jpg" alt="" class="card-img-top">
                </a>

                <div class="content-info">

                    <a href="" data-toggle="modal" data-target="#menuModal">
                        <template v-if="ingles == 'true'">
                            Menu from December 6 to 10
                        </template>
                        <template v-else>
                            Menú del 6 al 10 de dic.
                        </template>
                    </a>

                    <div class="meta mt-2">
                        <div><a href=""><i class="icon far fa-calendar-alt"></i> December 6, 2021</a></div>
                        <div><a href=""><i class="icon fas fa-user-alt"></i> Admin</a></div>
                        <div><a href=""><i class="icon far fa-comment-alt"></i>19</a></div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
    `,
    props: ['ingles']
}