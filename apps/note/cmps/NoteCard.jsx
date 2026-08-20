import {
  TrashIcon,
  LayersIcon,
  PancelIcon,
  PinIcon,
} from '../../icons/icons.jsx'

const { useState } = React

export function NoteImg({ url = null }) {
  if (!url) return
  return (
    <div className='img-note'>
      <img src={url} alt='note' />
    </div>
  )
}

function getYoutubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  )
  return match ? match[1] : null
}

export function NoteVideo({ info = {}, isEditMode, onChangeInfo }) {
  const video = info.video
  if (!video) return

  if (isEditMode) {
    return (
      <input
        type='video'
        name='video'
        placeholder='Video url'
        value={video || ''}
        onClick={(ev) => ev.stopPropagation()}
        onChange={(ev) => onChangeInfo({ ...info, video: ev.target.value })}
      />
    )
  }
  const youtubeId = getYoutubeId(video)
  return (
    <div className='video-note' onClick={(ev) => ev.stopPropagation()}>
      {youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={info.title || 'note video'}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture'
          allowFullScreen
        />
      ) : (
        <video src={video} controls />
      )}
    </div>
  )
}
export function NoteTodos({ todos = [], noteId, setNoteTodoIsDone }) {
  if (!todos) return
  return (
    <div>
      {todos.map((t, i) => {
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
                  noteId,
                  todoIdx: i,
                  isDone: e.target.checked,
                })
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export function NoteTxt({ txt = null }) {
  if (!txt) return
  return <p className='nite-p'>{txt}</p>
}

export function NoteCard({
  note,
  setNoteTodoIsDone,
  setPinedNote,
  deleteNote,
}) {
  const info = note.info

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
          <div className='check-note ' style={{ rotate: '20deg' }}>
            {note.isPinned}
            <PinIcon />
          </div>
        )}
      </div>

      <NoteTxt txt={info.txt} />
      <NoteImg url={info.url} />
      <NoteVideo info={note.info} isEditMode={false} />
      <NoteTodos
        todos={info.todos}
        setNoteTodoIsDone={setNoteTodoIsDone}
        noteId={note.id}
      />

      <div className='note-action' onClick={(ev) => ev.stopPropagation()}>
        <button onClick={() => deleteNote(note.id)}>
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
