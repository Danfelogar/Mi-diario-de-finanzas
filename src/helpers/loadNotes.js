import { db } from "../firebase/firebase-config"



export const loadNotes = async (uid) => {

    const noteSnap = await db.collection(`${ uid }/journal/notes`).get();
    // tenemos que llamar las colleciones del firebase que en este caso son todas las entradas que he creado en mi usuario para ello debemos llamarlo asi...(esta collection sale guiandonos de la web de firebase para guiarnos y llamarlo en este codigo)
    const notes = [];

    noteSnap.forEach( snapSon => {
        notes.push({
            id: snapSon.id,
            ...snapSon.data()
        })
    });

    //generaremos un nuevo arreglo para almacenarlo en notes que me regresaria en este caso el elementeo hijo o snapSon para el nuevo arreglo le sumaremos o empujaremos lo contenido en el .push({})

    console.log(notes);

    return notes;
}