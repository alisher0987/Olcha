import "./Product.css"

const banners = [
  {
    id: 1,
    title: "NOUTBUKLAR",
    subtitle: "BATAFSIL",
    image: "https://olcha.uz/image/original/homePage/cdn_1/2024-12-07/dQa2gKYLVSoapZgQ4OGTRp2ZWjE03ZILIjXXmfNzjF74jYdVF2ML3AnOc04N.png"
  },
  {
    id: 2,
    title: "MAISHIY TEXNIKA",
    subtitle: "BATAFSIL",
    image: "https://olcha.uz/image/original/homePage/cdn_1/2024-12-07/ft1aaB5B5g7IMZpWYsSurxSY9GdXdN4tTS9Rg4fhxig9FEiY85qXL9b5btiu.png"
  },
  {
    id: 3,
    title: "YANGI MAVSUM, YANGI SIZ",
    subtitle: "BATAFSIL",
    image: "https://olcha.uz/image/original/homePage/cdn_1/2024-12-07/sKgKcHNtatkfH3E2aen9v0kyG8tLxULGtHFW3kQlb7yRtiCKuuswUFKuDwqO.png"
  }
];

const Product = () => {
  return (
    <div className="banner-container">
      {banners.map((banner) => (
        <div key={banner.id} className="banner-card">
          <img src={banner.image} alt={banner.title} />
          <div className="banner-content">
            <h2>{banner.title}</h2>
            <span className="subtitle">{banner.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;