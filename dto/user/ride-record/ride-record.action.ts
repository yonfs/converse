import { PageRequest } from "../../simple-request"
import { RideRecordDTO } from "./ride-record.dto"

// 开始骑行请求
export type RideStartRequest = {
    assetId: string
    // 区域
    zone: string
}

type RidePoint = {
    // 经度
    latitude: number
    // 纬度
    longitude: number
    // 时间戳
    timestamp: number
    // 精度
    accuracy: number
    // 海拔
    altitude: number
    // 速度
    speed: number
    // 方向
    bearing: number
    // LocationDataSourceType类型
    type: string
}

// 上传骑行数据请求
export type UploadRidePointsRequest = {
    rideId: string
    points: RidePoint[]
}

// 骑行轨迹详情响应
export type RideTrackDetailResponse = {
    // 时长
    duration: number
    // 距离
    distance: number
    // 平均速度
    averageSpeed: number
    // 最大速度
    maxSpeed: number
    // 最小速度
    minSpeed: number
    // 轨迹点
    points: RidePoint[]
}

// 轨迹记录列表
export type RideTrackListRequest = PageRequest & {
    assetId: string
}

// 轨迹记录列表响应
export type RideTrackListResponse = {
    total: number
    list: RideRecordDTO[]
}
