import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from 'src/converse/dto/simple-request'
import { PlatformAccountRoleDTO } from './account-role.dto'

export type CreateAccountRoleRequest = {
    name: string
    // 是否默认角色
    isDefault: boolean
    // 描述
    description: string
    // 权限
    permissions: string[]
}

export type QueryAccountRoleRequest = PageRequest & QueryTimeRequest & OnlyKeywordRequest

// 查询角色响应
export type QueryAccountRoleResponse = {
    list: PlatformAccountRoleDTO[]
    total: number
}

// 更新角色请求
export type UpdateAccountRoleRequest = {
    id: string
    // 名称
    name: string
    // 是否默认角色
    isDefault: boolean
    // 描述
    description: string
    // 权限
    permissions: string[]
}
