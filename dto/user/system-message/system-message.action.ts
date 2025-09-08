import { OnlyKeywordRequest, PageRequest } from '../../simple-request'
import { SystemMessageDTO } from './system-message.dto'

export type QuerySystemMessageRequest = OnlyKeywordRequest & PageRequest

export type QuerySystemMessageResponse = {
    list: SystemMessageDTO[]
    total: number
}
