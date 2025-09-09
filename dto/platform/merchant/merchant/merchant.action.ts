import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../../dto/simple-request'
import type { MerchantDTO } from './merchant.dto'

export type CreateMerchantRequest = {
    // 商户版本id
    merchantVersionId: string
    // 商户编码
    merchantCode: string
    // 商户名称
    name: string
    // 商户内置管理员账号 (登录名)
    merchantAdminAccount: string
    // 商户币种
    currency: string
    // 商户联系人
    contactPerson: string | null
    // 商户联系电话
    contactPhone: string | null
    // 商户联系地址
    contactAddress: string | null
    // 商户备注
    remark: string | null
}

// 查询商户
export type QueryMerchantRequest = OnlyKeywordRequest &
    PageRequest &
    QueryTimeRequest & {
        // 是否启用
        isEnabled: boolean | null
    }

// 查询商户响应
export type QueryMerchantResponse = {
    list: MerchantDTO[]
    total: number
}

// 更新商户
export type UpdateMerchantRequest = {
    id: string
    // 是否启用
    isEnabled: boolean
    // 商户联系人
    contactPerson: string | null
    // 商户联系电话
    contactPhone: string | null
    // 商户联系地址
    contactAddress: string | null
    // 商户备注
    remark: string | null
}
