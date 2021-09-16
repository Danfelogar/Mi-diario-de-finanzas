import { types } from "../types/types";


export const windowOpen =()=>({
    type: types.windowWindowOpen,
})

export const windowClose =()=>({
    type: types.windowWindowClose,
})

export const setError = ( err ) =>({
    type: types.wvSetError,
    payload: err

})

export const removeError = ( err ) =>({
    type: types.wvRemoveError,

})
