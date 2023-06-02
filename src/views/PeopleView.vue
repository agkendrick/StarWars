<script setup lang="ts">
    import { ref } from 'vue'
    import PagedList from '../components/PagedList.vue'
    import { usePeopleStore } from '@/stores/people';
    import { getIdFromUrl } from '@/utils/helpers';

    const { getPeople } = usePeopleStore()

    const people = await getPeople()

    const { results, next, previous } = people

    const displayNames = {
        name: "Name",
        gender: "Gender",
        birth_year: "Birth Year",
        vehicleCount: "Starship/Vehicle Count"
    }

    const items = ref(mapItems(results))
    const nextPage = ref(next)
    const previousPage = ref(previous)

    function mapItems(people: Array<any>) {
        return people.map((item: { vehicles: string[]; starships: string[]; link: string; url: string; vehicleCount?: number }) => {
            item["vehicleCount"] = item.vehicles.length + item.starships.length
            item["link"] = `/people/${getIdFromUrl(item.url)}`
            return item
        })
    }

    async function loadPage(link: string) {
        const { results, next, previous } = await getPeople(link)
        items.value = mapItems(results)
        nextPage.value = next
        previousPage.value = previous
    }

</script>

<template>
    <div>
        <h1>This is the people view</h1>
        <PagedList @load-page="loadPage" :list-items="items" :next="nextPage" :previous="previousPage" :display-names="displayNames" />
    </div>    
</template>

<style>

</style>