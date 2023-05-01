// General location to define queries for now.
import { gql } from "@apollo/client";

export const GET_LOCATIONS = 
gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

export const GET_BOOKS = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`