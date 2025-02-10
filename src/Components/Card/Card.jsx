import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { incCart, decCart, removeCart } from "../../Context/cartSlice";
import { addToWishies, removeFromWishies } from "../../Context/likeSlice";
import { DATA } from "../../mock/index";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Card.css";

function Card({ data = DATA }) {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state?.cart?.value || []);
  const likedItems = useSelector((state) => state?.Wishies?.value || []);

  const handleAddToCart = (phone) => {
    console.log("Qo'shilayotgan mahsulot:", phone);
    dispatch(incCart({
      id: phone.id,
      title: phone.title,
      price: phone.price,
      image: phone.image,
      category: phone.category
    }));
    setIsCartOpen(true);
  };

  const handleLike = (phone) => {
    const isLiked = likedItems.some(item => item.id === phone.id);
    if (isLiked) {
      dispatch(removeFromWishies(phone));
    } else {
      dispatch(addToWishies({
        id: phone.id,
        title: phone.title,
        price: phone.price,
        image: phone.image,
        category: phone.category
      }));
    }
  };

  return (
    <>
      <div className="phones-container">
        {data?.map((phone) => (
          <div key={phone.id} className="phone-card">
            <div className="phone-card-header">
              <FiHeart 
                className={`icon heart-icon ${likedItems.some(item => item.id === phone.id) ? 'active' : ''}`}
                onClick={() => handleLike(phone)}
              />
            </div>

            <Link to={`/product/${phone.id}`}>
              <img 
                src={phone.image} 
                alt={phone.title} 
                className="phone-image"
              />
            </Link>

            <h3 className="phone-name">{phone.title}</h3>

            <div className="price-container">
              <p className="main-price">
                {phone.price?.toLocaleString()} som
              </p>
              <p className="monthly-price">
                <span>{Math.floor(phone.price / 12)?.toLocaleString()} som x 12 oy</span>
              </p>
            </div>

            <div className="button-container">
              <button 
                className="cart-button"
                onClick={() => handleAddToCart(phone)}
              >
                <FiShoppingCart />
              </button>
              <button className="buy-button">Muddatli tolov</button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && cartItems.length > 0 && (
        <div className="cart-dropdown-wrapper" onClick={() => setIsCartOpen(false)}>
          <div className="cart-dropdown" onClick={e => e.stopPropagation()}>
            <div className="cart-dropdown-header">
              <h3>Savat ({cartItems.length})</h3>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
            </div>

            <div className="cart-items-container">
              {cartItems.map((el) => (
                <div key={el.id} className="cart-dropdown-item">
                  <Link to={`/product/${el.id}`} className="cart__item-left">
                    <img src={el.image} alt={el.title} />
                    <div>
                      <h4>{el.title}</h4>
                      <p>Kategoriya: {el.category}</p>
                    </div>
                  </Link>
                  <div className="cart__item-right">
                    <div className="cart__item-btns">
                      <button
                        disabled={el.quantity <= 1}
                        onClick={() => dispatch(decCart(el))}
                      >
                        -
                      </button>
                      <button>{el.quantity}</button>
                      <button onClick={() => dispatch(incCart(el))}>+</button>
                    </div>
                    <div>
                      <button
                        onClick={() => dispatch(removeCart(el))}
                        className="cart__trash-btn"
                      >
                        <FaRegTrashAlt />
                      </button>
                      <h3>{el.price?.toLocaleString()} so'm</h3>
                      <p>{(el.price * el.quantity)?.toLocaleString()} so'm</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-dropdown-footer">
              <div className="total">
                <span>Jami:</span>
                <span>
                  {cartItems.reduce((total, el) => total + (el.price * el.quantity), 0)?.toLocaleString()} so'm
                </span>
              </div>
              <Link to="/cart" className="checkout-btn" onClick={() => setIsCartOpen(false)}>
                Rasmiylashtirish
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;