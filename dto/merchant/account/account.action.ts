import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { MerchantAccountDTO } from './account.dto'

/// 创建商户账号请求
export type CreateMerchantAccountRequest = {
    /// 账号
    account: string
    /// 密码
    password: string
    /// 是否允许登录
    allowLogin: boolean
    /// 角色id列表
    roleIds: string[]
}

/// 查询商户账号请求
export type QueryMerchantAccountRequest = PageRequest & QueryTimeRequest & OnlyKeywordRequest

/// 查询商户账号响应
export type QueryMerchantAccountResponse = {
    list: MerchantAccountDTO[]
    total: number
}

/// 更新商户账号请求
export type UpdateMerchantAccountRequest = {
    /// id
    id: string
    /// 姓名
    name: string | null
    /// 是否允许登录
    allowLogin: boolean
    /// 角色id列表
    roleIds: string[]
}

/// 重置商户账号密码请求
export type ResetMerchantAccountPasswordRequest = {
    /// 商户账号id
    merchantAccountId: string
    /// 新密码
    password: string
}

//更新密码
export type UpdatePasswordRequest = {
    /** 原密码 */
    oldPassword: string
    /** 新密码 */
    password: string
}
