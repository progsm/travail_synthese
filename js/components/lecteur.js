import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",


    // data
    data() {
        return {
            audio: new Audio(),
            musiques: [],
            class_active: false,
            chanson: "",
            image: "../images/fond_image.jpg",
            temps: "0",
            avancement_temps: "0",
            tags: [],
            tag: "",
            play: true,
            selectionne: {
                backgroundColor: "",
            },
            recherche: "",
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
            // if (this.recherche = une_chanson.artiste) {

            // }
            return true
        },

        retourneChanson(choix) {
            this.image = choix.image
            this.temps = choix.temps
            this.tags = choix.tags
            this.chanson = choix

        },

        changerSeconde(nombre) {
            let minutes = Math.floor(nombre / 60);
            let seconds = ((nombre % 60));
            return minutes + ":" + (seconds);
        },

        togglePlay() {

            this.play = !this.play;
        },

        rechercheTag(tagSelectionne) {
            this.recherche = tagSelectionne
            console.log(this.recherche)
        }

    },

})