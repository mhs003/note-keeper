import React from 'react'
import ajax from '../../controllers/ajax';

const Note = ({ title, content, id, setNotes, BASE_URL, setIsLoading }) => {
    const deleteThis = (e) => {
        const dbtn = document.getElementById('btn-'+id);
        dbtn.classList.add('btn-disabled');
        setIsLoading(true);
        ajax.post(BASE_URL, {
            delete_id: id
        }, function (data, status, resp_code) {
            if (status === 'success') {
                dbtn.classList.remove('btn-disabled');
                // setNotes((notes) => {
                //     return notes.filter((note, oid) => {
                //         return oid !== id;
                //     });
                // });
            }
            setIsLoading(false);
        });
    }
    return (
        <div className="card w-96 bg-green-50 shadow-xl">
            <div className="card-body">
                <h2 className="card-title flex justify-between mb-4">
                    {title}
                    <button id={'btn-'+id} onClick={deleteThis} className='btn btn-sm btn-outline btn-circle btn-accent normal-case px-9'>Delete</button>
                </h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Note