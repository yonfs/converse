import { OnlyKeywordRequest, PageRequest, QueryTimeRequest } from '../../simple-request'
import { BluetoothAccessoryDTO } from './bluetooth-accessory.dto'

export type QueryBluetoothAccessoryRequest = OnlyKeywordRequest & PageRequest & QueryTimeRequest

export type BatchCreateBluetoothAccessoryRequest = {
    // 型号
    modelId: string
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

// 查询模板文件地址响应
export type QueryTemplateURLResponse = {
    url: string
}

export type UploadBluetoothAccessoryRequest = {
    bluetoothAccessoryModelId: string
    remark: string | null
}

// 批量录入车辆数据错误时的响应数据类型
export type UploadBluetoothAccessoryErrorResponse = {
    // 错误类型 参数错误 数据错误
    errorType: 'parmeter' | 'data'
    // 错误的列名称
    errorColumn: string
    // 错误的提示信息需要进行翻译的值
    errorMessage: string
    // 错误的数据
    errorData: string
    // 错误的数据行号
    errorRow: number
}