import type { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import type { BluetoothAccessoryModelDTO } from './bluetooth-accessory-model.dto'

export type QueryBluetoothAccessoryModelRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type QueryBluetoothAccessoryModelResponse = {
    list: BluetoothAccessoryModelDTO[]
    total: number
}

export type UpdateBluetoothAccessoryModelRequest = {
    id: string
    //型号名称
    modelName: string
    //图片URL
    modelImage: string | null
}

export type CreateBluetoothAccessoryModelRequest = {
    //型号名称
    modelName: string
    //图片URL
    modelImage: string | null
}
