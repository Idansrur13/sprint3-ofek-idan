const { Link, useNavigate } = ReactRouterDOM
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onRemoveMail }) {
  const navigate = useNavigate()

  return (
    <ul className="mail-list">
      {mails.map((mail) => (
        <li key={mail.id} onClick={() => navigate(`/mail/${mail.id}`)}>
          <MailPreview mail={mail} onRemoveMail={onRemoveMail} />
        </li>
      ))}
    </ul>
  )
}
