import { createRouter, createWebHashHistory } from 'vue-router';
 
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./components/Login/index.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('./components/MainMenu/index.vue')
  },
  {
    path: '/autodeployment',
    name: 'autodeployment',
    component: () => import('./components/AutoDeployment/index.vue'),
  },
  {
    path: '/autodeployment/programme',
    name: 'autodeploymentProgramme',
    component: () => import('./components/AutoDeployment/Programme.vue'),
  },
  {
    path: '/manualdeployment',
    name: 'manualdeployment',
    component: () => import('./components/ManualDeployment/index.vue'),
  },
  {
    path: '/datamanagement',
    name: 'datamanagement',
    component: () => import('./components/DataManagement/index.vue'),
  },
  {
    path: '/manualdeployment/paylout',
    name: 'manualdeploymentPaylout',
    component: () => import('./components/ManualDeployment/Paylout.vue'),
  },
];
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
 
export default router;