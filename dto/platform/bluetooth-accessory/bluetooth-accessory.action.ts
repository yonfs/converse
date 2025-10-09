import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { BluetoothAccessoryDTO } from './bluetooth-accessory.dto'

export type QueryBluetoothAccessoryRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type BatchCreateBluetoothAccessoryRequest = {
    // 型号ID
    modelId: string | null
    // 内容(车架号)
    content: string
}

export type QueryBluetoothAccessoryResponse = {
    list: BluetoothAccessoryDTO[]
    total: number
}

export type UpdateBluetoothAccessoryRequest = {
    id: string
    // 型号ID
    modelId: string | null
    // 资产id
    assetId: string | null
}
