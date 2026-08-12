const { useState, useEffect } = React
import { demoMails } from "../services/demoDataMail.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"

export function MailIndex() {
  console.log(demoMails)
  const mails = demoMails

  return (
      <section className="mail-index">
      <MailHeader />
      {/* <MailLeftSideBar /> */}
      {/* <MailRightSideBar /> */}
        <MailList mails={mails} />
        <footer>foooter</footer>
      </section>
  )
}
