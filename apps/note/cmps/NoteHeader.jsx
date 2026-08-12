const { useState } = React

function getEmptyNote() {
  return {
    id: 'n130',
    createdAt: 1112623,
    type: 'NoteTxt',
    isPinned: false,
    style: { backgroundColor: '#f5faff' },
    info: { title: '', todos: [] },
  }
}
export function NoteHeader({ addNote }) {
  const [newNote, setNewNote] = useState(getEmptyNote())
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = ({ target }) => {
    if (!isOpen) setIsOpen(true)
    const { name, value } = target
    setNewNote((prev) => ({
      ...prev,
      info: { ...prev.info, [name]: value },
    }))
    console.log(newNote)
  }
  const handleChangeColor = ({ target }) => {
    const { name, value } = target
    setNewNote((prev) => ({
      ...prev,
      style: { ...prev.style, [name]: value },
    }))
    console.log(newNote)
  }

  const submitForm = (ev) => {
    console.log(ev.target.value)
    addNote(ev.target.value)
    return
  }

  const todos = newNote.info.todos || []

  const handleChangeTodos = (idx, value) => {
    setNewNote((prev) => {
      const prevTodos = prev.info.todos || []
      const nextTodos =
        idx < prevTodos.length
          ? prevTodos.map((todo, i) =>
              i === idx ? { ...todo, txt: value } : todo,
            )
          : [...prevTodos, { txt: value, isDone: false }]

      return { ...prev, info: { ...prev.info, todos: nextTodos } }
    })
  }

  return (
    <div className='note-header '>
      <div
        className='note-search'
        style={{
          backgroundColor: newNote.style.backgroundColor || '#ffff',
        }}
      >
        {' '}
        <div style={{ display: 'flex' }}>
          <input
            type='text'
            name='title'
            value={newNote.info.title || ''}
            onChange={handleChange}
            className='text-center note-title'
          />
          <i className='fa-solid fa-x'></i>
        </div>
        {isOpen && (
          <div>
            <form onSubmit={submitForm}>
              <input
                type='text'
                name='txt'
                value={newNote.info.txt || ''}
                onChange={handleChange}
              />
              {todos.map((t, i) => (
                <input
                  key={i}
                  type='text'
                  name='todo'
                  value={t.txt || ''}
                  onChange={(e) => handleChangeTodos(i, e.target.value)}
                />
              ))}

              <div className='header-action'>
                <input
                  type='text'
                  name='todo'
                  placeholder='טודו חדש...'
                  value={''}
                  onChange={(e) =>
                    handleChangeTodos(todos.length, e.target.value)
                  }
                />
                <label htmlFor='color'>
                  {' '}
                  <i className='fa-solid fa-palette'> </i>{' '}
                </label>
                <input
                  type='color'
                  name='backgroundColor'
                  id='color'
                  hidden
                  onChange={handleChangeColor}
                  value={newNote.style.backgroundColor}
                />
                <i className='fa-solid fa-image'></i>
                <i className='fa-solid fa-x'></i>
              </div>
              <button>save</button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
