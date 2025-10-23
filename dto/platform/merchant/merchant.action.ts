import type { OnlyKeywordRequest, PageRequest } from '../../simple-request'
import type { MerchantDTO } from './merchant.dto'

export type CreateMerchantRequest = {
    /** 商户编码 */
    merchantCode: string
    /** 名称 */
    name: string
    /** 联系人 */
    contactPerson: string | null
    /** 联系人电话 */
    contactPhone: string | null
    /** 联系人邮箱 */
    contactEmail: string | null
    /** 联系人地址 */
    contactAddress: string | null
    /** 商户版本id */
    merchantVersionId: string
    /** 是否启用 */
    isEnabled: boolean
    /** 账号 */
    account: string
    /** 密码 */
    password: string
    /** 描述 */
    description: string | null
}

export type QueryMerchantRequest = OnlyKeywordRequest & PageRequest

export type QueryMerchantResponse = {
    list: MerchantDTO[]
    total: number
}

export type UpdateMerchantRequest = {
    id: string
    /** 名称 */
    name: string
    /** 联系人 */
    contactPerson: string | null
    /** 联系人电话 */
    contactPhone: string | null
    /** 联系人邮箱 */
    contactEmail: string | null
    /** 联系人地址 */
    contactAddress: string | null
    /** 是否启用 */
    isEnabled: boolean
    /** 描述 */
    description: string | null
    /** 商户版本id */
    merchantVersionId: string
}

export type UpdateMerchantVersionRequest = {
    /** 商户id */
    merchantId: string
    /** 商户版本id */
    merchantVersionId: string
}

export type ResetMerchantPasswordRequest = {
    /** 商户id */
    merchantId: string
    /** 新密码 */
    password: string
}
