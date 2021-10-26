import Vue from 'vue';
import Router from 'vue-router';
import ListStudents from '../views/ListStudents.vue';

Vue.use(Router);

const routes = [
    {
        path: '/students',
        name: 'Aplication',
        component: ListStudents
    }
];

const router = new Router({
    mode: 'history',
    routes
});

export default router;