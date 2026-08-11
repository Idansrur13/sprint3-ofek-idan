const { useState, useEffect } = React
import { demoMails } from "../services/demoDataMail.jsx"
import { MailList } from "../cmps/MailList.jsx"
import { MailHeader } from "../cmps/MailHeader.jsx"

export function MailIndex() {
  console.log(demoMails)
  const mails = demoMails

  return (
    <React.Fragment>
      <MailHeader />
      {/* <MailLeftSideBar /> */}
      {/* <MailRightSideBar /> */}
      <section className="container">
        <MailList mails={mails} />
      </section>
    </React.Fragment>
  )
}
