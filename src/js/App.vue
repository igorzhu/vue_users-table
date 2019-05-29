<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Таблица</router-link> |
            <router-link to="/useradd.html">Добавить пользователя</router-link>
            <button v-on:click="dinamicRedirect" class="btn btn-primary">{{btnText}}</button>
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
                btnText: "Динамический редирект"
            }
        },
        methods: {
            dinamicRedirect(){
                console.log('doConsole works');
                this.$router.push('/useradd.html', function(){alert('Произошёл динамический редирект')});
            }
        }
    }
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
    &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
