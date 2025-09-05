import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { LightElectricVehicleDTO } from './light-electric-vehicle.dto'

export type CreateLightElectricVehicleBatchRequest = {
    // 品牌ID
    brandId: string | null
    // 型号ID
    modelId: string | null
    // 内容(车架号)
    content: string
}

export type QueryLightElectricVehicleRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryLightElectricVehicleResponse = {
    list: LightElectricVehicleDTO[]
    total: number
}
