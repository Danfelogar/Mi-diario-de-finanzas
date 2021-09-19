//PARA NO EQUIVOCARME A LA HORA DE MANDAR LOS TYPES AL authReducer

export const types ={
    login: '[Auth] Login',//quiere decir que el login apunta al auth
    logout: '[Auth] Logout',

    //originario del reduxer ui y utilizado para el register

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    //para bloquear el boton de login

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',


    //acciones del note para borrar, agregar, actualizar y colocar img

    notesAddNew: '[Notes] New note',
    notesActive: '[Notes] Set active note',
    notesLoad: '[Notes] Load notes',
    notesUpdated: '[Notes] Update note saved',
    notesFileUrl: '[Notes] Update image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',

    //cerrar o abrir ventana
    windowWindowOpen: '[WindowView] Window Open',
    windowWindowClose: '[WindowView] Window Close',
    wvSetError: '[WindowView] Set Error',
    wvRemoveError: '[WindowView] Remove Error',

    //Ejecutar calculo
    feesCalculation: '[MathOperations] Fees Calculation',
    // calsActive: '[MathOperations] Set active Calculation',
}
