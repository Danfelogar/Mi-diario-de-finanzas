import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploadin } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);

    const inputFile = useRef(null);

    const handleSave = () => {
        dispatch( startSaveNote(active) )
    }

    const handlePictureClick = () => {

        inputFile.current.click(); // La referencia se usa y se "ejecuta" su click

        //DEL PROFE
        // document.querySelector('#fileSelector').click();
        //con esto le digo al "picture" simulame un click en el elemento id que te he nombrado
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploadin(file));
        }

        // console.log(e.target);
        // recuerda este es un metodo para llegar a saber todas las proiedades de un elemento o accion llamada
    }

    return (
        <div className="note__appbar">
            <span>28 de agosto 2020</span>

            <input
            ref = { inputFile }
            type="file"
            name="file"
            style={{display: 'none'}}
            onChange={ handleFileChange }
            />

            <div>
                <button className="btn"
                onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button className="btn"
                onClick={ handleSave }
                >
                    Save note
                </button>
            </div>
        </div>
    )
}
