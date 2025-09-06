export type FeedbackDTO = {
    id: string
    // 车架号
    vehicleIdentificationNumber: string | null
    // 反馈内容
    content: string
    // 图片
    image: string | null
    // 创建时间
    createdAt: number
}
