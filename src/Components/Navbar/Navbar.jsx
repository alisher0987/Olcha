
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <nav className="navbar">
      <div className="navbar-container">
   
        <div className="logo">
          <h1>Olcha</h1>
        </div>

        <button className="catalog-btn">
          <span className="hamburger-icon">☰</span>
          Katalog
        </button>

 
        <div className="search-container">
          <input
            type="text"
            placeholder="Katalog bo'yicha qidirish"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn">
            <FiSearch className='search-btn-icon' />
          </button>
        </div>

        <div className="nav-links">
          <Link to={"/Sevmlilar"} className="nav-link">
            <FiHeart />
            <span>Sevimlilar</span>
          </Link>
          <Link to={"/Savatcha"} className="nav-link">
            <FiShoppingCart />
            <span>Savatcha</span>
          </Link>
          <Link to={"/Kirish"} className="nav-link">
            <FiUser />
            <span>Kirish</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;