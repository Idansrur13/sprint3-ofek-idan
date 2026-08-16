import { TrashIcon, LayersIcon, PancelIcon } from '../../icons/icons'

const { useState } = React

export function NoteCard({ note, setNoteTodoIsDone, setPinedNote }) {
  const info = note.info

  function deleteNote() {}
  console.log('selte', note.isPinned)
  return (
    <div
      className='card-note'
      onClick={() => setPinedNote(note.id, !note.isPinned)}
      style={{ backgroundColor: note.style.backgroundColor || '#0d0' }}
    >
      <div>
        <p className='note-title ' style={{ margin: 0 }}>
          {info.title}
        </p>
        {note.isPinned && (
          <div className='check-note'>
            {note.isPinned}
            <i className='fa-solid fa-map-pin'></i>{' '}
          </div>
        )}
      </div>
      <p className='nite-p'>{info.txt}</p>

      {info.url && (
        <div className='img-note'>
          <img src={info.url} alt='' />
        </div>
      )}
      {info.todos &&
        info.todos.map((t, i) => {
          return (
            <div
              onClick={(e) => e.stopPropagation()}
              key={i}
              className='todo-line'
            >
              <label htmlFor={t.txt}>{t.txt}</label>
              <input
                type='checkbox'
                id={t.txt}
                name={t.txt}
                checked={!!t.isDone}
                onChange={(e) => {
                  setNoteTodoIsDone({
                    noteId: note.id,
                    todoIdx: i,
                    isDone: e.target.checked,
                  })
                }}
              />
            </div>
          )
        })}

      <div className='note-action'>
        <button onClick={() => deleteNote()}>
          <TrashIcon />
        </button>
        <button>
          <LayersIcon />
        </button>
        <button>
          <PancelIcon />
        </button>
      </div>
    </div>
  )
}
