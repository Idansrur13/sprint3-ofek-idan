import {BookPreview} from './BookPreview.jsx'

export default function BookList({books}) {
    return(
        <div className='books-grid' >
            {books && books.map((b)=> 
            <BookPreview book={b} key={b.id} />
            )}
        </div>
    )
}