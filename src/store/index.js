import { createStore } from 'vuex'
import productsModule from './products.js'
import cartModule from './cart.js'

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    },
    state(){
        return { 
            isLoggedIn: false
        }
    },
    getters:{
        isAuthenticated(state){
            return state.isLoggedIn;
        }
    },
    mutations:{
        login(state) {
            state.isLoggedIn = true;
          },
          logout(state) {
            state.isLoggedIn = false;
          },
    },
    actions:{
        logIn(context){
            context.commit('login')
        },
        logOut(context){
            context.commit('logout')
        }
    }
})

export default store