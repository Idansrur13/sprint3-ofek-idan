const { useParams } = ReactRouter
const { Link, useNavigate } = ReactRouterDOM

const { useEffect, useState } = React

import { bookService, remove, showSuccessMsg } from '../services/bookService.js'

const initBook = {
  title: '',
  subtitle: '',
  authors: '',
  publishedDate: '',
  description: '',
  pageCount: 0,
  categories: [],
  thumbnail: `https://coding-academy.org/books-photos/${1}.jpg`,
  language: 'en',
  listPrice: {
    amount: 320,
    currencyCode: 'EUR',
    isOnSale: false,
  },
}

export function BookEdit() {
  const navigate = useNavigate()
  const [book, setBook] = useState()
  const { id: bookId } = useParams()
  console.log(bookId, 'bookId')

  useEffect(() => {
    if (bookId === 'new') return setBook(initBook)
    bookService.get(bookId).then(setBook)
  }, [bookId])

  function handleChange({ target }) {
    const { value, type, name } = target
    setBook((prev) => ({ ...prev, [name]: type === 'number' ? +value : value }))
    console.log(book)
  }
  function onSaveBook(ev) {
    ev.preventDefault()

    bookService.save(book).then((book) => {
      showSuccessMsg('book saved')
      navigate('/Books')
    })
  }

  console.log(book, 'bvvbsdgaasdgdf')
  if (!book) return <div>Loading... e</div>

  return (
    <div className='book-details'>
      <Link to={'/Books'}>X</Link>

      <img src={book.thumbnail} className='img-show' />
      <div>
        <form onSubmit={onSaveBook} className='book-edit'>
          <label htmlFor='title'>title</label>
          <input
            type='text'
            value={book.title}
            name='title'
            onChange={handleChange}
          />
          <label htmlFor='subtitle'>subtitle</label>

          <input
            value={book.subtitle}
            type='text'
            name='subtitle'
            onChange={handleChange}
          />
          <label htmlFor='count'>count</label>

          <input
            value={book.pageCount}
            type='number'
            name='count'
            onChange={handleChange}
          />
          <label htmlFor='amount'>amount</label>

          <input
            type='number'
            value={book.listPrice.amount}
            name='amount'
            onChange={handleChange}
          />
          <button type='submit'>save</button>
        </form>
      </div>
    </div>
  )
}
