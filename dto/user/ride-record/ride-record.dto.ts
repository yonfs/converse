export type RideRecordDTO = {
    id: string
    //用户id
    userId: string

    //用户资产id
    userAssetId: string

    //用户资产编号
    userAssetNumber: string

    // 骑行开始时间
    startTime: number

    // 骑行结束时间
    endTime: number | null

    // 平均速度
    averageSpeed: number

    // 骑行距离
    distance: number
}

export type rideLoactionDTO = {
    // 经度
    longitude: number

    // 纬度
    latitude: number
}
