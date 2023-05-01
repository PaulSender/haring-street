import { useQuery } from "@apollo/client"
import { GET_BOOKS } from "./graphql/queries"

export default function App() {
  return (
    <div>
      <DisplayBooks />
    </div>
  )
}


type DisplayBooksProps = {
    title: string,
    author: string,
}
function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return data.books.map(({ title, author }: DisplayBooksProps ) => (
    <div key={title}>
      <h3>{title}</h3>
      <br />
      <p>{author}</p>
      <br />
    </div>
  ))
}