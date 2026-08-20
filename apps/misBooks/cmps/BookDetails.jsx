const { useParams } = ReactRouter
const { Link, useNavigate } = ReactRouterDOM

const { useEffect, useState } = React

import { bookService, remove } from '../services/bookService.js'

export function BookDetails() {
  const navigate = useNavigate()
  const [book, setBook] = useState()
  const { id: bookId } = useParams()

  useEffect(() => {
    if (!bookId) return
    bookService.get(bookId).then(setBook)
  }, [bookId])

  function onDeleteBook(bookId) {
    remove(bookId).then((r) => navigate('/'))
  }

  if (!book) return <div>Loading... d</div>

  return (
    <div className='book-details'>
      <Link to={'/Books'}>X</Link>
      <img src={book.thumbnail} className='img-show' />
      <div>
        <p>{book.title}</p>
        <p>{book.subtitle}</p>
        <p>{book.pageCount}</p>
        <button onClick={() => onDeleteBook(book.id)}>delete</button>
        <button onClick={() => navigate(`/Books/Edit/${book.id}`)}>edit</button>
      </div>
    </div>
  )
}
