export type LightElectricVehicleBrandDTO = {
    // 品牌ID
    id: string
    //商户id
    merchantId: string | null
    //商户名称
    merchantName: string | null
    // 名称
    name: string
    // 图片
    image: string | null
    // 备注
    remark: string | null
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
