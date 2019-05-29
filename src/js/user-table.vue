<template>
    <div class="table-page">
        <table class="user-table table">
            <thead>
                <tr>
                    <th>{{jsr}}</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Активен</th>
                    <th>Баланс</th>
                    <th>Email</th>
                    <th>Телефон</th>
                    <th>Зарегистрирован</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="user.id"  v-for="user in usersShown">
                    <td><router-link :to="`user/${user.id}`">{{ user.id}}</router-link></td>
                    <td>{{user.name.first}}</td>
                    <td>{{user.name.last}}</td>
                    <td>{{user.isActive}}</td>
                    <td>{{user.balance}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.registered.date}}</td>
                </tr>
            </tbody>
        </table>
        <div class="pagination-block">
            <elementsNumberSelect v-on:setNumber="setNumber1($event)"></elementsNumberSelect>
            <paginator v-on:selectPage="showPage($event)" v-bind:users="users" v-bind:items-shown-num="itemsShownNum"></paginator>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import paginator from './paginator.vue'
    import elementsNumberSelect from './elements-number-select.vue'

    export default {
        props: ['usrs', 'jsr'],
        components: {
            paginator,
            elementsNumberSelect
        },
        data: () => ({
            users: [],
            usersShown: [],
            itemsShownNum: 5,
            pageNum: 1,
            url: 'http://localhost:3000/usersList/',
            //url: 'https://randomuser.me/api/?results=100'
        }),
        methods: {
            loadData() {
                axios.get(this.url)
                    .then(resopnse => {
                        this.users = resopnse.data;
                        this.showUsers();
                        console.log(this.usersShown);
                    })
            },
            showUsers(){
                this.usersShown = this.users.slice((this.pageNum -1) * this.itemsShownNum, this.pageNum * this.itemsShownNum);
            },
            setNumber1: function(val){
                this.itemsShownNum = val ;
                this.pageNum = 1;
                console.log(this.itemsShownNum);
                this.showUsers();
            },
            showPage: function(n){
                this.pageNum = n;
                this.showUsers();
            }
        },
        mounted(){
            this.loadData();
        }
    }
</script>

<style>
    thead {
        background-color: #eee;
    }
</style>


