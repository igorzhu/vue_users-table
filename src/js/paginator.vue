<template>
    <ul id="paginator">
        <li v-for="n in pages">
            <a v-on:click.prevent="$emit('selectPage', n)" href="#">{{n}}</a>
        </li>
    </ul>
</template>
<script>
  export default {
    props: ['users', 'itemsShownNum'],
    computed: {
        pages: function(){
            console.log(Math.ceil(this.users.length / this.itemsShownNum));
            return Math.ceil(this.users.length / this.itemsShownNum);
        }
    },
  }
</script>


<style lang="scss">
    #paginator {
        display: inline-block;

        li {
            display: inline-block;
            margin: 0 10px;
        }
    }
</style>
