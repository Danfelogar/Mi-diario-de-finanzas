import { types } from "../types/types";

export const startCalculationProcess =(number1,number2,number3) =>{

    return(dispatch)=>{
        const n1 = parseInt(number1);//valor prestado
        const n2 = parseInt(number2);//numero de cuotas
        const n3 = parseInt(number3);//interes anual

        const mER1= Math.pow((1+(n3/100)), (1/12)) - 1;//monthlyEffectiveRate
        const mER = Math.round(mER1 * 100000) / 100000;

        const monthlyFees1 =(n1*(mER*Math.pow((1+mER), (n2))))/(Math.pow((1+mER), (n2))-1);
        const monthlyFees = Math.round(monthlyFees1 * 100000) / 100000;

        const interestToPay1 =(monthlyFees*n2)-n1;
        const interestToPay = Math.round(interestToPay1 * 100000) / 100000;

        dispatch(mathOperations(monthlyFees,mER,interestToPay,n1,n2));
    }

}


export const mathOperations = (monthlyFees,mER,interestToPay,n1,n2) => ({
    type: types.feesCalculation,
    payload: {
        monthlyFees,
        mER,
        interestToPay,
        n1,
        n2
    }
})





