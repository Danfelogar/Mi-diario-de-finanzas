import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useFrom';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading } = useSelector(state => state.ui);//para seleccionar y desestructurar un elemento visible en el redux

    const [ formValues, handleInputChange ] = useForm({
        email: 'dani12@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) =>{

        e.preventDefault();

            dispatch( startLoginWithEmailPassword(email,password) );

    }

    const handleGoogleLogin = () =>{

        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth_title">Login</h3>

            <form onSubmit={ handleLogin } >
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

                <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={ loading }//para desavilitar el btn
                >
                    Login
                </button>

                <div className="auth_social_networks">
                    <p>Login with social networks</p>

                    <div className="google-btn"
                    onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                className="link"
                to="/auth/register">
                    Create new account
                </Link>

            </form>
        </>
    )
}
