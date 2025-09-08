// 查看个人信息
export type SingleResponse = {
    id: string
    ///昵称
    nickName: string | null
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

// 添加手机号
export type AddPhoneRequest = {
    phone: string
    verificationCode: string
}

// 添加邮箱
export type AddEmailRequest = {
    email: string
    verificationCode: string
}

// 修改密码
export type ChangePasswordRequest = {
    originalPassword: string
    newPassword: string
    confirmPassword: string
}

// 验证原手机号(用于修改手机号的第一步)
export type VerifyOriginalPhoneRequest = {
    phone: string
    verificationCode: string
}

// 更换手机号
export type ChangePhoneRequest = {
    originalPhone: string
    newPhone: string
    verificationCode: string
}

// 验证原邮箱(用于修改邮箱的第一步)
export type VerifyOriginalEmailRequest = {
    email: string
    verificationCode: string
}

// 更换邮箱
export type ChangeEmailRequest = {
    originalEmail: string
    newEmail: string
    verificationCode: string
}

// 修改昵称
export type ChangeNickNameRequest = {
    nickName: string
}

// 修改头像
export type ChangeAvatarRequest = {
    avatar: string
}

// 修改性别
export type ChangeGenderRequest = {
    gender: string
}

// 修改个性签名
export type ChangeSignatureRequest = {
    signature: string
}
