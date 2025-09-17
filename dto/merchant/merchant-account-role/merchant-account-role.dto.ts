export type MerchantAccountRoleDTO = {
    // 角色ID
    id: string
    // 商户ID
    merchantId: string
    // 角色名称
    name: string
    // 角色描述
    description: string | null
    // 角色权限
    permissions: string[]
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
