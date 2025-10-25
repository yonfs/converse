import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import type { UserAssetBasicInfoDTO, UserAssetItemDTO } from './user-asset.dto'

// 查询用户资产请求（平台端）
export type QueryUserAssetRequest = OnlyKeywordRequest &
    QueryTimeRequest &
    PageRequest & {
        // 是否允许登录
        isAllowLogin: boolean | null
        // 用户ID
        userId: string | null
    }

// 查询响应（以资产为单位）
export type QueryUserAssetResponse = {
    list: UserAssetItemDTO[]
    total: number
}

// 查询所有用户资产请求（用于下拉选择）
export type QueryAllUserAssetRequest = OnlyKeywordRequest & {
    // 用户ID（精确匹配）
    userId: string | null
}

// 查询所有用户资产响应
export type QueryAllUserAssetResponse = {
    list: UserAssetBasicInfoDTO[]
}
