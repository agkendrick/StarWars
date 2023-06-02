<script setup lang="ts">

    const props = defineProps<{
        item: object,
        displayNames: object
    }>()

</script>

<template>
    <ul>
        <li v-for="(value, key) in props.displayNames">
            <b>{{ value }}: </b>{{ item[key] }}
        </li>
    </ul>
</template>