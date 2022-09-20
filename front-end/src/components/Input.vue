<template>
    <v-text-field
        :label="label"
        :type="type ? type : 'text'"
        :prepend-icon="icon"
        :model="value"
        :required="required ? 'true' : 'false'"
        class="pl-2"
        clearable="true"
        filled
    />
</template>

<script>
    export default {
        name: "Input",
        props: ['label', 'type', 'icon', 'value', "required"],
    }
</script>

<style>
    
</style>
