import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../../dto/simple-request'
import type { TuyaBicycleDTO } from './tuya-bicycle.dto'

export type QueryTuyaBicycleRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryTuyaBicycleResponse = {
    list: TuyaBicycleDTO[]
    total: number
}
