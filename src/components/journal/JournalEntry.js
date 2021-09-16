import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div
            className="journal__entry-picture"
            // style={{
            //     backgroundSize:'cover',
            //     backgroundRepeat:'no-repeat',
            //     backgroundImage: 'url(https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20201005051836/EP1114_Gengar_de_Ash.png)'
            // }}
            >
                <img src="https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20201005051836/EP1114_Gengar_de_Ash.png" alt="gengarbestopk" />
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-tittle">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
