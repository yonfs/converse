import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { FeedbackDTO } from './feedback.dto'

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
