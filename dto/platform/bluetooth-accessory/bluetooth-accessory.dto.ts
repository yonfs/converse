export type BluetoothAccessoryDTO = {
    id: string
    // 蓝牙编号
    bluetoothNumber: string
    // 蓝牙型号ID
    modelId: string
    // 蓝牙型号
    modelName: string
    // Mac地址
    macAddress: string | null
    // IOS UUID
    iosUUID: string | null
    // 商户id
    merchantId: string | null
    // 商户名称
    merchantName: string | null
    // 创建时间
    createdAt: number
    // 更新时间
    updatedAt: number | null
}
