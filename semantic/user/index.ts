import auth from './modules/auth'
import userAsset from './modules/user-asset'
export const userSemantics = {
    ...auth,
    ...userAsset
}
