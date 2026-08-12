const { useState } = React
import { NoteCard } from './NoteCard.jsx'

export function NoteList({ notes, setNoteTodoIsDone, setPinedNote }) {
  console.log('notess', notes)
  if (!notes || notes.length <= 0) return
  return (
    <div>
      <h3 className='note-section-title'>pined</h3>
      <div className='node-list '>
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
