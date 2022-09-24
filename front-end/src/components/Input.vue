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
    .v-text-field--filled {
        border-radius: 7px 7px 0 0;
    }
    .v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width > .v-input__control > .v-input__slot, .v-text-field--outlined > .v-input__control > .v-input__slot {
        min-height: 0px;
        height: 30%;
        width: 90%;
    }
</style>
