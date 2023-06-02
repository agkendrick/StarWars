<script setup lang="ts">
    import ListItem from './ListItem.vue'
    import { RouterLink } from 'vue-router'
    
    const props = defineProps<{
        listItems: Array<any>,
        displayNames: object,
        next?: string,
        previous?: string
    }>()

    defineEmits<{
        (e: 'loadPage', link: string): void
    }>()

</script>

<template>
    <div v-for="item in props.listItems">
        <RouterLink :to="item.link">
            <ListItem :display-names="props.displayNames" :item="item" />
        </RouterLink>
    </div>
    <div>
        <button @click="$emit('loadPage', previous)" v-if="previous">Previous</button>
        <button @click="$emit('loadPage', next)" v-if="next">Next</button>
    </div>
</template>

<style scoped>

</style>