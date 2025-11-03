export type MerchantAccountDTO = {
    id: string
    /// 商户id
    merchantId: string
    /// 账号
    account: string
    /// 姓名
    name: string | null
    /// 是否允许登录
    allowLogin: boolean
    /// 角色id列表
    roleIds: string[]
    /// 角色名称列表
    roleNames: string[]
    /// 创建时间
    createdAt: number
    /// 最后登录时间
    lastActiveAt: number | null
}
