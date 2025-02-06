import { useDispatch, useSelector } from "react-redux";
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { BiBarChart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { incCart, addToLike, removeFromLike } from "../../context/likeSlice";  // Corrected import
import './Card.css';
import { DATA } from '../../mock';

const Card = ({data}) => {
  const dispatch = useDispatch();
  let like = useSelector((state) => state.likes.value);
  console.log(like);

  return (
    <div className="phones-container">
      {DATA.map((phone) => (
        <div key={phone.id} className="phone-card">
          <div className="phone-card-header">
            <FiHeart className="icon heart-icon" />
            <BiBarChart className="icon chart-icon" />
          </div>
         
          <Link to={`/card/${phone.id}`}>
            <img src={phone.image} className="phone-image" />
          </Link>

          {like?.some((itemLike) => itemLike.id === phone.id) ? (
            <div
              onClick={() => dispatch(removeFromLike(phone))}
              className="card__heart"
            >
              {/* Your heart icon */}
            </div>
          ) : (
            <div
              onClick={() => dispatch(addToLike(phone))}
              className="card__heart"
            >
              {/* Your heart icon */}
            </div>
          )}

          <h3 className="phone-name">{phone.name}</h3>
          <div className="price-container">
            <p className="main-price">{phone.price} som</p>
            <p className="monthly-price">
              <span><mark>{phone.monthly} som x 12 oy</mark></span>
            </p>
          </div>
          <div className="button-container">
            <button onClick={() => dispatch(incCart(phone))} className="cart-button">
              <FiShoppingCart />
            </button>
            <button className="buy-button">Muddatli tolov</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
