import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';//recordar que para ejecutar esto es necesario la instalcion de "npm install --save redux-thunk" para ser usado en el store


import { authReducer } from '../Reducers/authReducer';
import { mathOperationsReducer } from '../Reducers/mathOperationsReducer';
import { notesReducer } from '../Reducers/notesReducer';
import { uiReducer } from '../Reducers/uiReducer';
import { windowViewReducer } from '../Reducers/windowViewReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;//esto es exportado de githut nos habilita las funciones del deeptools y vamos a poder aplicar Middleware

const reducer = combineReducers({//puede ser llamado rootReduxer para hacer refereciasa los reduxers
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
    window: windowViewReducer,
    mathOperations: mathOperationsReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )//con esto podemos trabajar acciones asincronas en nuestra app usando el redux
    );

// export const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//con esto se habilita el redux de inspector en chrome
//     );//solo trabaja con un reduxer al tiempo por lo que si se queiren agregar mas es necesario usar combineReducers