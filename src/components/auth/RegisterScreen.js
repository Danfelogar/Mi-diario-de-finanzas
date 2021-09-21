import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

import { useForm } from '../../hooks/useFrom';

export const RegisterScreen = () => {

    const dispatch = useDispatch();//para ver todo en el state del redux en el googleChrome la parte de herramientas de desarrollo
    const { msgError } = useSelector(state => state.ui);//este hook me me regresara todo lo que este ne la seccion de state o en este caso todo lo que pite el dispatch(ojos con "console.log(state (forma base "const state = useSelector(state => state)"))" puedo usarlo para ver que parte del texto es generado para estraerlo con el selector y asi plasmarlo)

    const [ formValues, handleInputChange ] = useForm({
        name: 'DanielUp',
        email: 'dani12@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormVaild() ){
            dispatch(startRegisterWithEmailPasswordName(email,password,name) );
        }
    }

    const isFormVaild = ()=>{//validacion de los inputs

        if( name.trim().length === 0 ) {
            dispatch( setError('name is required') );
            // console.log('name is required');
            return false;
        } else if( !validator.isEmail( email ) ){// lo exporete de "npm install validator" para la validacion del form input
            dispatch( setError('Email is not valid') );
            // console.log('Email is not valid')
            return false;
        }else if( password !== password2 || password.length < 5 ){
            dispatch( setError('Password should be at least 6 characters and match each other') );
            // console.log('Password should be at least 6 characters and match each other')
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth_title">Register</h3>

            {//si msgError es diferente de null se muestra lo sgte
                msgError &&
                (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                )
            }

            <form
            className="animate__animated animate__flipInY animate__faster"
            onSubmit={ handleRegister } >
                <input
                className="auth_input"
                type="text"
                placeholder="Name"
                autoComplete="off"
                name="name"
                value={ name }
                onChange={ handleInputChange }
                />

                <input
                className="auth_input"
                type="text"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={ email }
                onChange={ handleInputChange }
                />

                <input
                className="auth_input"
                type="password"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ handleInputChange }
                />

                <input
                className="auth_input"
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={ password2 }
                onChange={ handleInputChange }
                />

                <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                // onClick={ handleRegister }
                >
                    Register
                </button>

                <Link
                className="link"
                to="/auth/login">
                    Already registered?
                </Link>

            </form>
        </>
    )
}
