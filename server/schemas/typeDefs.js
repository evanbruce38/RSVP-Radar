const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        hotelCount: Int
        savedHotels: [Hotel]
    }

    type Auth {
        token: ID!
        user: User
    }    

    type Hotel {
        hotelId: ID!
        hotelName: String
        hotelBrand: String
        cityName: String
        thumbnailUrl: String
        starRating: String
    }

    input inputHotel {
        hotelId: ID!
        hotelName: String
        hotelBrand: String
        cityName: String
        thumbnailUrl: String
        starRating: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveHotel(newHotel: InputHotel!): User
        removeHotel(hotelId: ID!): User
    }
`;

module.exports = typeDefs;