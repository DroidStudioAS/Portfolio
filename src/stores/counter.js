import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store',{
  state: () => ({
    active_page : '',
    menu_height:'100vh'
  }),
  actions:{ 
    setActivePage(name){
      this.active_page = name
      if(name==='about'){
          this.setMh('205vh');
      }else{
          this.setMh('100vh');
      }
      console.log('page set: ' + this.getActivePage());
    },
    getActivePage (){
      return this.active_page
    },
    setMh(value){
      this.menu_height=value;
      console.log(this.menu_height)
    },
    getMh(){
      return this.menu_height;
    }
  }
})
