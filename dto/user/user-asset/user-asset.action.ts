import { UserAssetDTO } from './user-asset.dto'

// 创建用户资产
export type CreateUserAssetRequest = {
    //蓝牙物理id
    bluetoothPhysicalId: string
    //认证id（认证码）
    authId: string
    //蓝牙地址（mac地址）
    bluetoothAddress: string | null
}

// 查询响应
export type QueryUserAssetRequest = {
    list: UserAssetDTO[]
    total: number
}

// 更新 轻电车 车架号
export type UpdateLightElectricVehicleVehicleIdentificationNumberRequest = {
    id: string
    // 车架号
    vehicleIdentificationNumber: string
}

// 更新轻电车品牌
export type UpdateLightElectricVehicleBrandRequest = {
    id: string
    // 轻电车品牌ID
    lightElectricVehicleBrandId: string
}

// 更新轻电车型号
export type UpdateLightElectricVehicleModelRequest = {
    id: string
    // 轻电车品牌ID
    lightElectricVehicleBrandId: string
    // 轻电车型号ID
    lightElectricVehicleModelId: string
}

// 更新轻电车名称
export type UpdateLightElectricVehicleNameRequest = {
    id: string
    // 轻电车名称
    name: string
}

// 更新轻电车图片
export type UpdateLightElectricVehicleImageRequest = {
    id: string
    // 轻电车图片
    image: string
}
