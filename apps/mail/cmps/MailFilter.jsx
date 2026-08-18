const { useState, useEffect } = React
import { useEffectUpdate } from "../custom-hooks/useEffectUpdate.js"
import { emailsService } from "../services/mail.service.js"

export function MailFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffectUpdate(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange(ev) {
    const { value, name, type } = ev.target
    setFilterByToEdit((prev) => ({
      ...prev,
      txt: value,
      //   [name]: type === "text" ? value : value,
    }))
  }

  function clearFilter() {
    setFilterByToEdit(mailService.getDefaultFilter())
  }
  return (
    <section className="mail-filter">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </span>
      <input
        onChange={(ev) => handleChange(ev)}
        value={filterByToEdit.txt}
        type="text"
        name="txt"
        placeholder="Search mail"
      />
      {/* <button></button> add serach options emoji */}
    </section>
  )
}

// _______________
