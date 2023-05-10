import React from 'react'
import ajax from '../controllers/ajax'
import Input from './common/Input'
import Textarea from './common/Textarea'

const Modal = ({ notes, setNotes, BASE_URL }) => {
    const clearForm = () => {
        document.getElementById('title').value = "";
        document.getElementById('content').value = "";
    }
    const addNote = () => {
        const titleElm = document.getElementById('title');
        const contentElm = document.getElementById('content');
        const title = titleElm.value.trim();
        const content = contentElm.value.trim();
        const addBtn = document.getElementById('addBtn');
        const modalController = document.getElementById('my-modal');
        addBtn.classList.add('loading');

        if (title !== "" && content !== "") {
            ajax.post(BASE_URL, {
                title: title,
                content: content
            }, function (data, status, resp_code) {
                if (status === 'success') {
                    addBtn.classList.remove('loading');
                    // setNotes([
                    //     {
                    //         title: title,
                    //         content: content
                    //     },
                    //     ...notes
                    // ]);
                    modalController.click();
                    clearForm();
                } else {
                    addBtn.classList.remove('loading');
                }
            });
        } else {
            (title === "") ? titleElm.focus() : contentElm.focus();
            addBtn.classList.remove('loading');
        }
    }
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <label htmlFor="my-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold mb-3">Create a new note.</h3>
                    <Input id="title" title="Note title" placeholder="Title" />
                    <Textarea id="content" title="Note content" placeholder="Write something..." />
                    <div className="modal-action justify-between">
                        <label htmlFor="my-modal" className="btn btn-error text-white normal-case w-1/2" onClick={clearForm}>Cancel</label>
                        <label className="cursor-pointer btn btn-info text-white normal-case w-1/2" onClick={addNote} id="addBtn">Add</label>
                    </div>
                </label>
            </label>
        </>
    )
}

export default Modal