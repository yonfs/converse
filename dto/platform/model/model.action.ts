import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { ModelDto } from './model.dto'

// 创建型号入参
export type CreateModelRequest = {
    /// 名称
    name: string
    /// 品牌ID
    brandId: string
}

// 查询型号入参
export type QueryModelRequest = OnlyKeywordRequest &
    QueryTimeRequest &
    PageRequest & {
        brandId: string | null
    }

// 查询型号出参响应
export type QueryModelResponse = {
    /// 列表
    list: ModelDto[]
    /// 总数
    total: number
}

// 更新型号入参
export type UpdateModelRequest = {
    /// 型号ID
    id: string
    /// 名称
    name: string
    /// 品牌ID
    brandId: string
}
