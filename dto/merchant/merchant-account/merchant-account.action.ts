import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { MerchantAccountDTO } from './merchant-account.dto'

export type CreateMerchantAccountRequest = {
    // 是否默认管理员
    isDefaultAdmin: boolean
    // 账号
    account: string
    // 密码
    password: string
    // 是否允许登录
    allowLogin: boolean
}

export type QueryMerchantAccountRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryMerchantAccountResponse = {
    list: MerchantAccountDTO[]
    total: number
}

export type UpdateMerchantAccountRequest = {
    // 账号ID
    id: string
    // 账号
    account: string
    // 是否允许登录
    allowLogin: boolean
}

export type UpdateMerchantAccountPasswordRequest = {
    // 账号ID
    id: string
    // 新密码
    password: string
}
