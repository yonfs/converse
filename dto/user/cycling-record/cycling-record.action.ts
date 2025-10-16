// 开始骑行请求
export type RideStartRequest = {
    startTime: number
    startPosition: {
        latitude: number
        longitude: number
    }
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
    endPosition: {
        latitude: number
        longitude: number
    }
}
