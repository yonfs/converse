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
    // 推送模式
    pushMode: string
    // 推送时间
    pushTime: number
    // 推送群体
    pushGroup: string
    // 条件开始时间
    conditionStartTime: number | null
    // 条件结束时间
    conditionEndTime: number | null
}

export type UpdateSystemMessageRequest = {
    id: string
    // 标题
    title: string
    // 内容
    content: string
    // 推送模式
    pushMode: string
    // 推送时间
    pushTime: number
    // 推送群体
    pushGroup: string
    // 条件开始时间
    conditionStartTime: number | null
    // 条件结束时间
    conditionEndTime: number | null
}
