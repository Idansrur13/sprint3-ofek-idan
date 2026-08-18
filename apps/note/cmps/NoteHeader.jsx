const { useState } = React
import { _makeId } from '../../../services/async-storage.service.js'
import {
  ImageIcon,
  X,
  YouTubeIcon,
  MicIcon,
  PalletteIcon,
} from '../../icons/icons.jsx'

function getEmptyNote() {
  return {
    id: _makeId(),
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
    ev.preventDefault()

    addNote(newNote)
    cancelNote()
    return
  }

  const cancelNote = () => {
    setIsOpen(false)
    setNewNote(getEmptyNote())
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
      <form onSubmit={submitForm}>
        <div
          className='note-search'
          style={{
            backgroundColor: newNote.style.backgroundColor || '#ffff',
          }}
        >
          <div style={{ display: 'flex', gap: 4 }}>
            <input
              type='text'
              name='title'
              placeholder='Note title'
              value={newNote.info.title || ''}
              onChange={handleChange}
              className='text-center note-title'
            />

            <button onClick={() => cancelNote()} type='button'>
              <MicIcon />
            </button>
            {/* <button onClick={() => {}}>
            <YouTubeIcon />
          </button> */}
            <button type='button'>
              <ImageIcon />
            </button>
            <label htmlFor='color' className='icon-botton'>
              <PalletteIcon />
            </label>
            <input
              type='color'
              name='backgroundColor'
              id='color'
              hidden
              onChange={handleChangeColor}
              value={newNote.style.backgroundColor}
            />

            <button onClick={() => cancelNote()} type='button'>
              <X />
            </button>
          </div>
          {isOpen && (
            <div>
              <input
                type='text'
                name='txt'
                placeholder='Note text...'
                value={newNote.info.txt || ''}
                onChange={handleChange}
              />
              {todos.map((t, i) => (
                <div>
                  <input
                    key={i}
                    type='text'
                    name='todo'
                    value={t.txt || ''}
                    onChange={(e) => handleChangeTodos(i, e.target.value)}
                  />
                </div>
              ))}

              <div className='header-action'>
                <button type='button'>+</button>

                <input
                  type='text'
                  name='todo'
                  placeholder='טודו חדש...'
                  value={''}
                  onChange={(e) =>
                    handleChangeTodos(todos.length, e.target.value)
                  }
                />
              </div>
              <button htmlFor='color' className='save-note-btn' type='submit'>
                save
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
