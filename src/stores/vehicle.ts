import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getIdFromUrl } from '@/utils/helpers'
import { fetchLinkedData, fetchVehicle } from '@/apis/swapi'

export const useVehicleStore = defineStore('vehicles', () => {
    const state: { [x: string]: Vehicle } = {}
    const vehicles = ref(state)

    async function getVehicle(id: string) {
        let vehicle = vehicles.value[id]
        if (!vehicle) {
            vehicle = await fetchVehicle(id)
            vehicles.value[id] = vehicle
        }
        return vehicle
    }

    async function getVehiclesFromLinks(links: Array<string>) {
        const [vehiclesFromStore, vehiclesToFetch] = links.reduce(([vehiclesFromStore, vehiclesToFetch]: Array<any>, vehicleLink) => {
            const storedVehicle = vehicles.value[getIdFromUrl(vehicleLink)]
            if (!storedVehicle) {
                vehiclesToFetch.push(vehicleLink)
            } else {
                vehiclesFromStore.push(storedVehicle)
            }
            return [vehiclesFromStore, vehiclesToFetch]
        }, [[], []])
        //Fetch vehicles not in the store
        let fetchedVehicles = []
        if (vehiclesToFetch.length > 0) {
            fetchedVehicles = await fetchLinkedData(vehiclesToFetch, "vehicles")
            //Add fetched vehicles to the store
            vehicles.value = {
                ...vehicles.value,
                ...fetchedVehicles.reduce((acc, vehicle) => {
                    const id = getIdFromUrl(vehicle.url)
                    acc[id] = vehicle
                    return acc
                }, {})
            }
        }
        return [...vehiclesFromStore, ...fetchedVehicles]
    }

    return { vehicles, getVehiclesFromLinks, getVehicle }
})

interface Vehicle {
    name: string, 
    model: string, 
    cost_in_credits: string, 
    passengers: string, 
    films: Array<string>, 
    vehicle_class: string, 
    created: string, 
    edited: string,
    manufacturer: string
}