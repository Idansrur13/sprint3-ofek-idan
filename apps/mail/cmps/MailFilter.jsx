const { useState, useEffect } = React
import { useEffectUpdate } from "../custom-hooks/useEffectUpdate.js"
import { icons } from "../services/mail.icons.js"
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
    <div className="mail-filter">
      <span className="search-icon">
       {icons.search}
      </span>
      <input
        onChange={(ev) => handleChange(ev)}
        value={filterByToEdit.txt}
        type="text"
        name="txt"
        placeholder="Search mail"
      />
    </div>
  )
}

// _______________
