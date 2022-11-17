import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveHotelIds, getSavedHotelIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_HOTEL } from '../utils/mutations';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd407e09b29mshad0761b9d62c577p119cacjsn454aa1f03d7e',
		'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
}

const SearchHotels = () => {
    const [searchedHotels, setSearchedHotels] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [savedHotelIds, setSavedHotelIds] = useState(getSavedHotelIds());
  
    const [saveHotel, { error }] = useMutation(SAVE_HOTEL);
  
    useEffect(() => {
      return () => saveHotelIds(savedHotelIds);
    });
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!searchInput) {
        return false;
      }
  
      try {
          
        const response = await fetch(
          `https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=HDR&location_id=3000035821&date_checkout=2022-11-22&date_checkin=2022-11-18&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0&rooms_number=1=${searchInput}`
        );
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const { items } = await response.json();
  
        //needs to be looked at again
        const HotelData = items.map((hotel) => ({
          hotelId: hotel.id,
          hotelName: hotel.hotelInfo.name || ['No author to display'],
          hotelBrand: hotel.hotelInfo.brand,
          cityName: hotel.hotelInfo.city,
          starRating: hotel.hotelInfo.imageLinks?.thumbnail || '',
        }));
  
        setSearchedHotels(HotelData);
        setSearchInput('');
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleSaveHotel = async (hotelId) => {
      const hotelToSave = SearchHotels.find((hotel) => hotel.hotelId === hotelId);
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        const { data } = await saveHotel({
          variables: { newHotel: { ...hotelToSave } },
        });
  
        setSavedHotelIds([...savedHotelIds, hotelToSave.hotelId]);
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <>
        <Jumbotron fluid className='text-light bg-dark'>
          <Container>
            <h1>Search for Hotels!</h1>
            <Form onSubmit={handleFormSubmit}>
              <Form.Row>
                <Col xs={12} md={8}>
                  <Form.Control
                    name='searchInput'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    size='lg'
                    placeholder='Search for a hotel'
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Button type='submit' variant='success' size='lg'>
                    Submit Search
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Container>
        </Jumbotron>
  
        <Container>
          <h2>
            {searchedHotels.length
              ? `Viewing ${searchedHotels.length} results:`
              : 'Search for a hotel to begin'}
          </h2>
          <CardColumns>
            {searchedHotels.map((hotel) => {
              return (
                <Card key={hotel.hotelId} border='dark'>
                  {hotel.image ? (
                    <Card.Img src={hotel.image} alt={`The cover for ${hotel.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{hotel.title}</Card.Title>
                    <p className='small'>Authors: {hotel.authors}</p>
                    <Card.Text>{hotel.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedHotelIds?.some((savedHotelId) => savedHotelId === hotel.hotelId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveHotel(hotel.hotelId)}>
                        {savedHotelIds?.some((savedHotelId) => savedHotelId === hotel.hotelId)
                          ? 'This hotel has already been saved!'
                          : 'Save this hotel!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </Container>
      </>
    );
  };
  
  export default SearchHotels;