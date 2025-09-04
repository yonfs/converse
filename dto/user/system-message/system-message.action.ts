import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { SystemMessageDTO } from './system-message.dto'

export type QuerySystemMessageRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QuerySystemMessageResponse = {
    list: SystemMessageDTO[]
    total: number
}
