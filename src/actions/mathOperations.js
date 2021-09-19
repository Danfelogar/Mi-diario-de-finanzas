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

// export const startNewCal = () => {
//     return async (dispatch, getState ) =>{
//         //getState es una funcion  que utilizare para acceder al "state" casi que lo mismo que useSelecctor
//         const { uid } = getState().auth;
//         console.log( uid );

//         const newCal ={
//             BorrowedValue:'',
//             MonthlyFees:'',
//             NumberOfPayments:'',
//             MonthlyEffectiveRate:'',
//             InterestToPay:'',
//             date: new Date().getTime()
//         }

//         const doc = await db.collection(`${ uid }/journal/mathOperations`).add( newCal );
//         // con db. accedo a la base de datos de mi firebase jouranl por asi decirlo la otra parte del http a donde lo queiro mandar y le digo que me añada lo que esta dentro de add

//         dispatch(activeCal(doc.id, newCal ));

//         console.log(doc);


//     }
// }

// export const activeCal = (id, cal) =>({
//     type: types.calsActive,
//     payload: {
//         id,
//         ...cal
//     }
// })


// export const startSaveCalculation =( cal ) =>{
//     //recordar que toda tarea sincrona y se trabajara con el middelwer thunk, por lo que es necesario las dependencias en el return
//     return async( dispatch, getState ) => {

//         const { uid } = getState().auth;

//         const calToFirestore ={...cal};

//         await db.doc(`${ uid }/journal/notes/${ cal.id }`).update(calToFirestore);
//         //con esta promesa yo hago que se guarde las cosas de manera sincrona en fireStore

//     }
// }




