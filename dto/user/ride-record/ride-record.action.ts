// 开始骑行请求
export type RideStartRequest = {
    assetId: string
    zone: string
}

// 开始骑行响应
export type RideStartResponse = {
    rideId: string
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

// 骑行轨迹（列表项）
export type RideTrack = {
    id: string
    averageSpeed: number
    distance: number
    startTimestamp: number
    endTimestamp: number | null
}

// 轨迹记录列表响应
export type RideTrackListResponse = {
    total: number
    list: RideTrack[]
}
