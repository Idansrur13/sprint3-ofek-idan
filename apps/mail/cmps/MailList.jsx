import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails }) {
  return (
    <div>
      {mails.map((mail) => (
        <div key={mail.id}>
          <MailPreview mail={mail}/>
        </div>
      ))}
    </div>
  )
}
