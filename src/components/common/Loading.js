import React from 'react'

const Loading = () => {
    return (
        <>
            <div className='flex items-center justify-center text-xl w-full h-full bg-base-300 z-50 bg-opacity-50 backdrop-blur fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 btn btn-primary loading normal-case font-normal'>
                Loading...
            </div>
        </>
    )
}

export default Loading