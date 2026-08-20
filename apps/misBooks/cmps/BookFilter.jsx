const { useState } = React
const { Link } = ReactRouterDOM

export function BookFilter({ initFilter = {}, changeFilter }) {
  const [filter, setFilter] = useState(initFilter)

  function changeFilterText({ target }) {
    const { name, value } = target
    console.log(value)

    const newFilter = { ...filter, [name]: value }

    setFilter(newFilter)
    console.log(newFilter)
    changeFilter(newFilter)
    return
  }

  return (
    <div className='form-card'>
      <form className=''>
        <label htmlFor='txt'>תוכן</label>
        <input
          type='text'
          id='txt'
          name='txt'
          placeholder='text'
          value={filter.txt || ''}
          onInput={changeFilterText}
        />
        <label htmlFor='limitPages'>מקסימום עמודים</label>
        <input
          type='number'
          name='limitPages'
          placeholder='limit Pages'
          value={filter.limitPages}
          onInput={changeFilterText}
        />
        <label htmlFor='price'>מחיר</label>
        <input
          type='number'
          name='price'
          placeholder='price'
          value={filter.price}
          onInput={changeFilterText}
        />
      </form>
      <div>
        <Link to={'Edit/new'}>
          <button>ספר חדש</button>
        </Link>
      </div>
    </div>
  )
}
