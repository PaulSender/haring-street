import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type Accounts {  #note make a different type name
    username: String
    password: String
  }

  type Recipes{     #note make a different type name
    title: String
    author: String
    prep_time: Int
    cook_time: Int
    total_time: Int
    ingrediants: String
    directions: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    account_info: [Accounts]
    recipe_data: [Recipes]
  }
`
const account_info = [
  {
    username: "Dlazz",
    password: "test"
  },
  {
    username: "nick",
    password: "2343"
  },
  {
    username: "paul",
    password: "cookman123"
  }
]

const recipe_data = [
  {
    title: "Grilled sausage with potatos and green beans",
    author: "nick",
    prep_time: 25,
    cook_time: 10,
    total_time: 35,
    ingrediants: "3 quarters pound fresh green beans, trimmed and halved, half pound red potatoes, quartered",
    directions: "cook it"
  }, 
  {
    title: "cheese cake",
    author: "Dlazz",
    prep_time: 45,
    cook_time: 3,
    total_time: 48,
    ingrediants: "milk, cheese, cake",
    directions: "bake it"
  },
  {
    title: "shrimp",
    author: "paul",
    prep_time: 10,
    cook_time: 10,
    total_time: 20,
    ingrediants: "shrimp",
    directions: "stir it"
  }
]
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    account_info: () => account_info,
    recipe_data: () => recipe_data
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);