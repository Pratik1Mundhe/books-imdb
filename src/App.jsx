 import React ,{useState,useEffect} from 'react'
 import BooksContainer from './components/BooksContainer'


const App = () => {
const [books,setBooks] = useState([])

useEffect(() => {
  const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      console.log( `here's what our fetch request returns` , response)

      const books = await response.json()
      console.log( `jsonified response` , books)

      setBooks(books)

    }

    fetchData()

},[])
return (
  <>
    <BooksContainer books={books}/>
  </>

)


}

export default App;
