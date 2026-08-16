const { Link } = ReactRouterDOM
import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onRemoveMail }) {
  return (
    <ul className="mail-list">
      {mails.map((mail) => (
        <li key={mail.id}>
          <MailPreview mail={mail} />

          <div className="actions">
            <Link to={`/mail/${mail.id}`}>
              <button className="btn-details">Details</button>
            </Link>
            <Link to={`/mail/edit/${mail.id}`}>
              <button className="btn-edit">Edit</button>
            </Link>
            <button
              onClick={() => onRemoveMail(mail.id)}
              className="btn-remove"
            >
              x
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
