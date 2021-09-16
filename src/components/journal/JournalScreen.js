import React from 'react';
import { useSelector } from 'react-redux';

import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes)//con esto recuerda por enecima vezs que puedes extraer cosas del store

    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>

                {
                    ( active )
                        ? ( <NoteScreen /> )//recuerda cambiar esto a donde esta el :"acutalizavcion ya esta todo bien"
                        : ( <NothingSelected/>  )
                }

            </main>

        </div>
    )
}
