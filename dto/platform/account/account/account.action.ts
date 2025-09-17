import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../../dto/simple-request'
import type { AccountDTO } from './account.dto'

export type CreateAccountRequest = {
    /** 账号 */
    account: string
    /** 是否允许登录 */
    allowLogin: boolean
    /** 姓名 */
    name: string | null
    /** 手机号 */
    phone: string | null
    /** 邮箱 */
    email: string | null
    /** 角色 */
    roleIds: string[]
}

export type UpdateAccountRequest = {
    id: string
    /// 是否允许登录
    allowLogin: boolean
    /// 姓名
    name: string | null
    /// 手机号
    phone: string | null
    /// 邮箱
    email: string | null
    /// 角色
    roleIds: string[]
}

export type QueryAccountRequest = OnlyKeywordRequest & QueryTimeRequest & PageRequest

export type QueryAccountResponse = {
    list: AccountDTO[]
    total: number
}

//更新密码
export type UpdatePasswordRequest = {
    /** 原密码 */
    oldPassword: string
    /** 新密码 */
    password: string
}
