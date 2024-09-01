import React from 'react'

export const Productdetail = ({ showproduct, handleCart }) => {
    console.log(showproduct)
    return (
        <>

            <div className="pd-wrap">
                <div className="container">
                    <div className="heading-section">
                        <h2>Product Details</h2>
                    </div>
                    {
                        showproduct?.map((p, i) => {
                            return (
                                <div className="row gy-4" key={i}>
                                    <div className="col-md-6  col-lg-6 col-xl-6">
                                        <div className='product-detail-image'>
                                            <img src={p.image} alt="" className='img-fluid'  />
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-dtl">
                                            <div className="product-info">
                                                <div className="product-name">{p.title}</div>
                                                <div className="reviews-counter">
                                                    <div className="rate">
                                                        <input
                                                            type="radio"
                                                            id="star5"
                                                            name="rate"
                                                            defaultValue={5}
                                                            defaultChecked=""
                                                        />
                                                        <label htmlFor="star5" title="text">
                                                            5 stars
                                                        </label>
                                                        <input
                                                            type="radio"
                                                            id="star4"
                                                            name="rate"
                                                            defaultValue={4}
                                                            defaultChecked=""
                                                        />
                                                        <label htmlFor="star4" title="text">
                                                            4 stars
                                                        </label>
                                                        <input
                                                            type="radio"
                                                            id="star3"
                                                            name="rate"
                                                            defaultValue={3}
                                                            defaultChecked=""
                                                        />
                                                        <label htmlFor="star3" title="text">
                                                            3 stars
                                                        </label>
                                                        <input type="radio" id="star2" name="rate" />
                                                        <label htmlFor="star2" title="text">
                                                            2 stars
                                                        </label>
                                                        <input type="radio" id="star1" name="rate" />
                                                        <label htmlFor="star1" title="text">
                                                            1 star
                                                        </label>
                                                    </div>
                                                    <span>3 Reviews</span>
                                                </div>
                                                <div className="product-price-discount">
                                                    <span>${(p.price).toFixed(0)}</span>
                                                    
                                                </div>
                                            </div>
                                            <p>{p.description}

                                            </p>
                                            
                                            <div className='my-4'>
                                                <button href="#" className="btn btn-dark py-2 rounded-0 text-warning" onClick={() => handleCart(p)}>
                                                    ADD TO CART
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                   

                </div>
            </div>

        </>



    )
}