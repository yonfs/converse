import type { PermissionModuleType } from './permission.types'

export const MerchantPermissionModule: PermissionModuleType = [
    // 账号管理
    {
        id: 'account',
        items: ['account.query']
    },
    // 角色管理
    {
        id: 'role',
        items: ['role.query']
    }
]
