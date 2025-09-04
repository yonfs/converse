export type FeedbackDTO = {
    id: string
    // 用户id
    userId: string
    // 单车编号
    vehicleNumber: string | null
    // 涂鸦单车设备id
    tuyaBicycleId: string | null
    // 反馈内容
    content: string
    // 反馈图片
    image: string | null
    // 状态
    status: string
    // 处理时间
    handledAt: number | null
    // 处理人
    handledBy: string | null
    // 处理备注
    handledRemark: string | null
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
