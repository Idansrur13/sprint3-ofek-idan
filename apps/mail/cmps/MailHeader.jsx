export function MailHeader() {
  return (
    <section className="mail-header">
      <section className="mail-menu">menu</section>
      <div className="gmail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 193 145"
          width="24"
          height="18"
        >
          <path
            fill="#4285f4"
            d="M13.09 145h30.02V72.13L0 39.66v92.25C0 139.14 5.87 145 13.09 145z"
          />
          <path
            fill="#34a853"
            d="M149.89 145h30.02c7.23 0 13.09-5.87 13.09-13.09V39.66l-43.11 32.47z"
          />
          <path
            fill="#fbbc04"
            d="M149.89 13.09v59.04L193 39.66V19.64c0-18.58-21.21-29.17-36.07-18.02z"
          />
          <path
            fill="#ea4335"
            d="M43.11 72.13V13.09L96.5 53.14l53.39-40.05v59.04L96.5 112.18z"
          />
          <path
            fill="#c5221f"
            d="M0 19.64v20.02l43.11 32.47V13.09L36.07 1.62C21.21-9.53 0 1.06 0 19.64z"
          />
        </svg>
      </div>
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
