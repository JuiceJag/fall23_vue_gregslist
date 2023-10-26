import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        logger.log(res.data)
        const newHouses = res.data.map(housePojo => new House(housePojo))
        AppState.houses = newHouses
        logger.log(AppState.houses)
    }
}

export const housesService = new HousesService()