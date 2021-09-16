import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

//de esta manera se puede ejecutar cualquier acciones asinc
export const startLoginWithEmailPassword = (email, password)=>{
    return(dispatch)=>{// el dispatch es ofrecido por thunk

        dispatch(startLoading());//pa trabar el boton de login

        firebase.auth().signInWithEmailAndPassword(email, password).then(({ user }) =>{
            dispatch(
                login(user.uid, user.displayName)
            );

            dispatch(finishLoading());//pa des-trabar el boton de login

        }).catch( e => {
            console.log(e);

            dispatch(finishLoading());//pa des-trabar el boton de login

            Swal.fire('Error',e.message, 'error' );//msm de error genericos de internet
        })
        // dispatch(login(123, 'pedro'))
    }
};

export const startRegisterWithEmailPasswordName = (email,  password, name) =>{
    return( dispatch ) =>{

        firebase.auth().createUserWithEmailAndPassword(email, password).then( async ({ user }) =>{
            //con esto optenemos displayname con la siguiten funsion de firebase la tendremo
            await user.updateProfile({ displayName: name });

            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch( e => {
            console.log(e);
            Swal.fire('Error',e.message, 'error' );
        })
    }
};

export const startGoogleLogin =()=>{
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            } )
    }
};

export const login = (uid, displayName)=>{
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
};

export const startLogout = () =>{
    return async ( dispatch ) =>{
        await firebase.auth().signOut();
        //espraremos a que todo esto se ejecute para encadenar una accion que borrara mi uid y el displayName del store
        dispatch( logout() );
    }
}

export const logout = () =>({
    type: types.logout
})





