const { useState } = React
import { NoteCard } from './NoteCard.jsx'
import { NoteHeader } from './NoteHeader.jsx'
export function NoteList({ notes, setNoteTodoIsDone }) {
  console.log('notess', notes)
  return (
    <div className='node-list'>
      {notes.map((n, i) => {
        return (
          <NoteCard note={n} setNoteTodoIsDone={setNoteTodoIsDone} key={n.id} />
        )
      })}
    </div>
  )
}
