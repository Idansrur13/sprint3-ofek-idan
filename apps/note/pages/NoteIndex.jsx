const { useState, useEffect } = React
const { useSearchParams } = ReactRouterDOM

const tabs = ['all', 'isPinned']

import { NoteList } from '../cmps/NoteList.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
import { noteService } from '../services/note.service.js'

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
  // return notes
}

export function NoteIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterParams = searchParams.get('filter') || 'all'

  const [filter, setFilter] = useState(filterParams)
  const [notes, setNotes] = useState(null)

  useEffect(() => {
    loadNotes()
  }, [])

  useEffect(() => {
    if (filter) {
      setNotes(filteredNotes(filter, notes))
    }
  }, [filter])

  function loadNotes() {
    noteService
      .query()
      .then((n) => setNotes(filteredNotes(filter, n)))
      .catch((e) => console.log('שגיאה', e))
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
            notes={notes}
            setNoteTodoIsDone={setNoteTodoIsDone}
            setPinedNote={setPinedNote}
            deleteNote={deleteNote}
          />
        </section>
      </div>
    </div>
  )
}
