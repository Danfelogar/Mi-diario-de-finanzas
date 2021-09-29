import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activeNote, startDeleting, startSaveNote } from '../../actions/notes';
import { windowOpen } from '../../actions/widowView';
import { useForm } from '../../hooks/useFrom';
import { CalculateSubScreen } from './CalculateSubScreen';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );

    const cal  = useSelector(state => state.mathOperations);

    // const { borrowedValue, monthlyFees, numberOfPayments, monthlyEffectiveRate, interestToPay } = cal ;

    const [ formValues, handleInputChange, reset ] = useForm( note );

    const { body, title, id } = formValues;

    const activeId = useRef( note.id );
    //basicamente me permite modificar una variable mutable que no me va a redibujar todo el componente si cambia

    useEffect(() => {
        if(note.id !== activeId.current){
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset]);//investigar mas componente altamente sensible y generador de bucles si no se trata bien

    useEffect(() => {

        dispatch( activeNote(formValues.id,{...formValues}) );


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues,dispatch])//con esto guardo las notas en el active cada vez que cambian las dependencias

    // const handleSaveCalulation =

    const handleSaveCalculation =async()=>{

        const resultForSave = {...formValues,...cal}

        await dispatch( activeNote(formValues.id,{...resultForSave }) )

        dispatch( startSaveNote(resultForSave) );

    }

    const handleDelete = () =>{

        dispatch (startDeleting( id ));

    }

    const { view } = useSelector( state => state.window );

    const handleAddFees = () =>{
        if(view === false) {
            dispatch(windowOpen());
        }
    }
    // debugger
    return (
        <div className="notes__main-content
        animate__animated animate__fadeIn
        ">
            <NotesAppBar/>

            <div className="notes__content">

                <input
                type="text"
                placeholder="What financial commitment or event do you have today?"
                className="notes__tittle-input"
                autoComplete="off"
                name="title"
                value={ title }
                onChange= { handleInputChange }
                />

                <textarea
                placeholder="What happened today"
                className="notes__textarea"
                name="body"
                value={ body }
                onChange= { handleInputChange }
                ></textarea>

                {
                    ( view ) &&
                        ( <CalculateSubScreen/> )
                }

                <div className="notes__sub-content">

                    {
                        (note.url) &&
                        (
                            <div className="notes__images">
                            <img
                            src={ note.url }
                            alt="gengar besto pk"
                            />
                        </div>
                        )
                    }
                    <div className="container__calculation">
                        <h1>Financial calculation summary</h1>
                        <div className="wrap-calculation">
                            <div className="calculation-attributes">
                                <div className="calculation-att">Borrowed value:</div>
                                <div className="calculation-att">Monthly fees:</div>
                                <div className="calculation-att">Number of payments:</div>
                                <div className="calculation-att">Monthly Effective Rate:</div>
                                <div className="calculation-att">Interest to Pay:</div>
                            </div>
                            <div className="calculation-results">
                                <div className="calculation-res">{   note?.borrowedValue  }</div>
                                <div className="calculation-res">{  note?.monthlyFees }</div>
                                <div className="calculation-res">{  note?.numberOfPayments }</div>
                                <div className="calculation-res">{  note?.monthlyEffectiveRate }</div>
                                <div className="calculation-res">{  note?.interestToPay }</div>
                            </div>
                        </div>
                        <button
                        onClick={ handleSaveCalculation }
                        className="btn-calculate btn-save"> Save calculation Here</button>
                    </div>
                    <button
                    className="notes__amortization-fee"
                    onClick={ handleAddFees }
                    >
                        Calculate Fees
                    </button>
                </div>
            </div>
            <button
            className="btn btn-danger"
            onClick={ handleDelete }
            >Delete</button>
        </div>
    )
}
