export type SystemMessageDTO = {
    id: string
    // 标题
    title: string
    // 内容
    content: string
    // 可见时间
    visibleTime: number
    // 创建时间
    createdAt: number
    // 创建人
    createdBy: string
    // 更新时间
    updatedAt: number | null
    // 更新人
    updatedBy: string | null
}
