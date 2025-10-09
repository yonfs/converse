export type BluetoothAccessoryDTO = {
    id: string
    // 设备型号
    modelName: string
    // 蓝牙地址
    bluetoothAddress: string
    // 商户名称
    merchantName: string
    // 创建时间
    createdAt: number
    // 更新时间
    updatedAt: number | null
}
