import type { PermissionModuleType } from './permission.types'

export const MerchantPermissionModule: PermissionModuleType = [
    // 车辆管理
    {
        id: 'lightEV',
        items: ['lightEV.query']
    },
    // 蓝牙仪表管理
    {
        id: 'bluetoothAccessory',
        items: ['bluetoothAccessory.query']
    },
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
