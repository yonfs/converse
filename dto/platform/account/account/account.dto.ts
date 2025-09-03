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
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
