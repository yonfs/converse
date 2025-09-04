export type TuyaBicycleDTO = {
    id: string
    // 物理蓝牙id
    bluetoothPhysicalId: string
    // 认证id
    authId: string | null
    // 蓝牙地址
    bluetoothAddress: string | null
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
