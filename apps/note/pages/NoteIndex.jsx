const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM

const tabs = ['all', 'isPinned', 'images', 'text', 'misions']

import { NoteList } from '../cmps/NoteList.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { noteService } from '../services/note.service.js'
import { Loader } from '../../../cmps/loader.jsx'

// type Tabs = 'isPinned' | 'all'
const filteredNotes = (filter, notes = []) => {
  if (!notes || notes.length <= 0) return
  if (filter === 'all' || !filter) {
    return notes.sort((a, b) => {
      return b.isPinned - a.isPinned
    })
  }
  if (filter === 'isPinned') {
    return notes.filter((n) => n.isPinned)
  }
  if (filter === 'images') {
    return notes.filter((n) => n.info.url)
  }
  if (filter === 'text') {
    return notes.filter((n) => n.info.txt)
  }
  if (filter === 'misions') {
    return notes.filter((n) => n.info.todos)
  }
  // return notes
}

export function NoteIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterParams = searchParams.get('filter') || 'all'
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState(filterParams)
  const [notes, setNotes] = useState(null)
  const [filterNotes, setFilterNotes] = useState(null)

  useEffect(() => {
    loadNotes()
  }, [])

  useEffect(() => {
    setFilterNotes(filteredNotes(filter, notes))
  }, [filter, notes])

  function loadNotes() {
    noteService
      .query()
      .then((n) => {
        return (setNotes((filter, n)), setLoading(false))
      })
      .catch((e) => {
        return (console.log('שגיאה', e), setLoading(false))
      })
  }

  const onAddNote = (n) => {
    console.log('to save', n)

    noteService.post(n).then(() => setNotes((prevNotes) => [n, ...prevNotes]))
  }

  function deleteNote(noteId) {
    noteService
      .remove(noteId)
      .then((n) => setNotes(notes.filter((n) => n.id !== noteId)))
  }
  function onSetFilter(newFilter) {
    setFilter(newFilter)
    setSearchParams({ filter: newFilter })
  }

  const setNoteTodoIsDone = ({ noteId, todoIdx, isDone }) => {
    const note = notes.find((n) => n.id === noteId)
    const updatedNote = {
      ...note,
      info: {
        ...note.info,
        todos: note.info.todos.map((t, i) =>
          i === todoIdx ? { ...t, isDone } : t,
        ),
      },
    }
    noteService
      .put(updatedNote)
      .then((n) =>
        setNotes((prevNotes) =>
          prevNotes.map((n) => (n.id === noteId ? updatedNote : n)),
        ),
      )
  }

  const setPinedNote = (noteId, isPinned) => {
    const note = notes.find((n) => n.id === noteId)
    const updatedNote = {
      ...note,
      isPinned,
    }

    const newNotes = notes.map((n) => (n.id === noteId ? updatedNote : n))
    noteService.put(updatedNote).then((n) => setNotes(newNotes))

    return
  }

  if (loading) {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'grid',
          height: '100vh',
        }}
      >
        <Loader />
      </div>
    )
  }

  return (
    <div className='note-layout'>
      <aside className='note-nav'>
        {tabs.map((t) => {
          return (
            <div
              key={t}
              className={'note-nav-item' + (filter === t ? ' active' : '')}
              onClick={() => onSetFilter(t)}
            >
              <p>{t}</p>
            </div>
          )
        })}
      </aside>
      <div className=''>
        <NoteHeader
          addNote={(n) => {
            onAddNote(n)
          }}
        />
        <section className='container note-page '>
          <NoteList
            notes={filterNotes}
            setNoteTodoIsDone={setNoteTodoIsDone}
            setPinedNote={setPinedNote}
            deleteNote={deleteNote}
          />
        </section>
      </div>
    </div>
  )
}
