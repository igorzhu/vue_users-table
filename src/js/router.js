import Vue from 'vue';
import VueRouter from 'vue-router';
import {usersList} from './randomuser.js';
import userTable from './user-table.vue';
import userEdit from './user-edit.vue';
import userAdd from './user-add.vue';
import comp1 from './comp1.vue';

Vue.use(VueRouter);

const Bar = { template: '<div>bar</div>' };

export default new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'userTable',
            component: userTable,
            props: {jsr: '#', usrs: true}
        },
        {
            path: '/user/:id',
            component: userEdit,
            props: true
        },
        {
            path: '/useradd.html',
            component: userAdd,
            props: true
        }
    ]
})
