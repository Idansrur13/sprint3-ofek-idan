// export default function

const { useState } = React

// LongTxt> - gets the text to format as a prop and provides a more/less
// functionality
// • <UserMsg> - Used for showing success / error messages
// • <LabelPicker>

export function LongTxt({ txt = '', length = 40 }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const isLong = txt.length > length
  const displayTxt = isExpanded || !isLong ? txt : txt.slice(0, length) + '...'

  return (
    <div className='long-txt'>
      <p>{displayTxt}</p>
      {isLong && (
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? 'Less..' : 'More..'}
        </button>
      )}
    </div>
  )
}
