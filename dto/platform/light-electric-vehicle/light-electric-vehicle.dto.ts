export type LightElectricVehicleDTO = {
    id: string
    // 品牌ID
    brandId: string | null
    // 型号ID
    modelId: string | null
    // 内容(车架号)
    content: string
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
