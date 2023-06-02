import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchPeople, fetchPerson } from '@/apis/swapi'
import { getIdFromUrl } from '@/utils/helpers'

export const usePeopleStore = defineStore('people', () => {
    const state: {[x: string]: Person} = {}
    const people = ref(state)

    async function getPeople(link?: string) {
        const { results, next, previous } = await fetchPeople(link)
        
        people.value = {
            ...people.value,
            ...results.reduce((acc: { [x: string]: object; }, person: { url: string }) => {
                const id = getIdFromUrl(person.url)
                acc[id] = person
                return acc
            }, {})
        }

        return { results, next, previous }
    }

    async function getPerson(id:string) {
        let person = people.value[id]
        if(!person) {
           person = await fetchPerson(id) 
           people.value[id] = person
        }
        return person
    }

    return { people, getPeople, getPerson }
})

interface Person {
    name: string, 
    gender: string, 
    height: string, 
    birth_year: string, 
    films: Array<string>, 
    vehicles: Array<string>, 
    starships: Array<string>, 
    created: string, 
    edited: string
}