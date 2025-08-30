import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { BrandDto } from './brand.dto'

// 创建品牌入参
export type CreateBrandRequest = {
    /// 名称
    name: string
}

// 查询品牌入参
export type QueryBrandRequest = OnlyKeywordRequest & QueryTimeRequest & PageRequest

// 查询品牌出参响应
export type QueryBrandResponse = {
    /// 品牌列表
    list: BrandDto[]
    /// 总数
    total: number
}

// 更新品牌入参
export type UpdateBrandRequest = {
    /// 品牌ID
    id: string
    /// 名称
    name: string
}
