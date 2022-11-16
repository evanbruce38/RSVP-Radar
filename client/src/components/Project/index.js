import React from 'react';

function Hotels () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d7f9b291dmsh56461c92c1d86b6p1072c1jsn4812d102b6f5',
            'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
        }
    }

    fetch('https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=HDR&location_id=3000035821&date_checkout=2022-11-16&date_checkin=2022-11-15&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&rooms_number=1&amenities_ids=FINTRNT%2CFBRKFST', options)
    .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

function Project() {

    
    
    return (
        <>


        </>
    )
}

export default Project;