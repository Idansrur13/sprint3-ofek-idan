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
  const [fileUrl, setFileUrl] = useState('')
  const [isVideoOpen, setIsVideoOpen] = useState(false)

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

  const handleChangeVideo = ({ target }) => {
    const { value } = target
    setNewNote((prev) => ({
      ...prev,
      type: value ? 'NoteVideo' : 'NoteTxt',
      info: { ...prev.info, video: value },
    }))
  }

  const handleChangeFile = ({ target }) => {
    const file = target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      setNewNote((prev) => ({
        ...prev,
        type: 'NoteImg',
        info: { ...prev.info, url: ev.target.result },
      }))
      setFileUrl(ev.target.result)
      setIsOpen(true)
    }
    reader.readAsDataURL(file)

    target.value = '' // כדי שאפשר יהיה לבחור שוב את אותו קובץ
  }
  const submitForm = (ev) => {
    ev.preventDefault()

    addNote(newNote)
    cancelNote()
    return
  }

  const cancelNote = () => {
    setIsOpen(false)
    setIsVideoOpen(false)
    setFileUrl('')
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
            <button
              type='button'
              className='icon-botton'
              onClick={() => {
                setIsOpen(true)
                setIsVideoOpen((prev) => !prev)
              }}
            >
              <YouTubeIcon />
            </button>
            {/* <button type='button'> */}
            <label htmlFor='addImg' className='icon-botton'>
              <ImageIcon />
            </label>

            {/* </button> */}
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
            <input
              id='addImg'
              name='addImg'
              type='file'
              hidden
              onChange={handleChangeFile}
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

              {fileUrl && (
                <img src={fileUrl} alt='' style={{ height: 100, width: 100 }} />
              )}

              {isVideoOpen && (
                <input
                  type='url'
                  id='video'
                  name='video'
                  placeholder='Video url'
                  value={newNote.info.video || ''}
                  onClick={(ev) => ev.stopPropagation()}
                  onChange={handleChangeVideo}
                />
              )}

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
