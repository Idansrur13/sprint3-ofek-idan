const { useEffect, useState } = React
const { Link, useParams, useNavigate } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"
import {
  eventBus,
  showSuccessMsg,
} from "../../../services/event-bus.service.js"

export function MailEdit() {
  const [mail, setmail] = useState(mailService.getEmptyMail())
  const [msg, setMsg] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      mailService.get(params.id).then(setmail)
    }
  }, [])

  function handleChange({ target }) {
    const { type, name, value } = target
    setmail((prev) => ({ ...prev, [name]: value }))
  }

  function onSavemail(ev) {
    ev.preventDefault()

    mailService.save(mail).then((mail) => {
      showSuccessMsg(`mail ${mail.id} saved`)
      navigate("/mail")
    })
  }

  return (
    <form className="mail-edit" onSubmit={onSavemail}>
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

      <div className="mail-actions">
        <button>Save</button>
        <Link to="/mail">
          <button type="button">Cancel</button>
        </Link>
      </div>
    </form>
  )
}
