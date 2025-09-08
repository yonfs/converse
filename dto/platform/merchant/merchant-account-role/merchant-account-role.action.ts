import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../../dto/simple-request'
import type { MerchantAccountRoleDTO } from './merchant-account-role.dto'

export type CreateMerchantAccountRoleRequest = {
    // 商户ID
    merchantId: string
    // 角色名称
    name: string
    // 角色描述
    description: string | null
    // 角色权限
    permissions: string[]
}

export type QueryMerchantAccountRoleRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryMerchantAccountRoleResponse = {
    list: MerchantAccountRoleDTO[]
    total: number
}

export type UpdateMerchantAccountRoleRequest = {
    // 角色ID
    id: string
    // 角色名称
    name: string
    // 角色描述
    description: string | null
    // 角色权限
    permissions: string[]
}
