import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",


    // data
    data() {
        return {
            audio: new Audio(),
            musiques: [],
            class_active: false,
            chanson: null,
            image: "",
            temps: "0",
            avancement_temps: "0",
            tags: [],
            tag: "",
            jouer: true,
        }
    },

    // dès l'ouverture du navigateur
    mounted() {
        // va chercher l'info dans le tableau json
        fetch("chansons.json").then(resp => {
            resp.json().then(contenu_json => {
                this.musiques = contenu_json
            })
        })



    },


    // methodes
    methods: {

        // methode pour filtrer les chansons dans le tableau
        filtrerMusique(une_chanson) {
            // if (une_chanson.temps < 100) {
            //     return false
            // }
            return true
        },

        retourneChanson(choix) {
            this.image = choix.image
            this.temps = choix.temps
            this.tags = choix.tags


        },

        changerSeconde(nombre) {
            let minutes = Math.floor(nombre / 60);
            let seconds = ((nombre % 60));
            return minutes + ":" + (seconds);
        },

        togglePlay() {

            this.jouer = !this.jouer;
        },

    },

    //     afficherTags(){

    //     this.tag = "musique.tags"
    // },

})