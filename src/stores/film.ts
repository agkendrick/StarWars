import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getIdFromUrl } from '@/utils/helpers'
import { fetchLinkedData } from '@/apis/swapi'

export const useFilmStore = defineStore('films', () => {
    const state: { [x: string]: Film } = {}
    const films = ref(state)

    function getFilm(id: string) {
        return films.value[id]
    }

    async function getFilmsFromLinks(links: Array<string>) {
        const [filmsFromStore, filmsToFetch] = links.reduce(([filmsFromStore, filmsToFetch]: Array<any>, link) => {
            const storedFilm = films.value[getIdFromUrl(link)]
            if(!storedFilm){
                filmsToFetch.push(link)
            } else {
                filmsFromStore.push(storedFilm)
            }
            return [filmsFromStore, filmsToFetch]
        }, [[], []])
        //Fetch films not in the store
        let fetchedFilms = []
        if(filmsToFetch.length > 0) {
            fetchedFilms = await fetchLinkedData(filmsToFetch, "films")
            //Add fetched films to the store
            films.value = {
                ...films.value,
                ...fetchedFilms.reduce((acc, film) => {
                    const id = getIdFromUrl(film.url)
                    acc[id] = film
                    return acc
                }, {})
            }
        }
        return [...filmsFromStore, ...fetchedFilms]
    }

    return { films, getFilm, getFilmsFromLinks }
})

interface Film {

}