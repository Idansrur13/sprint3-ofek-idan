const { useState } = React

import { notes as demoNotes } from '../../../services/demoDataNotes.jsx'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'
export function NoteIndex() {
  const [filter, setFilter] = useState({})

  const [notes, setNotes] = useState(demoNotes)
  const setNoteTodoIsDone = async ({ noteId, isDone }) => {
    const currentNote = notes.find((n) => n.id === noteId)
    if (!currentNote) return
    setNotes({ ...notes, currentNote })
  }

  const onAddNote = async () => {}

  return (
    <div>
      <NoteHeader
        setFilter={(f) => setFilter(f)}
        filter={filter}
        addNote={(n) => {
          onAddNote(n)
        }}
      />
      <section className='container note-page '>
        <NoteList notes={notes} setNoteTodoIsDone={setNoteTodoIsDone} />
      </section>
    </div>
  )
}
