// Sevchilar.jsx (Favorites page component)

import { useSelector } from 'react-redux';
import {DATA} from "../../mock/index"
const Sevchilar = () => {
  const like = useSelector((state) => state.likes.value);  // Get liked items from Redux state

  return (
    <div>
      <h1>Sevchilar (Favorites)</h1>
      <div className="liked-items">
        {like.length === 0 ? (
          <p>No items in your favorites yet!</p>
        ) : (
          DATA.map((phone) => (
            <div key={phone.id}>
              <img src={phone.image} alt={phone.name} />
              <p>{phone.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sevchilar;
