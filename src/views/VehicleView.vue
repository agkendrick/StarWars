<script setup lang="ts">
    import { useVehicleStore } from '@/stores/vehicle'
    import { useFilmStore } from '@/stores/film';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const { getVehicle } = useVehicleStore()
    const { getFilmsFromLinks } = useFilmStore()

    const { name, model, cost_in_credits, passengers, films: filmLinks, vehicle_class, created, edited, manufacturer } = await getVehicle(route.params.id as string)

    const filmTitles = (await getFilmsFromLinks(filmLinks)).map(film => film.title).join(', ')
</script>

<template>
    <div>
        <h1>This is the vehicle details page</h1>
        <ul>
            <li><b>Name: </b>{{ name }}</li>
            <li><b>Model: </b>{{ model }} <span v-if="manufacturer != model">({{ manufacturer }})</span></li>
            <li><b>Cost: </b>{{ cost_in_credits }}</li>
            <li><b>Passengers: </b>{{ passengers }}</li>
            <li><b>Films: </b>{{ filmTitles }}</li>
            <li><b>Class: </b>{{ vehicle_class }}</li>
            <li><b>Created: </b>{{ created }}</li>
            <li><b>Edited: </b>{{ edited }}</li>
        </ul>
    </div>
</template>

<style>

</style>