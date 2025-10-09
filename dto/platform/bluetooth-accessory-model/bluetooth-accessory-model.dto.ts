export type BluetoothAccessoryModelDTO = {
    id: string
    //型号名称
    modelName: string
    //图片URL
    modelImage: string | null
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
