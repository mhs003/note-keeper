import React from 'react'
import Note from './common/Note'

const Notes = ({ notes, setNotes, BASE_URL, setIsLoading }) => {
    // console.log(notes);
    return (
        <div className='p-5 flex flex-wrap justify-center gap-5 pb-20 h-full overflow-y-scroll'>
            {(notes.length > 0) ? notes.map((note, id) => {
                return <Note title={note.title} content={note.content} id={id} setNotes={setNotes} BASE_URL={BASE_URL} setIsLoading={setIsLoading} />
            }) : <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 font-mono text-sm select-none">-- Empty Notes --</h1>}
        </div>
    )
}

export default Notes