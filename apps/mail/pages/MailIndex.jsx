const { useState, useEffect } = React
import { demoMails } from "../services/demoDataMail.jsx"
import { MailList } from "../cmps/MailList.jsx"


export function MailIndex() {
  console.log(demoMails)
  const mails= demoMails

  return (
    <section className="container">
      <MailList mails={mails} />
    </section>
  )
}
