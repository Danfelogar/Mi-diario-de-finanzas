import { types } from "../types/types";
//TODO ESTO ES PARA LA AUTENTIFICACION
//el reducer deberia de tener primero un state vacion si no estoy autenticado, cuando este autenticado tendremos un "uid" y un "name"autentificado por firebase
//se inicializa el state al tener un obj vacio


export  const authReducer =(state ={ }, action )=>{
//reuceda que el state no puede recibir ni null ni undefine
    switch ( action.type ) {
        case types.login:
                return{
                    uid: action.payload.uid,
                    name: action.payload.displayName
                }

        case types.logout:
                return { }

        default:
            return state;
    }
}