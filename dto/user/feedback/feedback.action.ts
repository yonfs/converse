import { PageRequest } from '../../simple-request'
import { FeedbackDTO } from './feedback.dto'

export type CreateFeedbackRequest = {
    // 车架号
    vehicleIdentificationNumber: string | null

    // 涂鸦单车设备id
    tuyaBicycleId: string | null

    // 反馈内容
    content: string

    // 图片
    image: string | null
}

export type QueryFeedbackRequest = PageRequest

export type QueryFeedbackResponse = {
    list: FeedbackDTO[]
    total: number
}
