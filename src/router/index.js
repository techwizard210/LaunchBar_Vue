import { createRouter, createWebHistory } from 'vue-router';

// function showAdminList(){
//   if(localStorage.getItem('isAdmin') == 'true'){
//     router.push({name: 'AdminList'})
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
  },
  {
    path: '/project/:project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
  },
  {
    path: '/admin/list',
    name: 'AdminList',
    component: () => import(/* webpackChunkName: "adminList" */ '../views/AdminList.vue'),
    // beforeEnter: showAdminList,
    // beforeRouteUpdate: showAdminList,
  },
  {
    path: '/admin/add',
    name: 'AdminProject',
    component: () => import(/* webpackChunkName: "adminAdd" */ '../views/AdminProject.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  },
});

export default router;
