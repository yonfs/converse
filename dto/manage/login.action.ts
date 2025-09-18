//平台登录
export type PlatformLoginRequest = {
    /// 账号
    account: string
    /// 密码
    password: string
}

//商户登录
export type MerchantLoginRequest = {
    /// 商户编码
    merchantCode: string
    /// 账号
    account: string
    /// 密码
    password: string
}
