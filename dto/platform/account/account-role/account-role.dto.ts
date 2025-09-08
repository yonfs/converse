export type PlatformAccountRoleDTO = {
    id: string
    // 名称
    name: string
    // 是否默认角色
    isDefault: boolean
    // 描述
    description: string | null
    // 权限
    permissions: string[]
    // 创建时间
    createdAt: number
    // 更新时间
    updatedAt: number | null
}
