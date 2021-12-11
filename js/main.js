import accueil from "./components/accueil.js"
import lecteur from "./components/lecteur.js"

const app = {

    // components
    components: {
        "accueil": accueil,
        "lecteur": lecteur,
    },

    // data
    data() {
        return {
            page: "accueil",
            lecteur: null,
        }
    },




    // methodes
    methods: {

        // methode change de page quand click sur bouton "voir le lecteur de musique"
        changerPage(nouvelle_page, infos_page) {
            this.page = nouvelle_page
            this.infos = infos_page
        },
    },
}

Vue.createApp(app).mount("#app")