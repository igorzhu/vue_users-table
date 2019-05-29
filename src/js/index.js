//import '../css/style.scss';

import Vue from 'vue';
//import {usersList} from './randomuser.js';
//import userTable from './user-table.vue';
//import userEdit from './user-edit.vue';
import App from './App.vue'
import router from './router';

//Vue.config.productionTip = false

/*var userTablePage = new Vue({
    el: '#user-table-page',
    template: `<div id="user-table-page">
                   <user-table v-bind:usrs="users"></user-table>
               </div>`,
    components: { userTable },
    data: {
        users: usersList
    }
});*/

new Vue({
    router,
    render: h => h(App)
}).$mount('#user-table-page')