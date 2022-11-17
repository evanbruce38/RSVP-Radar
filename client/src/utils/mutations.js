import { gql } from '@apollo-client';

export const LOGIN_USER = gql`
    mutation login(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            username: $username
            email: $email
            password: $password
        ) {
            token
            user {
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
    } 
`;

export const SAVE_HOTEL = gql`
    mutation saveHotel($newHotel: InputHotel!) {
        saveHotel(newHotel: $newHotel) {
            _id
            username
            email
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

export const REMOVE_HOTEL = gql`
    mutation removeHotel($hotelId: ID!) {
        removeHotel(hotelId: $hotelId) {
            _id
            username
            email
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