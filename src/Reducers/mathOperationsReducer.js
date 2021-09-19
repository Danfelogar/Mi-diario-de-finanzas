import { types } from "../types/types";

const initialState = {
    borrowedValue:'',
    monthlyFees: '',
    numberOfPayments:'',
    monthlyEffectiveRate: '',
    interestToPay: ''
}

export const mathOperationsReducer = (state =initialState, action) => {
    switch ( action.type ) {
        case types.feesCalculation:
                return{
                    monthlyFees: action.payload.monthlyFees,
                    monthlyEffectiveRate: action.payload.mER,
                    interestToPay: action.payload.interestToPay,
                    borrowedValue: action.payload.n1,
                    numberOfPayments: action.payload.n2
                }
        // case types.calsActive:
        //     return{
        //         monthlyFees: action.payload.monthlyFees,
        //         monthlyEffectiveRate: action.payload.mER,
        //         interestToPay: action.payload.interestToPay,
        //         borrowedValue: action.payload.n1,
        //         numberOfPayments: action.payload.n2
        //     }


        default:
            return state;
    }
}
