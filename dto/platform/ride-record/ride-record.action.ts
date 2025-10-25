import type { PageRequest, QueryTimeRequest } from '../../simple-request'
import type { RideLocationDTO, RideRecordDTO, UserBasicDTO } from './ride-record.dto'

// 查询骑行记录列表请求(平台端)
export type QueryRideRecordRequest = QueryTimeRequest &
    PageRequest & {
        // 用户ID筛选(必填,单个用户ID或null)
        userId: string | null
        // 用户资产ID筛选(必填,string或null)
        assetId: string | null
        // 骑行状态筛选(必填,boolean或null)
        isCompleted: boolean | null
    }

// 查询骑行记录列表响应
export type QueryRideRecordResponse = {
    list: RideRecordItemDTO[]
    total: number
}

// 骑行记录列表项DTO（包含用户信息）
export type RideRecordItemDTO = RideRecordDTO & {
    // 用户基本信息
    user: UserBasicDTO
}

// 骑行记录详情响应
export type RideRecordDetailResponse = {
    // 骑行记录信息
    rideRecord: RideRecordItemDTO
    // 轨迹点数据
    points: RideLocationDTO[]
}
