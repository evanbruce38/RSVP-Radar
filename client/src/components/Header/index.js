import React from 'react';
import Nav from '../Nav';

function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
            <a id="title-name" className={currentPage == 'Home' ? 'active-page': 'inactive-page'} title-name href='#'onClick={() => {
                setCurrentPage('Home');
            }}>RSVP Radar</a>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header;