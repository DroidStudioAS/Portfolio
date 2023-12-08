import { createRouter, createWebHistory, useRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SkillsView from '../views/SkillsView.vue';
import ContactView from'../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component:AboutView
    },
    {
      path:'/skills',
      name:'skills',
      component:SkillsView
    },
    {
      path:'/contact',
      name:'contact',
      component:ContactView
    },
    {
      path :'/projects',
      name:'projects',
      component:ProjectView
    }
  ]
});

export default router 

