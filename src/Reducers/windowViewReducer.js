import { types } from "../types/types";

const initialState = {
    view: false,
    msgError: null
}

export const windowViewReducer = ( state = initialState, action ) => {
    switch (action.type) {
            case types.windowWindowOpen:
                return{
                    ...state,
                    view: true
                }
            case types.windowWindowClose:
                return{
                    ...state,
                    view: false
                }
            case types.wvSetError:
                return{
                    ...state,
                    msgError: action.payload
                }
            case types.wvRemoveError:
                return{
                    ...state,
                    msgError: null
                }
        default:
            return state;
    }
}