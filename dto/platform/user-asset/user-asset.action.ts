import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import type { UserAssetListItemDTO } from './user-asset.dto'

// 查询用户资产请求（平台端）
export type QueryUserAssetRequest = OnlyKeywordRequest &
    QueryTimeRequest &
    PageRequest & {
        // 是否允许登录
        isAllowLogin: boolean | null
        // 用户ID
        userId: string | null
    }

// 查询响应
export type QueryUserAssetResponse = {
    list: UserAssetListItemDTO[]
    total: number
}
