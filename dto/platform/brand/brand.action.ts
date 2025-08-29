import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from "../../simple-request"

// 创建品牌入参
export type CreateBrandRequest = {
    /// 名称
    name: string
}

// 查询品牌入参
export type QueryBrandRequest = OnlyKeywordRequest & QueryTimeRequest & PageRequest


// 更新品牌入参
export type UpdateBrandRequest = {
    /// 品牌ID
    id: string
    /// 名称
    name: string
}
