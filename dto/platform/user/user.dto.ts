// 查询用户出参
export type UserDTO = {
    // 用户id
    id: string
    // 手机号
    phone: string | null
    // 邮箱
    email: string | null
    // 最后登录时间（时间戳）
    lastLoginTime: number | null
    // 创建时间（时间戳）
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间（时间戳）
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
