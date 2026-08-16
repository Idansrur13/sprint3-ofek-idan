const { useState, useEffect } = React
import { useEffectUpdate } from "../custom-hooks/useEffectUpdate.js"
import { mailService } from "../services/mail.service.js"

export function MailFilter({ filterBy, onSetFilterBy }) {
  const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

  useEffectUpdate(() => {
    onSetFilterBy(filterByToEdit)
  }, [filterByToEdit])

  function handleChange(ev) {
    const { value, name, type } = ev.target
    setFilterByToEdit((prev) => ({
      ...prev,
      txt: value
      //   [name]: type === "text" ? value : value,
    }))
  }

  function clearFilter() {
    setFilterByToEdit(mailService.getDefaultFilter())
  }
  return (
    <section className="mail-filter">
      <p>Filter:</p>
      <input
        onChange={(ev) => handleChange(ev)}
        value={filterByToEdit.txt}
        type="text"
        name="txt"
        placeholder="Search mail"
      />

      <button onClick={clearFilter}>Clear</button>
    </section>
  )
}
