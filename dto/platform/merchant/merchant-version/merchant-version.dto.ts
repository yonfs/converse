export type MerchantVersionDTO = {
    id: string
    /// 名称
    name: string
    /// 商户版本权限
    permission: string[]
    /// 商户版本备注
    remark: string | null
}
