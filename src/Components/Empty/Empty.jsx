import "./Empty.css";
import { useNavigate } from "react-router-dom";

function Empty({ title, url, desc, btnTitle, link }) {
  const navigate = useNavigate();
  return (
    <div className="empty">
      <div className="container">
        <img className="empty__img" src={url} width={150} alt="" />
        <h2 className="empty__title">{title}</h2>
        <p className="empty__deck">{desc}</p>
        <button className="empty__btn" onClick={() => navigate(link)}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
}

export default Empty;
