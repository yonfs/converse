import { OnlyKeywordRequest, QueryTimeRequest } from '../../simple-request'

// 查询用户入参（）
export type QueryUserRequest = OnlyKeywordRequest & QueryTimeRequest
