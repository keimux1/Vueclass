const app = Vue.createApp({
    data(){
        return {
            image1: "./assets/images/bulb on.jpg",
            image2: "./assets/images/bulb off.jpg",
            bulbOn:true,
        }
    },
    methods: {
        toggleBulb(){
            this.bulbOn =!this.bulbOn;
        }
    },
})