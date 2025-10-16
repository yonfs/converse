// 开始骑行响应
export type RideStartResponse = {
    rideId: string
}

// 上传骑行数据响应
export type RideUploadDataResponse = {
    // 可以根据需要添加响应字段
}

// 结束骑行响应
export type RideEndResponse = {
    totalDistance: number
    totalTime: number
    averageSpeed: number
}
