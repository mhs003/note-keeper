import React from 'react'
import Modal from './Modal'

const Header = ({ notes, setNotes, BASE_URL }) => {
    return (
        <>
            <div className="flex navbar bg-base-100 sticky top-0 z-40 border-b border-b-base-200 shadow-lg bg-opacity-50 backdrop-blur">
                <div className="navbar-start"></div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case px-2 text-2xl" href="/#"><span className="text-primary pr-2">Note</span><span className="text-base-content">Keeper</span></a>
                </div>
                <div className="navbar-end">
                    <label htmlFor="my-modal" className="btn">Add Note</label>
                </div>
            </div>
            <Modal notes={notes} setNotes={setNotes} BASE_URL={BASE_URL} />
        </>
    )
}

export default Header