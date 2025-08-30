import { userAsset } from './user-asset.dto'

export type CreateUserAssetRequest = {
    //蓝牙物理id
    bluetoothPhysicalId: string
    //认证id（认证码）
    authId: string
    //蓝牙地址（mac地址）
    bluetoothAddress: string
}

// 查询响应
export type QueryUserAssetRequest = {
    list: userAsset[]
    total: number
}
