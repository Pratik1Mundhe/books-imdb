import React ,{useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import DetailPanel from './components/DetailPanel'


const App = () =>{ 
  const [books,setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch('https://book-club-json.herokuapp.com/books')
      const books = await response.json()
      setBooks(books)

    }
      fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
  }
  return (
   <>
   <GlobalStyle />
   <Header />
   <BooksContainer books={books} pickBook={pickBook} />
   {selectedBook && <DetailPanel book={selectedBook}/>}
   </> 
  )

}

export default App;
