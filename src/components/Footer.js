import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer fixed bottom-0 w-full footer-center p-4 bg-base-100 text-base-content border-t border-t-base-200 shadow-2xl bg-opacity-50 backdrop-blur">
            <div>
                <p>Copyright © {currentYear} - All right reserved by <a className="link link-secondary" href="https://github.com/mhs003">Monzurul Hasan</a></p>
            </div>
        </footer>
    )
}

export default Footer