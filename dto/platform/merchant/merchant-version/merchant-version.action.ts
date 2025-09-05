import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from 'src/converse/dto/simple-request'
import { MerchantVersionDTO } from './merchant-version.dto'

export type CreateMerchantVersionRequest = {
    /// 商户版本名称
    name: string
    /// 商户版本权限
    permission: string[]
    /// 商户版本备注
    remark: string | null
}

// 查询商户版本
export type QueryMerchantVersionRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

// 查询商户版本响应
export type QueryMerchantVersionResponse = {
    list: MerchantVersionDTO[]
    total: number
}

// 更新商户版本
export type UpdateMerchantVersionRequest = {
    id: string
    /// 商户版本名称
    name: string
    /// 商户版本权限
    permission: string[]
    /// 商户版本备注
    remark: string | null
}
