<template>
    <form class="user-edit-form container">
    <button v-on:click="goPrev" class="btn btn-primary" v-bind:class="{disabled: isPrevDisabled}">Предыдущий</button>
    <button v-on:click="goNext" class="btn btn-primary" v-bind:class="{disabled: isNextDisabled}">Следующий</button>
        <h1 class="row">Заголовок</h1>
        <div class="form-group">
        <label>Имя: {{user.name.first}}</label>
    <input v-model="user.name.first" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Фамилия</label>
        <input v-model="user.name.last" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Email</label>
        <input v-model="user.email" class="form-control" type="email" />
        </div>
        <div class="form-group">
        <label>URL картинки</label>
    <img v-bind:src="user.picture.large" class="user-pic" />
        </div>
        <div class="form-group">
        <button class="btn btn-outline-primary">Выбрать новую</button>
    <div class="img-url">{{user.picture.large}}</div>
    </div>
    <div class="form-group">
        <label>Возраст</label>
        <input v-model="user.dob.age" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Активный</label>
        <input v-model="user.isActive" type="checkbox" id="is-active-yes" />
        <label class="form-check-label" for="is-active-yes">Да</label>
        </div>
        <div class="form-group">
        <label>Уровень доступа</label>
    <input class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Баланс</label>
        <input  v-model="user.balance" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Телефон</label>
        <input v-model="user.phone" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Компания</label>
        <input class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Биография</label>
        <input class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Дата регистрации</label>
    <input v-model="user.registered.date" class="form-control" type="text" />
        </div>
        <div class="user-obj">
        {<br>
        <div class="user-obj__inner">
        "id": {{user.id}},<br>
    "isActive": {{user.isActive}},<br>
    "balance": "{{user.balance}}"<br>
    "picture": "{{user.picture.large}}"<br>
    "age": {{user.dob.age}}<br>
    "firstName": "{{user.name.first}}"<br>
    "lastName": "{{user.name.last}}"<br>
    "email": "{{user.email}}"<br>
    "phone": "{{user.phone}}"<br>
    "registered": "{{user.registered.date}}"<br>
    </div>
    }
    </div>
    <button class="btn btn-success save-user">Сохранить изменения</button>
    <button class="btn btn-danger delete-user">Удалить пользователя</button>
    </form>
</template>
<script>

import axios from 'axios'

export default {
    props: {
        id: String
    },
    data: () => ({
        users: [],
        user: null,
        url: 'http://localhost:3000/usersList/',
        //url: 'https://randomuser.me/api/?results=100',
        currentId: null,
        id: null,
        isPrevDisabled: false,
        isNextDisabled: false
    }),
    computed: {
        userUrl(){
            return `${this.url}${this.id}`
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to.params.id);
        this.id = to.params.id;
        this.loadData();
        console.log(this.users.length);
        next();
    },
    methods: {
        loadAllData() {
            axios.get(this.url)
                .then(resopnse => {
                    this.users = resopnse.data;
                    console.log(this.users.length);
                    this.loadData();
                })
        },
        loadData() {
            axios.get(this.userUrl)
                .then(resopnse => {
                    this.user = resopnse.data;
                    console.log(resopnse.status);
                    console.log(this.userUrl);
                    console.log(resopnse);
                    console.log(this.user);
                    console.log(this.users.length);
                    if (parseInt(this.id)=== this.users.length - 1) {
                        this.isNextDisabled = true;
                    } else {
                        this.isNextDisabled = false;
                    }

                    if(!parseInt(this.id)){
                        this.isPrevDisabled = true;
                    } else {
                        this.isPrevDisabled = false;
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        if (error.response.status === 404) {
                            alert("It goes 404");
                        }
                    }
                });
        },
        goNext(){
            if(parseInt(this.id)!== this.users.length - 1){
                this.$router.push(`${parseInt(this.id) + 1}`);
            }
        },
        goPrev(){
            if(parseInt(this.id)) {
                this.$router.push(`${parseInt(this.id) - 1}`);
            }
        }
    },
    mounted(){
        this.loadAllData();
        //this.loadData();
    }
}
</script>