import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { LightElectricVehicleBrandDTO } from './light-electric-vehicle-brand.dto'

// 创建品牌入参
export type CreateLightElectricVehicleBrandRequest = {
    name: string
    // 图片
    image: string | null
    remark: string | null
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
    id: string
    name: string
    image: string | null
    remark: string | null
}

// 查询所有品牌
export type QueryAllLightElectricVehicleBrandResponse = Array<{
    id: string
    name: string
}>
