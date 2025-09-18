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

// 更新手机号
export type UpdatePhoneRequest = {
    newPhone: string
    verificationCode: string
}

// 验证原邮箱(用于修改邮箱的第一步)
export type VerifyOriginalEmailRequest = {
    email: string
    verificationCode: string
}

// 更新邮箱
export type UpdateEmailRequest = {
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

//验证手机号状态
export type CheckPhoneStatusRequest = {
    phone: string
}

// 验证邮箱状态
export type CheckEmailStatusRequest = {
    email: string
}
