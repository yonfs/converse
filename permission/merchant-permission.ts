import type { PermissionModuleType } from './permission.types'

export const MerchantPermissionModule: PermissionModuleType = [
    // 车辆管理
    {
        id: 'lightEV',
        items: ['lightEV.query', 'lightEV.add', 'lightEV.edit', 'lightEV.delete']
    },
    // 车辆品牌管理
    {
        id: 'lightEVBrand',
        items: ['lightEVBrand.query', 'lightEVBrand.add', 'lightEVBrand.edit', 'lightEVBrand.delete']
    },
    // 车辆型号管理
    {
        id: 'lightEVModel',
        items: ['lightEVModel.query', 'lightEVModel.add', 'lightEVModel.edit', 'lightEVModel.delete']
    },
    // 蓝牙仪表管理
    {
        id: 'bluetoothAccessory',
        items: ['bluetoothAccessory.query']
    },
    // 账号管理
    {
        id: 'account',
        items: ['account.query', 'account.add', 'account.edit', 'account.delete', 'account.resetPassword']
    },
    // 角色管理
    {
        id: 'role',
        items: ['role.query', 'role.add', 'role.edit', 'role.delete']
    }
]
