<template>
    <v-col
        :cols="cols"
        :sm="sm"
    >
        <component :is="childComponent" />
    </v-col>
</template>

<script>
    export default {
        name: "Column",
        props: ['cols', "sm", "childComponent"],
    }
</script>

<style>
    
</style>
