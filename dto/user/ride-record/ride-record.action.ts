// 开始骑行请求
export type RideStartRequest = {
    assetId: string
}

// 开始骑行响应
export type RideStartResponse = {
    rideId: string
}

type RidePoint = {
    latitude: number
    longitude: number
    timestamp: number
    accuracy: number
    altitude: number
    speed: number
    bearing: number
    type: string // LocationDataSourceType类型
}

// 上传骑行数据请求
export type UploadRidePointsRequest = {
    rideId: string
    points: RidePoint[]
}

// 结束骑行请求
export type RideEndRequest = {
    rideId: string
}

// 骑行轨迹详情
export type RideTrackDetailRequest = {
    rideId: string
}

// 骑行轨迹详情响应
export type RideTrackDetailResponse = {
    duration: number
    distance: number
    averageSpeed: number
    maxSpeed: number
    minSpeed: number
    points: RidePoint[]
}

// 轨迹记录列表
export type RideTrackListRequest = {
    skip: number
    take: number
    assetId: string
}

// 轨迹记录列表响应
export type RideTrackListResponse = {
    total: number
    list: {
        id: string
        averageSpeed: number
        distance: number
        startTimestamp: number
        endTimestamp: number | null
    }[]
}
