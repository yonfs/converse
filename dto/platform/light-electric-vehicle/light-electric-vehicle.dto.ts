export type LightElectricVehicleDTO = {
    id: string
    // 车架号
    vehicleNumber: string | null
    // 品牌ID
    brandId: string | null
    // 型号ID
    modelId: string | null
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
