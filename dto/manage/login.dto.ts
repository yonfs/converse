export type LoginDTO = {
    id: string
    account: string
    name: string | null
    token: string
    permissions: string[]
}
