import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { SystemMessageDTO } from './system-message.dto'

export type QuerySystemMessageRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QuerySystemMessageResponse = {
    list: SystemMessageDTO[]
    total: number
}

export type CreateSystemMessageRequest = {
    // 标题
    title: string
    // 内容
    content: string
    // 推送时间
    pushTime: number
}

export type UpdateSystemMessageRequest = {
    id: string
    // 标题
    title: string
    // 内容
    content: string
    // 推送时间
    pushTime: number
}
