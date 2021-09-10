let widget5 = {
    template:
    /*html*/`

            <div class="row">
                <div class="col-md-12 text-center text-copyright">
                    <p Class="animalo retardo-6" data-animate-effect="fadeIn">
                    Copyright &copy; {{ obtenerFecha }} | Design4Me | Bootstrap Responsive Web Design.
                    </p>
                </div>
            </div>

    `,

    computed: {
        obtenerFecha() {
            let date = new Date()
            let year = date.getFullYear()
            return year
        }
    }
}