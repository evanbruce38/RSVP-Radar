import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeHotelId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_HOTEL } from '../utils/mutations';

const SavedHotels = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeHotel, { error }] = useMutation(REMOVE_HOTEL);
  const userData = data?.me || {};

  // create function that accepts the hotels's mongo _id value as param and deletes the hotel from the database
  const handleDeleteHotel = async (hotelId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeHotel({
        variables: { HotelId },
      });

      removeHotelId(HotelId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved hotels!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedHotels.length
            ? `Viewing ${userData.savedHotels.length} saved ${userData.savedHotelss.length === 1 ? 'hotel' : 'hotels'}:`
            : 'You have no saved hotels!'}
        </h2>
        <CardColumns>
          {userData.savedHotels.map((hotel) => {
            return (
              <Card key={hotel.hotelId} border='dark'>
                {hotel.image ? <Card.Img src={hotel.image} alt={`The cover for ${hotel.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{hotel.title}</Card.Title>
                  <p className='small'>Authors: {hotel.authors}</p>
                  <Card.Text>{hotel.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteHotel(hotel.hotelId)}>
                    Delete this Hotle!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedHotels;