import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",


    // data
    data() {
        return {
            audio: new Audio(),
            musiques: [],
           
            // chanson: "",
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
            this.audio = choix
            
            if(this.audio == true){

                this.audio.addEventListener("play", e => {
                    this.play = true
                 })
                 
                 
                 // qund le temps avance
                 this.audio.addEventListener("timeupdate", e => {
                    // mon temps actuel = currentTime =>represente a combien je suis rendu 
                    this.avancement_temps = this.audio.currentTime
                 })
                 
                 // <audio src="food-vlog-11204.mp3">
                 this.audio.setAttribute("src", "this.audio.audio")
                 this.audio.play()
                 this.audio.volume = 0.1
                 // this.audio.pause()
                }else{
                    this.audio.addEventListener("pause", e => {
                        this.play = true
                    })
                }
                
                console.log(this.audio)
            // play, pause, ended, timeupdate
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
        }

    },

})