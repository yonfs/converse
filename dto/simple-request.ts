export type OnlyIdRequest = {
    id: string
}

export type OnlyIdsRequest = {
    ids: string[]
}

export type OnlyKeywordRequest = {
    keyword: string | null
}

// 查询时间范围（数据结构为时间戳）
export type QueryTimeRequest = {
    queryTimeType: string | null
    queryTimeRange: [number, number] | null
}

export type PageRequest = {
    skip: number
    take: number
}
