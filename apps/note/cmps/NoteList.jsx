const { useState } = React
import { NoteCard } from './NoteCard.jsx'

export function NoteList({
  notes,
  setNoteTodoIsDone,
  setPinedNote,
  deleteNote,
}) {
  if (!notes || notes.length <= 0) return
  return (
    <div>
      <div className='node-list '>
        {notes.map((n, i) => {
          return (
            <NoteCard
              note={n}
              setNoteTodoIsDone={setNoteTodoIsDone}
              setPinedNote={setPinedNote}
              key={n.id}
              deleteNote={deleteNote}
            />
          )
        })}
      </div>

      {/* <div className='node-list '>
        {notes.map((n, i) => {
          return (
            <NoteCard
              note={n}
              setNoteTodoIsDone={setNoteTodoIsDone}
              setPinedNote={setPinedNote}
              key={n.id}
            />
          )
        })}
      </div> */}
    </div>
  )
}
