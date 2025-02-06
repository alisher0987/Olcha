

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CategorySlider.css';

const categories = [
  {
    id: 1,
    title: "Televizor, foto-video va audio",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
  },
  {
    id: 2,
    title: "Noutbuk, printer, kompyuterlar",
    image: "https://th.bing.com/th/id/OIP.Ht8aApbCF142fhb1JRzYXQHaE7?w=304&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 3,
    title: "Smartfon, telefon, gadjet, aksessuarlar",
    image: "https://th.bing.com/th/id/OIP.WqXjItHuBcr9xfP_JiCF_AHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 4,
    title: "Maishiy texnika",
    image: "https://th.bing.com/th/id/OIP.mkWTUB45hvLtNH8KL6mECQAAAA?w=157&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 5,
    title: "Barchasi oshxona uchun",
    image: "https://th.bing.com/th/id/OIP.AoXur12TcnBOqCvdJ3RHAAHaHa?w=199&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 6,
    title: "Sport anjomlar",
    image: "https://th.bing.com/th/id/OIP.8gVLq1JHJUSkQzUqvYxpKwHaJ4?w=123&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 7,
    title: "Go'zallik va salomatlik",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png"
  },
  {
    id: 8,
    title: "Chet eldan tovarlar",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png"
  },
  {
    id: 9,
    title: "Avto jihozlar",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png"
  },
  {
    id: 10,
    title: "Barchasi ofs, uy va bog' uchun",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/g8nf8o2xpmFB6FaaAy60UUZWKqLzXhEEOqIc2RdAEp7s0r7ETvdBkvkmBvIB.png"
  }
];

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="category-slider">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <div className="category-circle">
              <img src={category.image} alt={category.title} />
            </div>
            <p className="category-title">{category.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;