<script setup lang="ts">
    import { ref } from 'vue'
    import PagedList from '../components/PagedList.vue'
    import { usePeopleStore } from '@/stores/people';
    import { getIdFromUrl } from '@/utils/helpers';

    const { getPeople } = usePeopleStore()

    const { results, next, previous } = await getPeople()

    const displayNames = {
        name: "Name",
        gender: "Gender",
        birth_year: "Birth Year",
        vehicleCount: "Starship/Vehicle Count"
    }

    const loading = ref(false)
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
        loading.value = true
        const { results, next, previous } = await getPeople(link)
        items.value = mapItems(results)
        nextPage.value = next
        previousPage.value = previous
        loading.value = false
    }

</script>

<template>
    <div v-if="!loading">
        <h1>People</h1>
        <PagedList @load-page="loadPage" :list-items="items" :next="nextPage" :previous="previousPage" :display-names="displayNames" />
    </div> 
    <h1 v-if="loading">Loading...</h1>   
</template>