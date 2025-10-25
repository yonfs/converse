// 轻电车设备信息
export type LightElectricVehicleDeviceDTO = {
    // 轻电车Id
    id: string
    // 车架号
    vehicleIdentificationNumber: string
    // 品牌信息
    brand: {
        id: string
        name: string
        image: string | null
    } | null
    // 型号信息
    model: {
        id: string
        name: string
        image: string | null
    } | null
}

// 涂鸦单车设备信息
export type TuyaBicycleDeviceDTO = {
    // 涂鸦单车Id
    id: string
    // 蓝牙物理id
    bluetoothPhysicalId: string
    // 认证id
    authId: string | null
    // MAC地址
    macAddress: string | null
}

// 蓝牙配件设备信息
export type BluetoothAccessoryDeviceDTO = {
    // 蓝牙配件Id
    id: string
    // 蓝牙设备编号
    bluetoothNumber: string
    // MAC地址
    macAddress: string | null
    // IOS UUID
    iosUUID: string | null
    // 型号信息
    model: {
        id: string
        modelNumber: string
        modelName: string
        modelImage: string | null
    }
}

// 用户资产明细（平台端）
export type UserAssetItemDTO = {
    // 资产id
    id: string
    // 用户id
    userId: string
    // 用户手机号
    userPhone: string | null
    // 用户邮箱
    userEmail: string | null
    // 用户昵称
    userNickname: string | null

    // 资产自定义信息
    // 轻电车名称（用户自定义）
    lightElectricVehicleName: string | null
    // 轻电车图片（用户自定义）
    lightElectricVehicleImage: string | null
    // 轻电车品牌Id（冗余字段）
    lightElectricVehicleBrandId: string | null
    // 轻电车品牌名称（冗余字段）
    lightElectricVehicleBrandName: string | null
    // 轻电车型号Id（冗余字段）
    lightElectricVehicleModelId: string | null
    // 轻电车型号名称（冗余字段）
    lightElectricVehicleModelName: string | null

    // 设备绑定信息（可选，根据是否存在判断绑定状态）
    // 轻电车设备
    lightElectricVehicle: LightElectricVehicleDeviceDTO | null
    // 涂鸦单车设备
    tuyaBicycle: TuyaBicycleDeviceDTO | null
    // 蓝牙配件设备
    bluetoothAccessory: BluetoothAccessoryDeviceDTO | null

    // 创建时间
    createdAt: number
}

// 用户资产列表项（以用户为单位展示）
export type UserAssetListItemDTO = {
    // 用户id
    userId: string
    // 用户手机号
    userPhone: string | null
    // 用户邮箱
    userEmail: string | null
    // 用户昵称
    userNickname: string | null
    // 用户头像
    userAvatar: string | null
    // 用户性别
    userGender: string | null
    // 是否允许登录
    isAllowLogin: boolean
    // 注册时间
    userCreatedAt: number
    // 最后登录时间
    lastLoginTime: number | null
    // 资产数量
    assetCount: number
    // 资产列表
    assets: UserAssetItemDTO[]
}
