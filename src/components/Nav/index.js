import React from 'react';
import './style.css';

function Nav({ currentPage, setCurrentPage }) {
    return (
        <nav>
            <a className={currentPage == 'Home' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Home');
            }}>Home</a>
            <a className={currentPage == 'Search' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Search');
            }}>Search</a>
            <a className={currentPage == 'Saved-Trips' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Saved-Trips');
            }}>Saved Trips</a>
            <a className={currentPage == 'Contact' ? 'active-page' : 'inactive-page'} href="#"onClick={() => {
                setCurrentPage('Contact');
            }}>Contact</a>
        </nav>
    );
}

export default Nav;