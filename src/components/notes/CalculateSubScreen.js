import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCalculationProcess } from '../../actions/mathOperations';
// import { activeNote, startSaveNote } from '../../actions/notes';

// import { removeError, setError } from '../../actions/ui';
import { removeError, setError, windowClose } from '../../actions/widowView';
import { useForm } from '../../hooks/useFrom';

export const CalculateSubScreen = () => {

    const dispatch = useDispatch();

    const { view } = useSelector(state => state.window);

    // const { active } = useSelector(state => state.notes);

    // const { id } =  active;

    const cal = useSelector(state => state.mathOperations);

    const { borrowedValue, monthlyFees, numberOfPayments, monthlyEffectiveRate, interestToPay } = cal;

    const { msgError } = useSelector(state => state.window);

    const handleHiddenWindow = () =>{
        if(view === true) {
            dispatch(windowClose());
        }
    }

    const solveCalculation = (e) => {
        e.preventDefault();
        if(isFormVaild() ){
            dispatch( startCalculationProcess(number1,number2,number3));
        }
    }

    const isFormVaild = ()=>{//validacion de los inputs

        if( number1.trim().length === 0 || number1 === '0' || number1 === null || number1 === undefined )  {
            dispatch( setError('Remember that you have to assign a value for row 1 and that it is different from zero') );
            return false;
        }else if( number2.trim().length === 0 || number2 === '0' || number2 === null || number2 === undefined ) {
            dispatch( setError('Remember that you have to assign a value for row 2 and that it is different from zero') );
            return false;
        }else if( number3.trim().length === 0 || number3 === '0' || number3 === null || number3 === undefined ) {
            dispatch( setError('Remember that you have to assign a value for row 3 and that it is different from zero') );
            return false;
        }

        else {
            dispatch(removeError());
            return true;
        }
    }

    const [ formValues, handleInputChange ] = useForm({
        number1: '',
        number2: '',
        number3: ''
    });

    const { number1, number2, number3 } = formValues;

    // const handleNewCal = ()=>{
    //     dispatch( startNewCal() );
    // }

    // const handleSaveCalculation =async()=>{

    //     await dispatch( activeNote(id,cal) )

    //     dispatch( startSaveNote(active) );

    // }

    return (
        <section className="wrap__calculation-table">
        <div className="notes__calculation-table">
            <div className="container__btn-close"  onClick={ handleHiddenWindow } >
                <div className="btn-close" >
                    <span className="left">
                    <span className="circle-left"></span>
                    <span className="circle-right"></span>
                    </span>
                    <span className="right">
                    <span className="circle-left"></span>
                    <span className="circle-right"></span>
                    </span>
                </div>
            </div>
            <div className="container__calculation-table">
                <h1>Personal loan calculator and simulator</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Value to be loaned <span>Without thousand or million points</span></th>
                            <td>
                                <div className="field">
                                    <input className="calculaton-input" type="number" placeholder="Click me to give a value" name="number1" value={ number1 } min="0" onChange={ handleInputChange } />
                                        <div className="line"></div>
                                </div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Number of months</th>
                            <td>
                                <div className="field">
                                <input className="calculaton-input" type="number" placeholder="Click me to give a value" name="number2" value={ number2 } min="0" onChange={ handleInputChange } />
                                    <div className="line"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Loan interest <span>% annual APR</span></th>
                            <td>
                                <div className="field">
                                <input className="calculaton-input" type="number" placeholder="Click me to give a value" name="number3" value={ number3 } min="0" onChange={ handleInputChange } />
                                    <div className="line"></div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn-calculate bouncy" onClick={ solveCalculation }>Calculate</button>
                {//si msgError es diferente de null se muestra lo sgte
                    msgError &&
                (
                    <div className="note__alert-error">
                        <p>{ msgError }</p>
                    </div>
                )
                }
                {
                    (monthlyEffectiveRate) &&
                    (
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
                                    <div className="calculation-res">{ borrowedValue }</div>
                                    <div className="calculation-res">{ monthlyFees }</div>
                                    <div className="calculation-res">{ numberOfPayments }</div>
                                    <div className="calculation-res">{ monthlyEffectiveRate }</div>
                                    <div className="calculation-res">{ interestToPay }</div>
                                </div>
                            </div>
                            {/* <button
                            onClick={ handleNewCal }
                            className="btn-calculate bouncy btn-save"> Save new cal</button> */}
                            <button
                            // onClick={ handleSaveCalculation }
                            className="btn-calculate bouncy btn-save"> Save calculation</button>
                        </div>
                    )
                }
            </div>
        </div>
    </section>
    )
}
