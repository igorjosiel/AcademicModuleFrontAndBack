<template>
    <v-btn
        :color="backgroundColor"
        :elevation="5"
        dark
        class="btn default-btn"
        @click="$emit('onClick')"
    >
        <v-icon>{{ renderIcon(icon) }}</v-icon>
        {{ text }}
    </v-btn>
</template>

<script>
    import { mdiPlus, mdiTextSearch } from '@mdi/js';

    export default {
        name: "Button",
        props: ['backgroundColor', 'text', 'icon'],
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
        width: 30%;
        height: 50px !important;
        border-radius: 15px;
    }
</style>
