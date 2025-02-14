
function ShopPage() {
  return (
    <>
      <div>
        <section className="categories">
          <div className="container">
            <div className="section-title">
              <h2>All Categories</h2>
              <p>Summer Collection New Morden Design</p>
            </div>
            <ul className="category-list">
              <li className="category-item">
                <a href="#">
                  <img
                    src="img/categories/categories1.png"
                    alt
                    className="category-image"
                  />
                  <span className="category-title">Smartphone</span>
                </a>
              </li>
              <li className="category-item">
                <a href="#">
                  <img
                    src="img/categories/categories2.png"
                    alt
                    className="category-image"
                  />
                  <span className="category-title"> Watches </span>
                </a>
              </li>
              <li className="category-item">
                <a href="#">
                  <img
                    src="img/categories/categories3.png"
                    alt
                    className="category-image"
                  />
                  <span className="category-title"> Electronics </span>
                </a>
              </li>
              <li className="category-item">
                <a href="#">
                  <img
                    src="img/categories/categories4.png"
                    alt
                    className="category-image"
                  />
                  <span className="category-title"> Furnitures </span>
                </a>
              </li>
              <li className="category-item">
                <a href="#">
                  <img
                    src="img/categories/categories5.png"
                    alt
                    className="category-image"
                  />
                  <span className="category-title"> Collections </span>
                </a>
              </li>
              <li className="category-item">
                <a href="#">
                  <img
                    src="img/categories/categories6.png"
                    alt
                    className="category-image"
                  />
                  <span className="category-title"> Fashion </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <div className="section-title">
              <h2>Featured Products</h2>
              <p>Summer Collection New Morden Design</p>
            </div>
            <div className="product-wrapper product-carousel">
              <div className="glide__track" data-glide-el="track">
                <ul className="product-list glide__slides" id="product-list" />
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
        </section>
        <section className="campaign-single">
          <div className="container">
            <div className="campaign-wrapper">
              <h2>New Season Sale</h2>
              <strong>40% OFF</strong>
              <span />
              <a href="#" className="btn btn-lg">
                SHOP NOW
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="container">
            <div className="section-title">
              <h2>New Arrivals</h2>
              <p>Summer Collection New Morden Design</p>
            </div>
            <div className="product-wrapper product-carousel2">
              <div className="glide__track" data-glide-el="track">
                <ul className="product-list glide__slides">
                  <li className="product-item glide__slide">
                    <div className="product-image">
                      <a href="#">
                        <img
                          src="img/products/product1/1.png"
                          alt
                          className="img1"
                        />
                        <img
                          src="img/products/product1/2.png"
                          alt
                          className="img2"
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="$" className="product-title">
                        Analogue Resin Strap
                      </a>
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
                      <div className="product-prices">
                        <strong className="new-price">$108.00</strong>
                        <span className="old-price">$165.00</span>
                      </div>
                      <span className="product-discount">-17%</span>
                      <div className="product-links">
                        <button>
                          <i className="bi bi-basket-fill" />
                        </button>
                        <button>
                          <i className="bi bi-heart-fill" />
                        </button>
                        <a href="#">
                          <i className="bi bi-eye-fill" />
                        </a>
                        <a href="#">
                          <i className="bi bi-share-fill" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="product-item glide__slide">
                    <div className="product-image">
                      <a href="#">
                        <img
                          src="img/products/product2/1.png"
                          alt
                          className="img1"
                        />
                        <img
                          src="img/products/product2/2.png"
                          alt
                          className="img2"
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="$" className="product-title">
                        Analogue Resin Strap
                      </a>
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
                      <div className="product-prices">
                        <strong className="new-price">$108.00</strong>
                        <span className="old-price">$165.00</span>
                      </div>
                      <span className="product-discount">-17%</span>
                      <div className="product-links">
                        <button>
                          <i className="bi bi-basket-fill" />
                        </button>
                        <button>
                          <i className="bi bi-heart-fill" />
                        </button>
                        <a href="#">
                          <i className="bi bi-eye-fill" />
                        </a>
                        <a href="#">
                          <i className="bi bi-share-fill" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="product-item glide__slide">
                    <div className="product-image">
                      <a href="#">
                        <img
                          src="img/products/product3/1.png"
                          alt
                          className="img1"
                        />
                        <img
                          src="img/products/product3/2.png"
                          alt
                          className="img2"
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="$" className="product-title">
                        Analogue Resin Strap
                      </a>
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
                      <div className="product-prices">
                        <strong className="new-price">$108.00</strong>
                        <span className="old-price">$165.00</span>
                      </div>
                      <span className="product-discount">-17%</span>
                      <div className="product-links">
                        <button>
                          <i className="bi bi-basket-fill" />
                        </button>
                        <button>
                          <i className="bi bi-heart-fill" />
                        </button>
                        <a href="#">
                          <i className="bi bi-eye-fill" />
                        </a>
                        <a href="#">
                          <i className="bi bi-share-fill" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="product-image">
                      <a href="#">
                        <img
                          src="img/products/product4/1.png"
                          alt
                          className="img1"
                        />
                        <img
                          src="img/products/product4/2.png"
                          alt
                          className="img2"
                        />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="$" className="product-title">
                        Analogue Resin Strap
                      </a>
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
                      <div className="product-prices">
                        <strong className="new-price">$108.00</strong>
                        <span className="old-price">$165.00</span>
                      </div>
                      <span className="product-discount">-17%</span>
                      <div className="product-links">
                        <button>
                          <i className="bi bi-basket-fill" />
                        </button>
                        <button>
                          <i className="bi bi-heart-fill" />
                        </button>
                        <a href="#">
                          <i className="bi bi-eye-fill" />
                        </a>
                        <a href="#">
                          <i className="bi bi-share-fill" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
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
        </section>
      </div>
    </>
  );
}

export default ShopPage;
