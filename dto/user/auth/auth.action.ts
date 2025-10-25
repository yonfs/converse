// 发送手机验证码
export type SendPhoneVerificationCodeRequest = {
    countryCode: string
    phone: string
}

// 发送邮箱验证码
export type SendEmailVerificationCodeRequest = {
    email: string
}

// 手机注册
export type PhoneRegisterRequest = {
    countryCode: string
    phone: string
    password: string
    verificationCode: string
    // ip地址
    ipAddress: string | null
}

// 邮箱注册
export type EmailRegisterRequest = {
    email: string
    password: string
    verificationCode: string
    // ip地址
    ipAddress: string | null
}

// 手机号登录
export type PhoneLoginRequest = {
    countryCode: string
    phone: string
    password: string
}

// 邮箱登录
export type EmailLoginRequest = {
    email: string
    password: string
}

// 忘记密码
export type ForgetPasswordRequest = {
    account: string
    verificationCode: string
    newPassword: string
}
