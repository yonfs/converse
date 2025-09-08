export type PermissionModuleType = {
    id: string
    items: string[]
}[]

export const extractPermission = (permissionModule: PermissionModuleType): string[] => {
    const permissionValues = permissionModule.reduce((acc, current) => {
        return acc.concat(current.items, current.id)
    }, [] as string[])

    return permissionValues
}

export const convertToPermissionModule = (permissionString: string): PermissionModuleType => {
    // 将字符串分割成数组
    const permissions = permissionString.split(',')

    // 创建一个Map来存储模块及其对应的items
    const moduleMap = new Map<string, string[]>()

    permissions.forEach(permission => {
        // 如果包含点号，说明是子权限
        if (permission.includes('.')) {
            const [moduleId] = permission.split('.')
            if (!moduleMap.has(moduleId)) {
                moduleMap.set(moduleId, [])
            }
            moduleMap.get(moduleId)?.push(permission)
        } else {
            // 如果不包含点号，说明是主模块
            if (!moduleMap.has(permission)) {
                moduleMap.set(permission, [])
            }
        }
    })

    // 转换成最终的数组格式
    return Array.from(moduleMap.entries()).map(([id, items]) => ({
        id,
        items
    }))
}
