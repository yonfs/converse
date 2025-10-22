export type MerchantVersionDTO = {
    id: string
    // 名称
    name: string
    // 权限列表
    permissions: string[]
    // 是否默认
    isDefault: boolean
    // 备注
    remark: string | null
    // 创建时间
    createdAt: number
    // 更新时间
    updatedAt: number | null
}
