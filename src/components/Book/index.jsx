import React from 'react'
import { Container, Cover, Title ,Author } from './styles'


const Book = ({book}) => {
 <Container>
    <Cover src={book.img} alt={`Book cover for ${book.title} by ${book.author}`} />
     <figcaption>
         <Title>{book.title}</Title>
         <Author>{book.author}</Author>
     </figcaption>
     console.log(book);
 </Container>

}


export default Book
