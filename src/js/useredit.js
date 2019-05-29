import Vue from 'vue';
import {usersList} from './randomuser.js';
import userEdit from './user-edit.vue';
import App from './App.vue'
import router from './router';
import '../css/style.scss';

Vue.config.productionTip = false


/*var userEditPage = new Vue({
    el: '#user-edit-page',
    template: `<div id="user-edit-page" class="container">
                    <user-edit-form v-bind:usrs="users"></user-edit-form>
                </div>`,
    components: { userEditForm },
    data: {
        users: usersList
    }
});*/

new Vue({
    router,
    render: h => h(App)
}).$mount('#user-edit-page')

