// 骑行记录DTO（平台端）
export type RideRecordDTO = {
    id: string
    // 用户id
    userId: string
    // 用户资产id
    userAssetId: string
    // 用户资产编号
    userAssetNumber: string
    // 骑行开始时间
    startTime: number
    // 骑行结束时间
    endTime: number | null
    // 最高速度
    maxSpeed: number
    // 最低速度
    minSpeed: number
    // 平均速度
    averageSpeed: number
    // 骑行距离
    distance: number
    // 正在骑行中
    isRiding: boolean
}

// 骑行位置点DTO
export type RideLocationDTO = {
    // 经度
    longitude: number
    // 纬度
    latitude: number
    // 速度
    speed: number | null
}

// 用户基本信息DTO
export type UserBasicDTO = {
    id: string
    phone: string | null
    email: string | null
    nickname: string | null
    avatar: string | null
}
