import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { LightElectricVehicleModelDto } from './light-electric-vehicle-model.dto'

// 创建型号入参
export type CreateLightElectricVehicleModelRequest = {
    /// 名称
    name: string
    /// 品牌ID
    brandId: string
}

// 查询型号入参
export type QueryLightElectricVehicleModelRequest = OnlyKeywordRequest &
    QueryTimeRequest &
    PageRequest & {
        brandId: string | null
    }

// 查询型号出参响应
export type QueryLightElectricVehicleModelResponse = {
    /// 列表
    list: LightElectricVehicleModelDto[]
    /// 总数
    total: number
}

// 更新型号入参
export type UpdateLightElectricVehicleModelRequest = {
    /// 型号ID
    id: string
    /// 名称
    name: string
    /// 品牌ID
    brandId: string
}
