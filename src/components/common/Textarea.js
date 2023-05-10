import React from 'react'

const Textarea = ({ id, title, alt, placeholder }) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor={id} className="label">
                    <span className="label-text">{title}</span>
                    <span className="label-text-alt">{alt}</span>
                </label>
                <textarea id={id} className="textarea textarea-secondary h-32 w-full" placeholder={placeholder}></textarea>
            </div>
        </>
    )
}

export default Textarea