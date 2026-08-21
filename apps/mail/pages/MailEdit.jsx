const { useEffect, useState } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { emailsService } from "../services/mail.service.js"
import {
  eventBus,
  showSuccessMsg,
} from "../../../services/event-bus.service.js"

export function MailEdit() {
  const [mail, setmail] = useState(emailsService.getEmptyMail("","me"))
  const [msg, setMsg] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      emailsService.get(params.id).then(setmail)
    }
  }, [])

  function handleChange({ target }) {
    const { type, name, value } = target
    setmail((prev) => ({ ...prev, [name]: value }))
  }

  function onSaveMail(ev) {
    ev.preventDefault()

    emailsService.save(mail).then((mail) => {
      showSuccessMsg(`mail ${mail.id} saved`)
      navigate("/mail")
    })
  }

  return (
    <form className="mail-edit" onSubmit={onSaveMail}>
      <label htmlFor="subject">subject:</label>
      <input
        type="text"
        placeholder="subject"
        id="subject"
        name="subject"
        value={mail.subject}
        onChange={handleChange}
      />

      <label htmlFor="body">body:</label>
      <input
        type="text"
        placeholder="body"
        id="body"
        name="body"
        value={mail.body}
        onChange={handleChange}
      />

      <label htmlFor="to">to:</label>
      <input
        type="text"
        placeholder="to"
        id="to"
        name="to"
        value={mail.to}
        onChange={handleChange}
      />

      <label htmlFor="from">from:</label>
      <input
        type="text"
        placeholder="from"
        id="from"
        name="from"
        value={mail.from}
        onChange={handleChange}
      />

      <div className="mail-save">
        <button>Save</button>
        <Link to="/mail">
          <button type="button">Cancel</button>
        </Link>
      </div>
    </form>
  )
}
