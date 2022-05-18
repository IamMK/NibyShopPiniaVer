import { defineStore } from 'pinia'
// import productsModule from './products.js'
// import cartModule from './cart.js'

export const useMainStore = defineStore('main', {
    state: () => {
        return { 
            isAuthenticated: false
        }
    },
    actions: {
        logIn(){
            this.isAuthenticated = true;
        },
        logOut(){
            this.isAuthenticated = false;
        }
    }
})

// export default {
//     setup() {
//         const store = mainStore()
//         const cart = cartModule()
//         const prods = productsModule()

//         return {
//             store,
//             cart,
//             prods
//         }
//     }
    
// }
