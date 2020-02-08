import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
      arr:[],
      list:[],
      con:[],
      my:JSON.parse(localStorage.getItem("cart"))||[],
      che:false

    },
    mutations:{
       add(state,val){
           
        state.my.push(val)
        localStorage.setItem("cart",JSON.stringify(state.my))
       },
       addnum(state,key){
            state.my[key].number++
       },
       cutnum(state,key){
        
        if(state.my[key].number<0){
            state.my[key].number=1
        }else{
            state.my[key].number--;
        }
   },
   che(state,key){
        state.my[key].chec=!state.my[key].chec
        console.log(state.my[key].chec)
   },
    }
})