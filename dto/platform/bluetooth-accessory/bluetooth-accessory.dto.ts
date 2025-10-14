export type BluetoothAccessoryDTO = {
    id: string
    // 蓝牙仪表编号
    bluetoothAccessoryNumber: string
    // 蓝牙仪表名称
    bluetoothAccessoryName: string
    // 蓝牙仪表型号
    modelName: string
    // 安卓蓝牙地址
    andriodAddress: string | null
    // IOS蓝牙地址
    iosAddress: string | null
    // 商户id
    merchantId: string | null
    // 商户名称
    merchantName: string | null
    // 创建时间
    createdAt: number
    // 更新时间
    updatedAt: number | null
}
