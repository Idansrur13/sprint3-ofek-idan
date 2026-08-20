
const { useEffect ,useState} = React


import {bookService, remove} from '../services/bookService.js'
import BookList from './BookList.jsx'
import {BookFilter} from './BookFilter.jsx'


export  function BookIndex() {
    const [books, setBooks] = useState(null)
        const [filter, setFilter] = useState({})



useEffect(()=> {
loadBooks()
},[filter])



function loadBooks() {
 bookService.query(filter).then(setBooks)

}

    if (!books) return <div>Loading...</div>

    return( 
        <div className='book-index'>
            <BookFilter initFilter={filter} changeFilter={setFilter}/>
            <BookList books={books} />
               <h3>
                Book details
                </h3> 

        </div>
    )
}