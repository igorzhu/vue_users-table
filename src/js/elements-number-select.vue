<template>
    <div id="select">
        <span>Количество элементов на странице</span>
        <select v-on:change="$emit('setNumber', $event.target.value)">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
    </div>
</template>

<style lang="scss">
    #select {
        display: inline-block;
    }
</style>
