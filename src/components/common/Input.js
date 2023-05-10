import React from 'react'

const Input = ({ id, title, alt, placeholder }) => {
    return (
        <>
            <div className="form-control">
                <label htmlFor={id} className="label">
                    <span className="label-text">{title}</span>
                    <span className="label-text-alt">{alt}</span>
                </label>
                <input id={id} type="text" placeholder={placeholder} className="input input-bordered input-secondary w-full" />
            </div>

        </>
    )
}

export default Input