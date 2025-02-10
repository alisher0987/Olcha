import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../Context/cartSlice"; // removeFromCart emas, removeCart
import { FaRegTrashAlt } from "react-icons/fa";
import "./Shop.css"

function Shop() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  const handleRemove = (item) => {
    dispatch(removeCart(item)); // removeFromCart emas, removeCart
  };

  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="item-info">
            <h3>{item.title}</h3>
            <p>{item.price?.toLocaleString()} som</p>
          </div>
          <button 
            className="remove-btn" 
            onClick={() => handleRemove(item)}
          >
            <FaRegTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;