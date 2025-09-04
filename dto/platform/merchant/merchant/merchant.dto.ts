export type MerchantDTO = {
    id: string
    // 上级商户
    parentMerchantId: string
    // 商户版本id
    merchantVersionId: string
    // 商户编码
    merchantCode: string
    // 是否启用
    isEnabled: boolean
    // 商户名称
    name: string
    // 商户币种
    currency: string
    // 商户联系人
    contactPerson: string | null
    // 商户联系电话
    contactPhone: string | null
    // 商户联系地址
    contactAddress: string | null
    // 商户备注
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
