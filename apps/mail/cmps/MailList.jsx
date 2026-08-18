const { Link, useNavigate } = ReactRouterDOM
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onRemoveMail, onToggleRead }) {
  const navigate = useNavigate()

  return (
    <ul className="mail-list">
      {mails.map((mail) => (
        <li
          key={mail.id}
          onClick={() => {
            // onToggleRead(mail.id, true).then(() => {
            navigate(`/mail/${mail.id}`)
            // })
          }}
        >
          <MailPreview
            mail={mail}
            onRemoveMail={onRemoveMail}
            onToggleRead={onToggleRead}
          />
        </li>
      ))}
    </ul>
  )
}
