import { db } from "../firebase/firebase-config";

export const startNewNote = () => {
    return async (dispatch, getState ) =>{
        //getState es una funcion  que utilizare para acceder al "state" casi que lo mismo que useSelecctor
        const { uid } = getState().auth;
        console.log( uid );

        const newNote ={
            tittle: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote )
        // con db. accedo a la base de datos de mi firebase jouranl por asi decirlo la otra parte del http a donde lo queiro mandar y le digo que me añada lo que esta dentro de add

        console.log(doc)


    }
}
