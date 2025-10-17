// 开始骑行请求
export type RideStartRequest = {
    assetId: string
}

// 开始骑行响应
export type RideStartResponse = {
    rideId: string
}

// 上传骑行数据请求
export type RideUploadDataRequest = {
    rideId: string
    dataPoints: Array<{
        timestamp: number
        position: {
            latitude: number
            longitude: number
        }
    }>
}

// 结束骑行请求
export type RideEndRequest = {
    rideId: string
    endTime: number
}
