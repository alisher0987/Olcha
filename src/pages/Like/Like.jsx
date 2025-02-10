import Empty from "../../Components/Empty/Empty";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/Card";

function Like() {
  const likes = useSelector((state) => state?.Wishies?.value || []);

  return (
    <div className="h-80">
      {!likes.length ? (
        <Empty
          title="Sizga yoqqanini qoʻshing"
          url="https://uzum.uz/static/img/hearts.cf414be.png"
          desc="Mahsulotdagi belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
          btnTitle="Akkountga kirish"
          link="/login" 
        />
      ) : (
        <Card data={likes} />
      )}
    </div>
  );
}

export default Like;