
import { NavLink } from "react-router-dom"
export const Card = ({ item, ProductShow, handleCart }) => {
    const { id, image, category, price ,} = item

    return (
        <>           
        <div className="products-card col-sm-6 col-md-6 col-lg-4 col-xl-3 " >
        <div className="card border-0 rounded-0 shadow p-4 card-box">
                    <div className="card-image d-flex justify-content-center align-items-center" >
                        <img
                            src={image}
                            className="card-img-top rounded-0"
                            alt="..."
                        />

                    </div>

                    <div className="card-body mt-3 mb-3">
                        <div className="row">
                            <div className="">
                                <div className="card-category text-center">
                                    <h5>{category}</h5>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row align-items-center text-center g-0">
                        <div className="col-6">
                            <h5 className="products-price text-warning">${(price).toFixed(0)}</h5>
                        </div>
                        <div className="col-6">
                            
                            <NavLink to={`/product/${id}/${category}`} onClick={() => ProductShow(item)}>
                             <i className="fa-regular fa-eye me-2 cart-icons" onClick={() => ProductShow(item)}></i>
                            </NavLink>
                            <i className="fa-solid fa-cart-shopping cart-icons" onClick={() => handleCart(item)}></i>

                        </div>
                    </div>
                    </div>
                    </div>
    
        </>
  
        )
    }
