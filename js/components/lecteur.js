import externalTemplate from "../externalTemplate.js";

export default externalTemplate({

    template_url: "js/components/lecteur.html",

    // props: ['chanson'],

    // data
    data(){
        return{
            
            musiques:[],
            identité: 0,
        }
    },

    // dès l'ouverture du navigateur
    mounted() {
        // va chercher l'info dans le tableau json
        fetch("chansons.json").then(resp => {
            resp.json().then(contenu_json => {
                this.musiques = contenu_json
                console.log(this.musiques)
            })
        })

        
       
    },


    // methodes
    methods:{

        // methode pour filtrer les jeux dans le tableau
        // filtrerMusique(une_chanson) {
        //     if(this.identité != 0){
        //         if(this.identité > une_chanson.id)
        //         return true
        //     }
        // },   
    },

})