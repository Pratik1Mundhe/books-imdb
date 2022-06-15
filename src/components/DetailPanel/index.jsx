import React from 'react'
import {Panel ,P ,Em} from './styles'
import Book from '../Book' 
const DetailPanel = ({book}) => {
return(
    <Panel>
        <Book book={book} isLarge={true} />
        {/* <figure>
        <img src={book.image} alt="" />
        <h3>{book.title}</h3>
        <h4>by {book.author}</h4>
        </figure> */}

        <P>{book.description}</P>
        <P>
            <Em>Published in {book.published}</Em>
        </P>
    </Panel>

)

}

export default DetailPanel