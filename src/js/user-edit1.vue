<template>
    <form class="user-edit-form">
        <h1 class="row">Заголовок</h1>
        <div class="form-group">
            <label>Имя: {{usrs[0].name.first}}</label>
            <input v-model="usrs[0].name.first" class="form-control" type="text" />
        </div>
        <div class="form-group">
            <label>Фамилия</label>
            <input v-model="usrs[0].name.last" class="form-control" type="text" />
        </div>
        <div class="form-group">
            <label>Email</label>
            <input v-model="usrs[0].email" class="form-control" type="email" />
        </div>
        <div class="form-group">
            <label>URL картинки</label>
            <img v-bind:src="usrs[0].picture.large" class="user-pic" />
        </div>
        <div class="form-group">
            <button class="btn btn-outline-primary">Выбрать новую</button>
            <div class="img-url">{{usrs[0].picture.large}}</div>
    </div>
    <div class="form-group">
        <label>Возраст</label>
        <input v-model="usrs[0].dob.age" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Активный</label>
        <input v-model="usrs[0].isActive" type="checkbox" id="is-active-yes" />
        <label class="form-check-label" for="is-active-yes">Да</label>
        </div>
        <div class="form-group">
        <label>Уровень доступа</label>
    <input class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Баланс</label>
        <input  v-model="usrs[0].balance" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Телефон</label>
        <input v-model="usrs[0].phone" class="form-control" type="text" />
        </div>
        <div class="form-group">
        <label>Адрес</label>
        <!--address v-bind:usrrr="usrs[0]"></address-->
        <input v-model="usrs[0].address" class="form-control" type="text" />
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
    <input v-model="usrs[0].registered.date" class="form-control" type="text" />
        </div>
        <div class="user-obj">
        {<br>
        <div class="user-obj__inner">
        "id": {{usrs[0].id}},<br>
    "isActive": {{usrs[0].isActive}},<br>
    "balance": "{{usrs[0].balance}}"<br>
    "picture": "{{usrs[0].picture.large}}"<br>
    "age": {{usrs[0].dob.age}}<br>
    "firstName": "{{usrs[0].name.first}}"<br>
    "lastName": "{{usrs[0].name.last}}"<br>
    "email": "{{usrs[0].email}}"<br>
    "phone": "{{usrs[0].phone}}"<br>
    "address": "{{address(usrs[0])}}"<br>
    "registered": "{{usrs[0].registered.date}}"<br>
    </div>
    }
    </div>
    <button class="btn btn-success save-user">Сохранить изменения</button>
    <button class="btn btn-danger delete-user">Удалить пользователя</button>
    </form>

</template>

<script>
    module.exports = {
        props: ['usrs'],
        methods: {
            address: function(usr){
                return usr.location.city + ', ' +  usr.location.street;
            }
        }
    }
</script>


