import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { MerchantAccountRoleDTO } from './account-role.dto'

/// 创建商户账号角色请求
export type CreateMerchantAccountRoleRequest = {
    /// 是否默认角色
    isDefault: boolean
    /// 名称
    name: string
    /// 描述
    description: string | null
    /// 权限列表
    permissions: string[]
}

/// 查询商户账号角色请求
export type QueryMerchantAccountRoleRequest = PageRequest & QueryTimeRequest & OnlyKeywordRequest 

/// 查询商户账号角色响应
export type QueryMerchantAccountRoleResponse = {
    list: MerchantAccountRoleDTO[]
    total: number
}

/// 更新商户账号角色请求
export type UpdateMerchantAccountRoleRequest = {
    /// id
    id: string
    /// 是否默认角色
    isDefault: boolean
    /// 名称
    name: string
    /// 描述
    description: string | null
    /// 权限列表
    permissions: string[]
}
