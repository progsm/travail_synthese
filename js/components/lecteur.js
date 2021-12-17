import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",


    // data
    data() {
        return {
            audio: new Audio(),
            musiques: [],
            chanson: {
                image: "fond_image.jpg"
            },
            // image: "fond_image.jpg",
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

        this.audio.addEventListener("play", e => {
            this.play = true
        })

        this.audio.addEventListener("pause", e => {
            this.play = false
        })
        // qund le temps avance
        this.audio.addEventListener("timeupdate", e => {
            // mon temps actuel = currentTime =>represente a combien je suis rendu 
            this.avancement_temps = Math.round(this.audio.currentTime)
        })

    },


    // methodes
    methods: {

        // methode pour filtrer les chansons dans le tableau
        filtrerMusique(une_chanson) {
            // si this.recherche != ""

            // si une_chanson.titre != this.recherche
            //   return false

            // si une_chanson.tags contiens this.recherche == false
            //   return false

            // if (this.recherche != "") {
            //     if (une_chanson.titre != this.recherche) {
            //         return false
            //     }
            //     if (une_chanson.artiste != this.recherche) {
            //         return false
            //     }
            //     if (une_chanson.tags != includes(this.recherche)) {
            //         return false
            //     }

            // }

            return true

        },

        retourneChanson(choix) {
            // this.image = choix.image
            this.temps = choix.temps
            this.tags = choix.tags
            this.chanson = choix



            // <audio src="food-vlog-11204.mp3">
            this.audio.setAttribute("src", 'audio/' + this.chanson.audio)
            this.audio.play()
            this.audio.volume = 0.1



        },

        changerSeconde(nombre) {
            let minutes = Math.floor(nombre / 60);
            let seconds = ((nombre % 60));

        
            // si seconds est plus petit que 10
            //     ajouter un zéro au début

            return minutes + ":" + (seconds);
        },

        togglePlay() {



            if (this.play == true) {
                this.audio.pause()
            }

            if (this.play == false) {
                this.audio.play()
            }

        },

        rechercheTag(tagSelect) {
            this.recherche = tagSelect
        }

    },

})