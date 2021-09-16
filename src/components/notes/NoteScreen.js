import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { windowOpen } from '../../actions/widowView';
import { CalculateSubScreen } from './CalculateSubScreen';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { view } = useSelector(state => state.window);

    const handleAddFees = () =>{
        if(view === false) {
            dispatch(windowOpen());
        }
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">

                <input
                type="text"
                placeholder="Some awesome tittle"
                className="notes__tittle-input"
                autoComplete="off"
                />

                <textarea
                placeholder="What happened today"
                className="notes__textarea"
                ></textarea>

                {
                    ( view ) &&
                        ( <CalculateSubScreen/> )
                }

                <div className="notes__sub-content">
                    <div className="notes__images">
                        <img
                        src="https://cdn.pixabay.com/photo/2020/07/24/03/12/gengar-5432819__480.png"
                        alt="gengar besto pk"
                        />
                    </div>
                    <button
                    className="notes__amortization-fee"
                    onClick={ handleAddFees }
                    >
                        Calculate Fees
                    </button>
                </div>
            </div>
        </div>
    )
}
