const { useState, useEffect } = React

const tabs = ['all', 'isPinned']
import { notes as demoNotes } from '../../../services/demoDataNotes.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'

// type Tabs = 'isPinned' | 'all'
const filteredNotes = (filter, notes = []) => {
  console.log('filter notes', filter, notes)
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
  const [filter, setFilter] = useState('all')
  const [notes, setNotes] = useState(demoNotes)

  //   useEffect(() => {
  //     console.log('שונה', filter, notes)
  //   }, [filter])

  const setNoteTodoIsDone = ({ noteId, todoIdx, isDone }) => {
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n.id === noteId
          ? {
              ...n,
              info: {
                ...n.info,
                todos: n.info.todos.map((t, i) =>
                  i === todoIdx ? { ...t, isDone } : t,
                ),
              },
            }
          : n,
      ),
    )
  }

  const setPinedNote = (noteId, isPinned) => {
    console.log('isPinned', isPinned)
    const newNotes = notes.map((n) =>
      n.id === noteId
        ? {
            ...n,
            isPinned,
          }
        : n,
    )
    setNotes(newNotes)
    return
  }

  const onAddNote = (n) => {
    setNotes((prevNotes) => [n, ...prevNotes])
  }

  return (
    <div className='note-layout'>
      <aside className='note-nav'>
        {tabs.map((t) => {
          return (
            <div
              key={t}
              className={'note-nav-item' + (filter === t ? ' active' : '')}
              onClick={() => setFilter(t)}
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
            notes={filteredNotes(filter, notes)}
            setNoteTodoIsDone={setNoteTodoIsDone}
            setPinedNote={setPinedNote}
          />
        </section>
      </div>
    </div>
  )
}
