import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",


    // data
    data() {
        return {
            audio: new Audio(),
            musiques: [],
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
            // chanson_active: false

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

            return true
        },

        retourneChanson(choix) {
            this.image = choix.image
            this.temps = choix.temps
            this.tags = choix.tags
            this.chanson = choix

            this.audio.addEventListener("play", e => {
                this.play = true
            })

            this.audio.addEventListener("pause", e => {
                this.play = false
            })
            // qund le temps avance
            this.audio.addEventListener("timeupdate", e => {
                // mon temps actuel = currentTime =>represente a combien je suis rendu 
                this.avancement_temps = this.audio.currentTime
            })
            
            // <audio src="food-vlog-11204.mp3">
            this.audio.setAttribute("src", 'audio/' + this.chanson.audio)
            this.audio.play() 
            this.audio.volume = 0.1
            // this.audio.pause()
            // console.log(this.audio)


        },

        changerSeconde(nombre) {
            let minutes = Math.floor(nombre / 60);
            let seconds = ((nombre % 60));
            return minutes + ":" + (seconds);
        },

        togglePlay() {

            // play, pause, ended, timeupdate
            

            // if (this.play) {
            //     this.audio.pause();
            // } else {
            //     this.audio.play();
            // }

            if(this.play = true){
                this.audio.pause()
            }
            
            if(this.play = false){
                this.audio.pause()
            }

        },

        rechercheTag(tagSelect) {
            this.recherche = tagSelect
        }

    },

})