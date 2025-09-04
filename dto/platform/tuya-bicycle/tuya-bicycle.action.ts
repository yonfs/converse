import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { TuyaBicycleDTO } from './tuya-bicycle.dto'

export type QueryTuyaBicycleRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryTuyaBicycleResponse = {
    list: TuyaBicycleDTO[]
    total: number
}
