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
export type UpdatePasswordRequest = {
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
export type UpdatePhoneRequest = {
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
export type UpdateEmailRequest = {
    originalEmail: string
    newEmail: string
    verificationCode: string
}

// 修改昵称
export type UpdateNicknameRequest = {
    nickname: string
}

// 修改头像
export type UpdateAvatarRequest = {
    avatar: string
}

// 修改性别
export type UpdateGenderRequest = {
    gender: string
}

// 修改个性签名
export type UpdateSignatureRequest = {
    signature: string
}
