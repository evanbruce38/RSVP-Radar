import React from 'react';
/// import Project from '../../components/Project;

function Search() {


    return (
        <section className="content">
            <div className="section-title">
                <h1>Find for your dream vacation!</h1>
            </div>
            <div className="main-content">
                <form id="search-bar">
                    <div class="field">
                        <label class="title" for="search">Location:</label>
                        <input class="container" type="search" placeHolder="City" id="searchInput"/>
                        
                        <label class="title" for="start">Start Date:</label>
                        <input class="container" type="date" id="start" name="trip-start" value="2022-11-18" min="2022-11-10" max="2032-12-31"/>

                        <label class="title" for="start">End Date:</label>
                        <input class="container" type="date" id="end" name="trip-end" value="2022-11-18" min="2022-11-10" max="2032-12-31"/>
                        
                        <button class="btn" type="submit" id="searchInput"><i>Search</i></button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Search;