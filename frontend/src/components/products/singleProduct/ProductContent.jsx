
function ProductContent() {
  return (
    <>
        <div className="single-content">
              <main className="site-main">
                <div className="product-gallery">
                  <div className="single-image-wrapper">
                    <img
                      src="img/products/product2/1.png"
                      id="single-image"
                      alt
                    />
                  </div>
                  <div className="product-thumb">
                    <div className="glide__track" data-glide-el="track">
                      <ol className="gallery-thumbs glide__slides" />
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                      <button
                        className="glide__arrow glide__arrow--left"
                        data-glide-dir="<"
                      >
                        <i className="bi bi-chevron-left" />
                      </button>
                      <button
                        className="glide__arrow glide__arrow--right"
                        data-glide-dir=">"
                      >
                        <i className="bi bi-chevron-right" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h1 className="product-title">Ridley High Waist</h1>
                  <div className="product-review">
                    <ul className="product-star">
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-half" />
                      </li>
                    </ul>
                    <span>2 reviews</span>
                  </div>
                  <div className="product-price">
                    <s className="old-price">$165</s>
                    <strong className="new-price">$100</strong>
                  </div>
                  <p className="product-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <form className="variations-form">
                    <div className="variations">
                      <div className="colors">
                        <div className="colors-label">
                          <span>Color</span>
                        </div>
                        <div className="colors-wrapper">
                          <div className="color-wrapper">
                            <label className="blue-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div className="color-wrapper">
                            <label className="red-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div className="color-wrapper active">
                            <label className="green-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                          <div className="color-wrapper">
                            <label className="purple-color">
                              <input type="radio" name="product-color" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="values">
                        <div className="values-label">
                          <span>Size</span>
                        </div>
                        <div className="values-list">
                          <span className="active">XS</span>
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="cart-button">
                        <input
                          type="number"
                          defaultValue={1}
                          min={1}
                          id="quantity"
                        />
                        <button
                          className="btn btn-lg btn-primary"
                          id="add-to-cart"
                          type="button"
                        >
                          Add to cart
                        </button>
                      </div>
                      <div className="product-extra-buttons">
                        <a href="#">
                          <i className="bi bi-globe" />
                          <span>Size Guide</span>
                        </a>
                        <a href="#">
                          <i className="bi bi-heart" />
                          <span>Add to Wislist</span>
                        </a>
                        <a href="#">
                          <i className="bi bi-share" />
                          <span>Share this Product</span>
                        </a>
                      </div>
                    </div>
                  </form>
                  <div className="divider" />
                  <div className="product-meta">
                    <div className="product-sku">
                      <span>SKU:</span>
                      <strong>BE45VGRT</strong>
                    </div>
                    <div className="product-categories">
                      <span>Categories:</span>
                      <strong>Pants , Women</strong>
                    </div>
                    <div className="product-tags">
                      <span>Tags:</span>
                      <a href="#">black</a>,<a href="#">white</a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
    </>
  )
}

export default ProductContent