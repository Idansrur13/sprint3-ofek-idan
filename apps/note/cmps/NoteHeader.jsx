const { useState } = React

function getEmptyNote() {
  return {
    id: 'n130',
    createdAt: 1112623,
    type: 'NoteTxt',
    isPinned: false,
    style: { backgroundColor: '#f5faff' },
    info: { title: '' },
  }
}
export function NoteHeader({ filter, setFilter }) {
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

  const handleChangeTodos = (idx, value) => {
    setNewNote((prev) => ({
      ...prev,

      info: {
        ...prev.info,
        todos: prev.info.todos.map((todo, i) => {
          i === idx ? { ...todo, txt: value, isDone: false } : todo
        }),
      },
    }))
    console.log(newNote)
  }
  return (
    <div className='note-header'>
      <div className='note-search'>
        <input
          type='text'
          name='title'
          //   value={newNote.value.title || ''}
          onChange={handleChange}
        />

        {isOpen && (
          <div>
            <input type='text' name='txt' onChange={handleChange} />
            <input
              type='text'
              onChange={(e) => handleChangeTodos(0, e.target.value)}
            />
            <div className='header-action'>
              <i class='fa-solid fa-x'></i>
              <i class='fa-solid fa-palette'></i>
              <i class='fa-solid fa-image'></i>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
