import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getIdFromUrl } from '@/utils/helpers'
import { fetchLinkedData, fetchStarship } from '@/apis/swapi'

export const useStarshipStore = defineStore('starships', () => {
    const state: { [x: string]: Starship } = {}
    const starships = ref(state)

    async function getStarship(id: string) {
        let starship = starships.value[id]
        if (!starship) {
            starship = await fetchStarship(id)
            starships.value[id] = starship
        }
        return starship
    }

    async function getStarshipsFromLinks(links: Array<string>) {
        const [starshipsFromStore, starshipsToFetch] = links.reduce(([starshipsFromStore, starshipsToFetch]: Array<any>, starshipLink) => {
            const storedStarship = starships.value[getIdFromUrl(starshipLink)]
            if (!storedStarship) {
                starshipsToFetch.push(starshipLink)
            } else {
                starshipsFromStore.push(storedStarship)
            }
            return [starshipsFromStore, starshipsToFetch]
        }, [[], []])
        //Fetch starships not in the store
        let fetchedStarships = []
        if (starshipsToFetch.length > 0) {
            fetchedStarships = await fetchLinkedData(starshipsToFetch, "starships")
            //Add fetched starships to the store
            starships.value = {
                ...starships.value,
                ...fetchedStarships.reduce((acc, starship) => {
                    const id = getIdFromUrl(starship.url)
                    acc[id] = starship
                    return acc
                }, {})
            }
        }
        return [...starshipsFromStore, ...fetchedStarships]
    }

    return { starships, getStarshipsFromLinks, getStarship }
})

interface Starship {
    name: string,
    model: string,
    cost_in_credits: string,
    passengers: string,
    films: Array<string>,
    class: string,
    created: string,
    edited: string,
    hyperdrive_rating: string,
    starship_class: string,
    MGLT: string,
    manufacturer: string
}