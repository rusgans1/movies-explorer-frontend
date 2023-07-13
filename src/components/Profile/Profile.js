import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Николай!</h2>
      <form className="profile__form">
        <div className="profile__input-container">
          <label className="profile__input-label">Имя</label>
          <input className="profile__input" value="Николай" required></input>
        </div>
        <div className="profile__input-container">
          <label className="profile__input-label">E-mail</label>
          <input className="profile__input" value="nikolay@gmail.com" required></input>
        </div>
        <div className="profile__links">
          <p className="profile__link_edit">Редактировать</p>
          <p className="profile__link_logout">Выйти из аккаунта</p>
        </div>
      </form>
    </section>
  );
}

export default Profile;