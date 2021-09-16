import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

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