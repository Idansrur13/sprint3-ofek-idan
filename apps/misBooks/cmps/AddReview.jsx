import { bookService } from '../services/bookService.js'

const { useState } = React

export function AddReview({ sendReview }) {
  const [openReview, setOpenReview] = useState(false)
  const [review, setReview] = useState({})
  function openReviewFunc(e) {
    e.preventDefault()
    setOpenReview((v) => !v)
  }

  function handleChange({ target }) {
    const { value, type, name } = target
    setReview((prev) => ({
      ...prev,
      [name]: type === 'number' ? +value : value,
    }))
    console.log(review)
  }
  function onSaveReview(ev) {
    ev.preventDefault()
    sendReview(review)
    // bookService.save(review).then((book) => {
    setOpenReview(false)
    setReview({})
    // showSuccessMsg('book saved')
    // navigate('/Books')
    // })
  }

  return (
    <div className='review-div'>
      <button className='review-book' onClick={openReviewFunc}>
        add review
      </button>
      {openReview && (
        <div className='review-form'>
          <form onSubmit={onSaveReview}>
            <label htmlFor='fullname'>full name</label>
            <input
              type='text'
              maxLength={5}
              name='fullname'
              onChange={handleChange}
            />
            <label htmlFor='rating'>rating</label>
            <input
              type='range'
              defaultValue={4}
              min={0}
              max={5}
              name='rating'
              onChange={handleChange}
            />

            <input type='date' name='readAt' onChange={handleChange} />
            <button type='submit'>submit</button>
          </form>
        </div>
      )}
    </div>
  )
}
