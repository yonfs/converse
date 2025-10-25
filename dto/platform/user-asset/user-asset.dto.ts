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

// 用户资产列表项（平台端 - 以资产为单位展示）
export type UserAssetItemDTO = {
    // 资产基本信息
    id: string
    userAssetNumber: string
    createdAt: number

    // 所属用户信息（辅助信息）
    user: {
        id: string
        phone: string | null
        email: string | null
        nickname: string | null
        avatar: string | null
        gender: string | null
        isAllowLogin: boolean
        createdAt: number
        lastLoginTime: number | null
    }

    // 资产自定义信息（用户可自定义的字段）
    lightElectricVehicleName: string | null
    lightElectricVehicleImage: string | null
    lightElectricVehicleBrandId: string | null
    lightElectricVehicleBrandName: string | null
    lightElectricVehicleModelId: string | null
    lightElectricVehicleModelName: string | null

    // 设备绑定信息（可选，根据是否存在判断绑定状态）
    // 轻电车设备
    lightElectricVehicle: LightElectricVehicleDeviceDTO | null
    // 涂鸦单车设备
    tuyaBicycle: TuyaBicycleDeviceDTO | null
    // 蓝牙配件设备
    bluetoothAccessory: BluetoothAccessoryDeviceDTO | null
}

// 用户资产基本信息（用于下拉选择）
export type UserAssetBasicInfoDTO = {
    // 用户资产ID
    id: string
    // 用户资产编号
    userAssetNumber: string
}
