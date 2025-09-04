export type PlatformAccountRoleDTO = {
    id: string
    // 名称
    name: string
    // 是否默认角色
    isDefault: boolean
    // 描述
    description: string
    // 权限
    permissions: string[]
}
