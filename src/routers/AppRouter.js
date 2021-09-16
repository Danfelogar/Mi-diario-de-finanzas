import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    // Route,
    Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRoute';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import {  startLoadingNotes } from '../actions/notes';

export const  AppRouter  = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        //creara observable que se puede disparar muchas veces para verificar o saber si el usuario cambia,se loguea, etc... verifica el cambio del user

        firebase.auth().onAuthStateChanged(async (user) => {
            //como en el noteReducer el reducer de notes load recibe un apromesa es propio de nosotros poner un async y await

            if ( user?.uid ){
                dispatch(login( user.uid, user.displayName ));
                setIsLoggedIn( true );

                dispatch( startLoadingNotes( user.uid ) );


            } else {
                setIsLoggedIn ( false );
            }

            setChecking(false);

        });
    }, [dispatch, setChecking, setIsLoggedIn])
    //el h1 se delimitara a mostrar el msm hasta tener una respuesta de firebase (rectificando si hay un uid de la otra funcion)
    if ( checking)  {
        return (
            // <h1>Espere...</h1>
            <LoadingScreen />
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter
                    path="/auth"
                    component={ AuthRouter }
                    isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRouter
                    exact path="/"
                    component={ JournalScreen }
                    isAuthenticated={ isLoggedIn }

                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
)
}
