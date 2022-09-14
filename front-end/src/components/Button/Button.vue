<template>
    <v-btn :color="color" dark class="btn" @click="$emit('onClick')" style="width: 150px; height: 45px !important;">
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
