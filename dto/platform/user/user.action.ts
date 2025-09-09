import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { UserDTO } from './user.dto'

// 查询用户入参（）
export type QueryUserRequest = OnlyKeywordRequest &
    QueryTimeRequest &
    PageRequest & {
        //是否允许登录
        isAllowLogin: boolean
    }

export type QueryUserResponse = {
    list: UserDTO[]
    total: number
}
