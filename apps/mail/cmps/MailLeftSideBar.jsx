const { Link } = ReactRouterDOM
import { icons } from "../services/mail.icons.js"
export function MailLeftSideBar() {
  return (
    <section className="mail-left">
      <Link to="/mail/edit">
        <button>{icons.compose}</button>
        <button>
        {icons.sent}
        </button>
      </Link>
    </section>
  )
}
