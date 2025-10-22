import type { OnlyKeywordRequest, PageRequest } from '../../simple-request'
import type { MerchantVersionDTO } from './merchant-version.dto'

export type CreateMerchantVersionRequest = {
    /** 名称 */
    name: string
    /** 权限列表 */
    permissions: string[]
    /** 是否默认 */
    isDefault: boolean
    /** 备注 */
    remark: string | null
}

export type QueryMerchantVersionRequest = OnlyKeywordRequest & PageRequest

export type QueryMerchantVersionResponse = {
    list: MerchantVersionDTO[]
    total: number
}

export type UpdateMerchantVersionRequest = {
    id: string
    /** 名称 */
    name: string
    /** 权限列表 */
    permissions: string[]
    /** 是否默认 */
    isDefault: boolean
    /** 备注 */
    remark: string | null
}
