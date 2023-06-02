import axios from 'axios'

const client = axios.create({ baseURL: 'https://swapi.dev/api/' })

export const fetchPeople = async (link?: string) => {
    let path = 'people'
    if(link) {
        const page = link.split('=')[1]
        path = `people/?page=${page}`
    }

    try {
        const { data: { results, next, previous } } = await client.get(path)
        return { results, next, previous }
    } catch(e) {
       throw new Error('Error retrieving people')
    }
}

export const fetchPerson = async (id: string) => {
    try {
        const { data } = await client.get(`people/${id}`)
        return data
    } catch(e) {
        throw new Error(`Error retrieving person with id: ${id}`)
    }
}

export const fetchVehicle = async (id: string) => {
    try {
        const { data } = await client.get(`vehicles/${id}`)
        return data
    } catch(e) {
        throw new Error(`Error retrieving vehicle with id: ${id}`)
    }
}

export const fetchStarship = async (id: string) => {
    try {
        const { data } = await client.get(`starships/${id}`)
        return data
    } catch(e) {
        throw new Error(`Error retrieving starship with id: ${id}`)
    }
}

export const fetchLinkedData = async (links: Array<string>, resourceType: string) => {
    try {
        const res = await Promise.all(links.map((link: string) => axios.get(link)))
        return res.map(item => item.data)
    } catch (e) {
        throw new Error(`Error retrieving ${resourceType}`)
    }
}