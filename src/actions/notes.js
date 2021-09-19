import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async (dispatch, getState ) =>{
        //getState es una funcion  que utilizare para acceder al "state" casi que lo mismo que useSelecctor
        const { uid } = getState().auth;
        console.log( uid );

        const newNote ={
            title: '',
            body: '',
            borrowedValue:'',
            monthlyFees:'',
            numberOfPayments:'',
            monthlyEffectiveRate:'',
            interestToPay:'',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
        // con db. accedo a la base de datos de mi firebase jouranl por asi decirlo la otra parte del http a donde lo queiro mandar y le digo que me añada lo que esta dentro de add

        dispatch(activeNote(doc.id, newNote ));

        console.log(doc);


    }
}

export const activeNote = (id, note) =>({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = ( uid ) =>{
    return async( dispatch ) => {
        const notes = await loadNotes( uid );
        // con esto instantaneamente a penas se logue mandamos a llamar sus notas hechas
        dispatch( setNotes(notes) );
        //con esto almacenamos las notas en el store

    }
}

export const setNotes = ( notes ) =>({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote =( note ) =>{
    //recordar que toda tarea sincrona y se trabajara con el middelwer thunk, por lo que es necesario las dependencias en el return
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url;
        }

        const noteToFirestore ={...note};
        delete noteToFirestore.id;//con esto elimino el id del objeto para que no se suba dentro del note, recordar que el documento del journal en fire store ya tiene ese id para identificar la nota
        // debugger
        await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);
        //con esta promesa yo hago que se guarde las cosas de manera sincrona en fireStore

    }
}