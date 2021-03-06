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
            volume: 0.5,


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
        // quand le temps avance
        this.audio.addEventListener("timeupdate", e => {
            // mon temps actuel = currentTime => represente a combien je suis rendu 
            this.avancement_temps = Math.round(this.audio.currentTime)
        })

    },


    // methodes
    methods: {

        // methode pour filtrer les chansons dans le tableau
        filtrerMusique(une_chanson) {

            if (this.recherche != "") {

                if (
                    une_chanson.titre.toLowerCase() != this.recherche.toLowerCase() &&
                    une_chanson.artiste.toLowerCase() != this.recherche.toLowerCase() &&
                    une_chanson.tags.includes(this.recherche) == false) {
                    return false
                }
            }

            return true

        },

        // methode retourne les éléments de la chanson sélectionnée
        retourneChanson(choix) {

            this.temps = choix.temps
            this.tags = choix.tags
            this.chanson = choix
            this.audio.setAttribute("src", 'audio/' + this.chanson.audio)
            this.audio.play()

        },

        // methode converti les secondes en minutes (0:00)
        changerSeconde(nombre) {

            let minutes = Math.floor(nombre / 60)
            let secondes = ((nombre % 60))

            if (secondes < 10) {
                return minutes + ":" + ('0' + secondes);
            } else

                return minutes + ":" + (secondes);
        },

        // methode bascule de play a pause & vice versa
        togglePlay() {

            if (this.play == true) {
                this.audio.pause()
            }

            if (this.play == false) {
                this.audio.play()
            }

        },

        //methode quand click sur tag -> tag apparait dans la barre recherche
        rechercheTag(tagSelectionne) {
            this.recherche = tagSelectionne
        },

        // methode permet de controler le volume
        controleVolume() {
            this.audio.volume = this.volume
        },


    },

})