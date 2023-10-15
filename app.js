const app = Vue.createApp({
    data() {
        return {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
             console.log("changeTitle")
             this.title = title
        },
        // changeAge(age) {
        //     this.age = age
        // }
    },

})
app.mount('#app')
 

v
