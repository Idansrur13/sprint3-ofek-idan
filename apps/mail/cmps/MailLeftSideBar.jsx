const { Link } = ReactRouterDOM
import { icons } from "../services/mail.icons.js"
export function MailLeftSideBar({ unreadMailCount }) {
  console.log("readMailCount:", unreadMailCount)
  return (
    <section className="mail-left">
      <Link to="/mail/edit">
        <button>{icons.compose}</button>
      </Link>
      <button>{icons.sent}</button>
      <div>Unread Mails:{unreadMailCount}</div>
    </section>
  )
}
