const { useState, useEffect } = React
const { Link, useParams } = ReactRouterDOM

import { emailsService } from "../services/mail.service.js"
import { useMailContext } from "../context/MailContext.jsx"

export function MailDetails() {
  console.log("mailDetails")
  const [mail, setMail] = useState(null)
  const params = useParams()
  const { onToggleRead } = useMailContext()

  useEffect(() => {
    emailsService.get(params.id).then((mail) => {
      setMail(mail)
      if (!mail.isRead) onToggleRead(mail.id, true)
    })
  }, [params.id])

  console.log("mail is:", mail)
  if (!mail)
    return (
      <div>Loading Mail Details </div>
      //   <div className="loader">
      //     <img src="./assets/img/loader.svg" alt="A loader." />
      //   </div>
    )

  return (
    <section className="mail-details">
      <h2>{mail.subject}</h2>
      <p>{mail.body}</p>
      {/* <img src={`./assets/img/${mail.subject}.png`} alt="" /> */}

      <nav>
        <Link to={`/mail/${mail.prevMailId}`}>
          <button>Prev</button>
        </Link>
        <Link to={`/mail/${mail.nextMailId}`}>
          <button>Next</button>
        </Link>
        <Link to="/mail">
          <button>Back</button>
        </Link>
      </nav>
    </section>
  )
}
