<script setup lang="ts">
    import { useStarshipStore } from '@/stores/starship'
    import { useFilmStore } from '@/stores/film';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const { getStarship } = useStarshipStore()
    const { getFilmsFromLinks } = useFilmStore()

    const { name, model, cost_in_credits, passengers, films: filmLinks, starship_class, created, edited, MGLT, hyperdrive_rating, manufacturer } = await getStarship(route.params.id as string)

    const filmTitles = (await getFilmsFromLinks(filmLinks)).map(film => film.title).join(', ')
</script>

<template>
    <div>
        <h1>Starship Details</h1>
        <ul>
            <li><b>Name: </b>{{ name }}</li>
            <li><b>Model: </b>{{ model }} <span v-if="manufacturer != model">({{ manufacturer }})</span></li>
            <li><b>Cost: </b>{{ cost_in_credits }}</li>
            <li><b>Passengers: </b>{{ passengers }}</li>
            <li><b>Films: </b>{{ filmTitles }}</li>
            <li><b>Class: </b>{{ starship_class }}</li>
            <li><b>MGLT: </b>{{ MGLT }}</li>
            <li><b>Hyperdrive Rating: </b>{{ hyperdrive_rating }}</li>
            <li><b>Created: </b>{{ created }}</li>
            <li><b>Edited: </b>{{ edited }}</li>
        </ul>
    </div>
</template>

<style>

</style>