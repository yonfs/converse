import type { PermissionModuleType } from './permission.types'

export const PlatformPermissionModule: PermissionModuleType = [
    {
        id: 'dataScreen',
        items: []
    },
    // 资产管理
    {
        id: 'asset',
        items: ['asset.query', 'asset.detail']
    },
    // 定位监控
    {
        id: 'location',
        items: ['location.query']
    },
    // 电池数据
    {
        id: 'batteryData',
        items: ['batteryData.query']
    },
    // 历史轨迹
    {
        id: 'historyTrack',
        items: ['historyTrack.query', 'historyTrack.pageDetail']
    },
    // 骑行记录
    {
        id: 'rideRecord',
        items: ['rideRecord.query', 'rideRecord.pageDetail']
    },
    // 智能服务订单
    {
        id: 'smartServiceOrder',
        items: ['smartServiceOrder.query']
    },
    // 告警通知订单
    {
        id: 'alarmNotificationOrder',
        items: ['alarmNotificationOrder.query']
    },
    // 智能服务套餐
    {
        id: 'smartServicePackage',
        items: ['smartServicePackage.query']
    },
    // 报警通知套餐
    {
        id: 'alarmNotificationPackage',
        items: ['alarmNotificationPackage.query']
    },
    // 问题反馈
    {
        id: 'feedback',
        items: ['feedback.query', 'feedback.handle']
    },
    // 系统消息
    {
        id: 'systemMessage',
        items: ['systemMessage.query', 'systemMessage.add', 'systemMessage.delete']
    },
    // 硬件升级
    {
        id: 'firmwareUpgrade',
        items: ['firmwareUpgrade.query']
    },
    // 车辆管理
    {
        id: 'lightEV',
        items: ['lightEV.query']
    },
    // 车辆品牌
    {
        id: 'lightEVBrand',
        items: ['lightEVBrand.query', 'lightEVBrand.add', 'lightEVBrand.edit', 'lightEVBrand.delete']
    },
    // 车辆型号
    {
        id: 'lightEVModel',
        items: ['lightEVModel.query', 'lightEVModel.add', 'lightEVModel.edit', 'lightEVModel.delete']
    },
    // 涂鸦设备
    {
        id: 'tuyaLightEV',
        items: ['tuyaLightEV.query']
    },
    // 蓝牙仪表
    {
        id: 'bluetoothAccessory',
        items: ['bluetoothAccessory.query', 'bluetoothAccessory.add', 'bluetoothAccessory.edit', 'bluetoothAccessory.delete']
    },
    // 蓝牙仪表型号
    {
        id: 'bluetoothAccessoryModel',
        items: [
            'bluetoothAccessoryModel.query',
            'bluetoothAccessoryModel.add',
            'bluetoothAccessoryModel.edit',
            'bluetoothAccessoryModel.delete'
        ]
    },
    // 云盒
    {
        id: 'tracker',
        items: ['tracker.query']
    },
    // 用户
    {
        id: 'user',
        items: ['user.query', 'user.handle']
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
    },
    // 商户管理
    {
        id: 'merchant',
        items: ['merchant.query', 'merchant.add', 'merchant.edit', 'merchant.delete', 'merchant.resetPassword']
    },
    // 商户版本管理
    {
        id: 'merchantVersion',
        items: ['merchantVersion.query', 'merchantVersion.add', 'merchantVersion.edit', 'merchantVersion.delete']
    }
]
