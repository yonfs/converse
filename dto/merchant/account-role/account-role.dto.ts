export type MerchantAccountRoleDTO = {
    id: string
    /// 商户id
    merchantId: string
    /// 是否默认角色
    isDefault: boolean
    /// 名称
    name: string
    /// 描述
    description: string | null
    /// 权限列表
    permissions: string[]
    /// 创建时间
    createdAt: number
    /// 更新时间
    updatedAt: number | null
}

export type SimpleMerchantAccountRoleDTO = {
    id: string
    /// 名称
    name: string
}
