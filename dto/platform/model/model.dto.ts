export type ModelDto = {
    /// 型号ID
    id: string
    /// 名称
    name: string
    /// 品牌ID
    brandId: string
    /// 品牌名称
    brandName: string
    /// 创建时间
    createdAt: number
    /// 创建人
    createdBy: string
    /// 更新时间
    updatedAt: number | null
    /// 更新人
    updatedBy: string | null
}
