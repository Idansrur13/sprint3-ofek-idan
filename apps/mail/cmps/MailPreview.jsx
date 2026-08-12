import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {
  return (
    <React.Fragment>
      <h3>
        <section className="select-icons"></section>
        <input type="checkbox" />
        <svg class="hollow-star" viewBox="0 0 24 24">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
        <p>🧆</p>
        {mail.from}
      </h3>
      {/* <p>{mail.id}</p> */}
      <span className="mail-main">
        <p className="mail-subject">{mail.subject}</p>
        <p>{"-"}</p>
        <p className="mail-body">{mail.body}</p>
      </span>
      <span className="send-time">
        {utilService.getTimeOfDay(mail.createdAt)}
        {/* ------
        {utilService.getMonthName(mail.createdAt)}{" "}
        {utilService.getDayNumericDate(mail.createdAt, "he-IL", )}
        ------
        {utilService.getNumericDate(mail.createdAt, "he-IL",)}
        ------
        {utilService.getYearName(mail.createdAt)}
        ------
        {utilService.getDayName(mail.createdAt)} */}
      </span>
    </React.Fragment>
  )
}
