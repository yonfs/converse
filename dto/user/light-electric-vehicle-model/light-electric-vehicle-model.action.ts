import type { OnlyKeywordRequest } from '../../../dto/simple-request'
import type { LightElectricVehicleModelDTO } from './light-electric-vehicle-model.dto'

export type QueryLightElectricVehicleModelRequest = OnlyKeywordRequest & {
    brandId: string
}

export type QueryLightElectricVehicleModelResponse = {
    total: number
    list: LightElectricVehicleModelDTO[]
}
