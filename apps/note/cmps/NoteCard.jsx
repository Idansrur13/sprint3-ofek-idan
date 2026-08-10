const { useState } = React

export function NoteCard({ note, setNoteTodoIsDone }) {
  const [selectedNoteId, setSelctedNoteId] = useState(false)
  const info = note.info
  console.log('selte', selectedNoteId)
  return (
    <div
      className='card-note'
      onClick={(e) => setSelctedNoteId((v) => !v)}
      style={{ backgroundColor: note.style.backgroundColor || '#0d0' }}
    >
      {selectedNoteId && (
        <div className='check-note'>
          {selectedNoteId}
          <button>
            <i className='fa-regular fa-circle-check'></i>
          </button>
        </div>
      )}
      <p className='nite-title'>{info.title}</p>
      <p className='nite-p'>{info.txt}</p>

      {info.url && (
        <div className='img-note'>
          <img src={info.url} alt='' />
        </div>
      )}
      {info.todos &&
        info.todos.map((t) => {
          return (
            <div
              onClick={(e) => {
                // e.preventDefault()
              }}
            >
              <label htmlFor={t.txt}>{t.txt}</label>
              <input
                type='checkbox'
                id={t.txt}
                name={t.txt}
                value={t.isDone}
                onChange={(e) => {
                  setNoteTodoIsDone({ noteId: t.id, idDone: e.target.value })
                }}
              />
            </div>
          )
        })}
    </div>
  )
}
