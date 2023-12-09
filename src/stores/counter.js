import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    active_page: '',
    menu_height: '100vh',
    backend_skills: ["node.JS", "Spring Boot", "PHP", "Java", "MySQL", "Postman"].sort(),
    frontend_skills: ["HTML5", "CSS", "JavaScript", "Vue.JS", "WordPress", "GSAP"].sort(),
    mobile_skills: ["Android Studio", "Java", "SQLite", "MySQL", "XML"].sort(),
    skills_in_focus: []
  }),
  actions: {
    setActivePage(name) {
      this.active_page = name
      if (name === 'about') {
        this.setMh('300vh');
      } else if (name === 'skills') {
        this.setMh('120vh');
      } else {
        this.setMh('100vh');
      }
      console.log('page set: ' + this.getActivePage());
    },
    getActivePage() {
      return this.active_page
    },
    setMh(value) {
      this.menu_height = value;
      console.log(this.menu_height)
    },
    getMh() {
      return this.menu_height;
    },
    /********1- frontend
     * 2-backend
     * 3-mobile
     * ******/
    setSkillsInFocus(int) {
      switch (int) {
        case 1:
          this.skills_in_focus = this.frontend_skills;
          break;
        case 2:
          this.skills_in_focus = this.backend_skills;
          break;
        case 3:
          this.skills_in_focus = this.mobile_skills
          break
      }
    },
    getSkillsInFocus() {
      return this.skills_in_focus;
    }
  }
})
