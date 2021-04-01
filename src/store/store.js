import Vue from "vue";
import Vuex from "vuex";
import data from '../../db.json'
console.log(data)

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'hey', 
    array :  [
      {
        id : 0,
        name : " Sllok elon",
        value : 0
        
        
      },
      {
        id : 1,
        name : "  Mark",
        value : 0
      },
      {
        id : 2,
        name : " Helena",
        value : 0
        
        
      },
      {
        id : 3,
        name : " salmon",
        value : 0
      }
    ]
  },
 getters: {},
  actions: {},
 
});
