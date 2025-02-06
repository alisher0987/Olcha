import Banner from "../../Components/Banner/Banner"
import CategorySlider from "../../Components/CategorySlider/CategorySlider"
import Card from "../../Components/Card/Card"
import Product from "../../Components/Product/Product"
function Home() {
  return (
    <div>
           <Banner/>
           <CategorySlider/>
           <Product/>
           <Card/>
    </div>
  )
}

export default Home