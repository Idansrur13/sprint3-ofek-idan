export function MailHeader() {
  return (
    <section className="mail-header">
      <section className="mail-menu">menu</section>
      <div className="gmail">Gmail</div>
      <div>{<input type="search" />}</div>
      <div className="profile-icons">
        <span>😀</span>
        <span>🐶</span>
        <span>🐺</span>
        <span>🐱</span>
      </div>
    </section>
  )
}
