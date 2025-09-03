import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { LightElectricVehicleBrandDTO } from './light-electric-vehicle-brand.dto'

// 创建品牌入参
export type CreateLightElectricVehicleBrandRequest = {
    /// 名称
    name: string
}

// 查询品牌入参
export type QueryLightElectricVehicleBrandRequest = OnlyKeywordRequest & QueryTimeRequest & PageRequest

// 查询品牌出参响应
export type QueryLightElectricVehicleBrandResponse = {
    /// 品牌列表
    list: LightElectricVehicleBrandDTO[]
    /// 总数
    total: number
}

// 更新品牌入参
export type UpdateLightElectricVehicleBrandRequest = {
    /// 品牌ID
    id: string
    /// 名称
    name: string
}
