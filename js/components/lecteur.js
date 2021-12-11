import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",

    props: ['musique'],
            

    // data
    data() {
        return {
            musiques: [],
            identité: 0,
            image:"",
            tag:"",
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

        // methode pour filtrer les jeux dans le tableau
        // filtrerMusique(une_chanson) {
        //     
        //     }
        // },   
    },
    afficherTags(){
        
        this.tag = "musique.tags"
    },

})