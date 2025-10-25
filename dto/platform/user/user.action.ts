import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { UserBasicInfoDTO, UserDTO } from './user.dto'

// 查询用户入参（）
export type QueryUserRequest = OnlyKeywordRequest &
    QueryTimeRequest &
    PageRequest & {
        //是否允许登录
        isAllowLogin: boolean | null
    }

export type QueryUserResponse = {
    list: UserDTO[]
    total: number
}

// 查询所有用户基本信息响应
export type QueryAllUserResponse = {
    list: UserBasicInfoDTO[]
}
