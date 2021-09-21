import React from 'react'
import { useSelector } from 'react-redux';
import { JournalEntry } from './JournalEntry';
import { useForm } from '../../hooks/useFrom';

export const JournalEntries = () => {

    const { notes } = useSelector( state => state.notes );

    const [ { searchText }, handleInputChange]  = useForm({
        searchText: ''
    });

    const searchTextSensitive  = searchText.toLocaleLowerCase();

    return (
        <>
        <div className=".body-filter">
            <form
            className="search-box">
                <input
                type="text"
                placeholder="hola"
                name="searchText"
                value={ searchText }
                autoComplete="off"
                onChange={ handleInputChange }
                />
                <button type="reset"></button>
            </form>
        </div>
        <div className="journal__entries">
            {
                notes.filter(e => e.title.toLocaleLowerCase().includes( searchTextSensitive ) ).map( note =>(
                    <JournalEntry
                    key={ note.id }
                    { ...note }
                    />
                ))
            }
        </div>
        </>
    )
}
