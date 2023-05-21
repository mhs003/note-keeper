import React from 'react'

const Footer = () => {
    // const currentYear = new Date().getFullYear();
    return (
        <footer className="footer fixed bottom-0 w-full footer-center p-4 bg-base-100 text-base-content border-t border-t-base-200 shadow-2xl bg-opacity-50 backdrop-blur">
            <div>
                <p>Copyright <a target="_blank" rel="noopener noreferrer" className="link link-secondary" href="https://github.com/mhs003">Monzurul Hasan</a> | Project source available in <a target="_blank" rel="noopener noreferrer" className="link link-primary" href="https://github.com/mhs003/note-keeper/">Github</a></p>
            </div>
        </footer>
    )
}

export default Footer
