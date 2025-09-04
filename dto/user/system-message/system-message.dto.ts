export type SystemMessageDTO = {
    id: string
    // 标题
    title: string
    // 内容
    content: string
    // 推送时间
    pushTime: number
    // 推送群体
    pushGroup: string
    // 条件开始时间
    conditionStartTime: number
    // 条件结束时间
    conditionEndTime: number
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number
    // 更新人
    updatedBy: string
}
