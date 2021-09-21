import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
// react-journal
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

        dispatch( activeNote( doc.id, newNote ) );
        dispatch( addNewNote( doc.id, newNote ) );

        console.log(doc);


    }
}

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

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

        dispatch( refreshNote(note.id, noteToFirestore) );
        //con este dispatch aseguro que al acutalizarce se me actualizen las tarjetas del sidebar que es  la columna que esta a la izquierda
        Swal.fire('Saved',note.title,'success');
        //con esto lanzamos un msm de alerta cada vez que la accion finaliza
    }
}

export const refreshNote = ( id, note ) =>({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

//todas las funciones asincronas llevan por nombre "star"
export const  startUploadin = (file) => {
    return async( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });//todos estos comandos estan en la documentacion de sweetalert2

        const fileUrl = await fileUpload( file );

        activeNote.url = fileUrl;

        dispatch( startSaveNote(activeNote) )

        Swal.close();

    }
}

export const startDeleting = ( id ) =>{
    return async( dispatch, getState ) => {

        const uid =getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();//con esto se borra en el db
        //ahora tenemos que borrarolo fisica o visualmente

        dispatch( deleteNote( id ) );

    }
}

export const deleteNote = (id) =>({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = ( ) => ({
    type: types.notesLogoutCleaning
})