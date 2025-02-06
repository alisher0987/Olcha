import { useParams } from "react-router-dom"
import { DATA } from '../../mock/index'
import "./SingleRoute.css"

function SingleRoute() {
    const params = useParams();
    const data = DATA.find((item) => item.id == params.id)
    
    return (
        <div className="single-route">
            <div className="container">
                <div className="single-route-wrapper">
                    <div className="product-images">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <div className="product-info">
                        <h2 className="product-title">{data.title}</h2>
                        <div className="installment-options">
                            <div className="installment-header">
                                <button className="active">24 oy</button>
                                <button>12 oy</button>
                                <button>6 oy</button>
                                <button>3 oy</button>
                            </div>
                            <div className="price-info">
                                <span className="highlighted-price">4 249 som</span>
                                <span>× 24 oy</span>
                            </div>
                        </div>git add .


                        <div className="action-buttons">
                            <button className="buy-now">1 klikda xarid qilish</button>
                            <button className="add-to-cart">Savatga qoshish</button>
                        </div>
                        <div className="additional-info">
                            <p className="stock-info">✓ 5 dona xarid qilish mumkin</p>
                            <p className="sales-info">📦 Bu haftada 534 kishi sotib oldi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute