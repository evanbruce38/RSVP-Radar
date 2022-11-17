import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      hotelCount
      savedHotels {
        hotelId
        hotelName
        hotelBrand
        cityName
        thumbnailUrl
        starRating
      }
    }
  }
`;