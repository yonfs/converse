export type MerchantAccountDTO = {
    // 账号ID
    id: string
    // 商户ID
    merchantId: string
    // 是否默认管理员
    isDefaultAdmin: boolean
    // 账号
    account: string
    // 是否允许登录
    allowLogin: boolean
    // 最后登录时间
    lastLoginTime: number | null
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
