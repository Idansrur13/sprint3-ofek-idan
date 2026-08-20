const { useNavigate } = ReactRouterDOM
import { PancelIcon } from '../../icons/icons.jsx'
import { bookService } from '../services/bookService.js'
import { AddReview } from './AddReview.jsx'

export function BookPreview({ book, showMore }) {
  const navigate = useNavigate()
  const onAddReview = (review) => {
    const newBook = {
      ...book,
      review,
    }
    bookService.save(newBook).then((book) => {
      console.log(book)
    })
  }

  return (
    <div className='book-card'>
      <img src={book.thumbnail} />
      <p className='title'>{book.title}</p>
      <p className='subtitle'>{book.subtitle}</p>
      <div className='action-prev-div'>
        <button
          className='icon'
          onClick={() => navigate(`/Books/Edit/${book.id}`)}
        >
          <PancelIcon />
        </button>
      </div>
      {book.review && book.review.fullname ? (
        <div className='review-div'>
          <p>{book.review.fullname}</p>
          <p>{book.review.rating}/5 ⭐️</p>
          <p>{book.review.readAt.toString()}</p>
        </div>
      ) : (
        <AddReview sendReview={onAddReview} />
      )}

      <div className='book-pirce-pages'>
        <div>
          pages
          <p>{book.pageCount}</p>
        </div>
        <div>
          price
          <p>{book.listPrice.amount}</p>
        </div>
      </div>
    </div>
  )
}
