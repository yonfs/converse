export type AccountDTO = {
    id: string
    ///昵称
    nickname: string | null
    ///头像
    avatar: string | null
    ///性别
    gender: string | null
    ///个性签名
    signature: string | null
    ///手机号
    phone: string | null
    ///邮箱
    email: string | null
    ///创建时间
    createdAt: number
}
