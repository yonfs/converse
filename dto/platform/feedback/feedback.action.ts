import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { FeedbackDTO } from './feedback.dto'

export type QueryFeedbackRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryFeedbackResponse = {
    list: FeedbackDTO[]
    total: number
}

export type UpdateFeedbackRequest = {
    id: string
    // 状态
    status: string
    // 处理备注
    handledRemark: string | null
}
