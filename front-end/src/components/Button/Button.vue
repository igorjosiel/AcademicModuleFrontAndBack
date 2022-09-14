<template>
    <v-btn :color="color" dark class="btn default-btn" @click="$emit('onClick')">
        <v-icon>{{ renderIcon(icon) }}</v-icon>
        {{ text }}
    </v-btn>
</template>

<script>
    import { mdiPlus, mdiTextSearch } from '@mdi/js';

    export default {
        name: "Button",
        props: ['color', 'text', 'icon'],
        methods: {
            renderIcon(thisIcon) {
                const icons = {
                    plus: mdiPlus,
                    search: mdiTextSearch,
                }

                return icons[thisIcon];
            }
        },
    }
</script>

<style>
    .default-btn {
        display: flex;
        justify-content: space-around;
    }
</style>
