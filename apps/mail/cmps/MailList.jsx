
export function MailList({mails}) {
    return <div>
        {mails.map((mail) => (
        <div key={mail.id}>
          <h2>{mail.id}</h2>
          <p>{mail.createdAt}</p>
          <p>{mail.subject}</p>
          {/* <p>{utilService.getMonthName(${mail.createdAt})}</p> */}
        </div>
      ))}
    </div>
}
