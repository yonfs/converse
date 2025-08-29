export type OnlyIdRequest = {
    id: string
}

export type OnlyIdsRequest = {
    ids: string[]
}

export type OnlyKeywordRequest = {
    keyword: string | null
}

export type QueryTimeRequest = {
    queryTimeType: string | null
    queryTimeRange: string[] | null
}
