import type { OnlyKeywordRequest, PageRequest } from '../../../dto/simple-request'
import type { SystemMessageDTO } from './system-message.dto'

export type QuerySystemMessageRequest = OnlyKeywordRequest & PageRequest

export type QuerySystemMessageResponse = {
    list: SystemMessageDTO[]
    total: number
}
