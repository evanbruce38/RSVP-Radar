import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

function About(props) {
    return(
        <>
            <section>
                <h2>Welcome to Travel Manager!</h2>
            </section>

            <section id='about'>
                <h2 id="about-title">Plan your dream vacation!</h2>

                <div class='column'>

                </div>
                <div class="main-section-content">
                    <p class="home-p">
                        Just go to search to start looking for hotels in any destination. Then click save to keep track of that your previous search! Head to the Saved Trips page to view your favorites!
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;