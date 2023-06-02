<script setup lang="ts">
  import { useRoute, RouterLink } from 'vue-router'
  import { getResourceTypeFromUrl, getIdFromUrl } from '@/utils/helpers'
  import { usePeopleStore } from '@/stores/people'
  import { useFilmStore } from '@/stores/film'
  import { useVehicleStore } from '@/stores/vehicle'
  import { useStarshipStore } from '@/stores/starship'

  const route = useRoute()
  const { getPerson } = usePeopleStore()
  const { getFilmsFromLinks } = useFilmStore()
  const { getVehiclesFromLinks} = useVehicleStore()
  const { getStarshipsFromLinks } = useStarshipStore()

  const { name, gender, height, birth_year, films: filmLinks, vehicles: vehicleLinks, starships: starshipLinks, created, edited } = await getPerson(route.params.id as string)
  
  const filmTitles = (await getFilmsFromLinks(filmLinks)).map(film => film.title).join(', ')
  const starships = await getStarshipsFromLinks(starshipLinks)
  const vehicles = await getVehiclesFromLinks(vehicleLinks)
  const starshipsAndVehicles = [ ...starships, ...vehicles]

  function getVehicleLink(url: string) {
    return `/${getResourceTypeFromUrl(url)}/${getIdFromUrl(url)}`
  }

</script>

<template>
    <div class="person">
        <h1>Person Details</h1>
        <ul>
          <li><b>Name: </b> {{ name }}</li>
          <li><b>Gender: </b> {{ gender }}</li>
          <li><b>Height: </b> {{ height }}</li>
          <li><b>Birth Year: </b> {{ birth_year }}</li>
          <li><b>Films: </b> {{ filmTitles }}</li>
          <li><b>Starships/Vehicles: </b>
            <ul class="sub-list list-item" v-for="item in starshipsAndVehicles">
              <RouterLink class="vehicle-link" :to="getVehicleLink(item.url)">
                <li class="sub-list-item"><b>Name: </b>{{ item.name }} ({{ item.vehicle_class ? "Vehicle" : "Starship" }})</li>
                <li class="sub-list-item"><b>Model: </b>{{ item.model }}</li>
              </RouterLink>

            </ul>
          </li>
          <li><b>Created: </b> {{ created }}</li>
          <li><b>Edited: </b> {{ edited }}</li>
        </ul>
      </div>
</template>

<style scoped>
  .sub-list {
    margin: 1em 0;
  }
  .sub-list-item {
    margin-left: 1em;
    list-style: circle;
  }

</style>