export type UserAssetDTO = {
    //资产id
    id: string

    // 轻电车Id
    lightElectricVehicleId: string | null

    //涂鸦设备Id
    tuyaBicycleId: string | null

    // 轻电车名称
    lightElectricVehicleName: string | null

    // 轻电车图片
    lightElectricVehicleImage: string | null

    // 轻电车品牌Id
    lightElectricVehicleBrandId: string | null

    // 轻电车品牌名称
    lightElectricVehicleBrandName: string | null

    // 轻电车型号Id
    lightElectricVehicleModelId: string | null

    // 轻电车型号名称
    lightElectricVehicleModelName: string | null

    // 车架号
    vehicleIdentificationNumber: string | null

    //蓝牙物理id
    bluetoothPhysicalId: string | null

    //认证id
    authId: string | null

    //蓝牙地址
    bluetoothAddress: string | null

    // 激活时间
    createdAt: number
}
