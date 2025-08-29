export type ResponseBase = {
    success: boolean
    message: string
}

// 新系统统一使用这个类型作为相应数据的类型 T是dto中定义的业务数据类型
export type ResponseData<T> = {
    success: boolean
    message: string
    data: T | null
}

export type ServiceQueryResult<T> = { total: number; data: T[] }
