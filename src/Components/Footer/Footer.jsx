import "./Footer.css"
// import payme from "../../assets/payme.DLp2GdHd.svg"
// import plum from "../../assets/download.svg"
// import paynet from "../../assets/paynet.C8TMfSoa.svg"
// import uzumbank from "../../assets/uzumbank.BHyRM-1y.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="mobile-app">
          <h3>Bizning mobil ilovamiz AppGallery, App Store va Google Play-da</h3>
          <div className="app-links">
            <img src="appstore.png" alt="App Store" />
            <img src="googleplay.png" alt="Google Play" />
            <img src="appgallery.png" alt="AppGallery" />
          </div>
        </div>
        <div className="contact-info">
          <h3 className="brand">olcha</h3>
          <p>Qollab-quvvatlash raqami</p>
          <p className="phone">+998 (71) 202 202 1</p>
          <p>Oqitarnov, Toshkent</p>
          <p>Email: info@olcha.uz</p>
        </div>
        <div className="info-links">
          <h3>Malumot</h3>
          <ul>
            <li>Biz haqimizda</li>
            <li>Bosh ish orinlari</li>
            <li>Ommaviy oferta</li>
            <li>Tolovni qaytarish va tovarlarni almashtirish</li>
            <li>Muddatli tolov shartlari</li>
            <li>Eco-friendly</li>
            <li>Shaxsiy malumotlar bilan ishlash boyicha siyosat</li>
            <li>Tolov va yetkazib berish</li>
            <li>Bonus va aksiyalar</li>
          </ul>
        </div>
        <div className="payment-methods">
          <h3>Tolov usullari</h3>
          <div className="payment-icons">
            {/* <img src={uzumbank} alt="Uzum Bank" />
            <img src={plum} alt="P2P" />
            <img src="click.png" alt="Click" /> */}
            Olcha App Apple Store
            Olcha App Googleplay
            Olcha App Gallery
            olcha.uz
            Телефон
            {/* <img src={payme} alt="Payme" />
            <img src="" alt="P2P" />
            <img src={paynet} alt="Paynet" /> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2017-2025. OOO Olcha Store</p>
        <p>Ommaviy oferta | Maxfiylik siyosati</p>
      </div>
    </footer>
  );
};

export default Footer;
