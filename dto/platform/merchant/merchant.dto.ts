export type MerchantDTO = {
    id: string
    // 商户版本id
    merchantVersionId: string
    // 商户版本名称
    merchantVersionName: string
    // 商户编码
    merchantCode: string
    // 是否启用
    isEnabled: boolean
    // 名称
    name: string
    // 联系人
    contactPerson: string | null
    // 联系人电话
    contactPhone: string | null
    // 联系人邮箱
    contactEmail: string | null
    // 联系人地址
    contactAddress: string | null
    // 备注
    remark: string | null
    // 创建时间
    createdAt: number
    // 更新时间
    updatedAt: number | null
}

// 简单商户出参
export class SimpleMerchantDTO {
    // id
    id: string
    // 名称
    name: string
}
