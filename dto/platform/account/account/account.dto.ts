export type AccountDTO = {
    id: string
    // 账号
    account: string
    // 是否允许登录
    allowLogin: boolean
    // 姓名
    name: string | null
    // 手机号
    phone: string | null
    // 邮箱
    email: string | null
    // 角色
    roleNames: string[]
    // 角色id
    roleIds: string[]
    // 创建时间
    createdAt: number
    // 最后活跃时间(不是更新时间)
    lastActiveAt: number | null
}
