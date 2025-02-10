import "./User.css";
import { Link } from "react-router-dom";

function User() {
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <form className="login__form">
            <h2 className="login__form-heading">Tizimga kirish</h2>
            <div className="login__form-input-wrapper">
              <label className="login__form-label">
                <span>Foydalanuvchi nomi</span>
                <input
                  className="login__form-input"
                  type="text"
                  placeholder="Foydalanuvchi nomi"
                />
              </label>
              <label className="login__form-label">
                <span>Parol</span>
                <input
                  className="login__form-input"
                  type="text"
                  placeholder="Parol"
                />
              </label>
              <button type="sumbit" className="login__form-button">
                Kirish
              </button>
              <Link to={"/"} className="form__bottom-home">
                Asosiy sahifaga qaytish
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
