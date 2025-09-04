import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { UserDTO } from './user.dto'

// 查询用户入参（）
export type QueryUserRequest = OnlyKeywordRequest & QueryTimeRequest & PageRequest

export type QueryUserResponse = {
    list: UserDTO[]
    total: number
}
