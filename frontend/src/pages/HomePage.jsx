const HomePage = () => {
  return (
    <>
      <div>
        <div className="modal-search">
          <div className="modal-wrapper">
            <h3 className="modal-title">Search for products</h3>
            <p className="modal-text">
              Start typing to see products you are looking for.
            </p>
            <form className="search-form">
              <input type="text" placeholder="Search a product" />
              <button>
                <i className="bi bi-search" />
              </button>
            </form>
            <div className="search-results">
              <div className="search-heading">
                <h3>RESULTS FROM PRODUCT</h3>
              </div>
              <div className="results">
                <a href="#" className="result-item">
                  <img
                    src="img/products/product1/1.png"
                    className="search-thumb"
                    alt
                  />
                  <div className="search-info">
                    <h4>Analogue Resin Strap</h4>
                    <span className="search-sku">SKU: PD0016</span>
                    <span className="search-price">$108.00</span>
                  </div>
                </a>
                <a href="#" className="result-item">
                  <img
                    src="img/products/product2/1.png"
                    className="search-thumb"
                    alt
                  />
                  <div className="search-info">
                    <h4>Analogue Resin Strap</h4>
                    <span className="search-sku">SKU: PD0016</span>
                    <span className="search-price">$108.00</span>
                  </div>
                </a>
              </div>
            </div>
            <i className="bi bi-x-circle" id="close-search" />
          </div>
        </div>
        <div className="modal-dialog">
          <div className="modal-content">
            <button className="modal-close">
              <i className="bi bi-x" />
            </button>
            <div className="modal-image">
              <img src="img/modal-dialog.jpg" alt />
            </div>
            <div className="popup-wrapper">
              <div className="popup-content">
                <div className="popup-title">
                  <h3>NEWSLETTER</h3>
                </div>
                <p className="popup-text">
                  Sign up to our newsletter and get exclusive deals you won find
                  any where else straight to your inbox!
                </p>
                <form className="popup-form">
                  <input type="text" placeholder="Enter Email Address Here" />
                  <button className="btn btn-primary">SUBSCRIBE</button>
                  <label>
                    <input type="checkbox" />
                    <span>Dont show this popup again</span>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <section className="slider">
          <div className="slider-elements">
            <div className="slider-item fade">
              <div className="slider-image">
                <img src="img/slider/slider1.jpg" className="img-fluid" alt />
              </div>
              <div className="container">
                <p className="slider-title">SUMMER 2022</p>
                <h2 className="slider-heading">Save up to 70%</h2>
                <a href="#" className="btn btn-lg btn-primary">
                  Explore Now
                </a>
              </div>
            </div>
            {/* <div className="slider-item fade">
              <div className="slider-image">
                <img src="img/slider/slider2.jpg" className="img-fluid" alt />
              </div>
              <div className="container">
                <p className="slider-title">SUMMER 2022</p>
                <h2 className="slider-heading">Save up to 70%</h2>
                <a href="#" className="btn btn-lg btn-primary">
                  Explore Now
                </a>
              </div>
            </div>
            <div className="slider-item fade">
              <div className="slider-image">
                <img src="img/slider/slider3.jpg" className="img-fluid" alt />
              </div>
              <div className="container">
                <p className="slider-title">SUMMER 2022</p>
                <h2 className="slider-heading">Save up to 70%</h2>
                <a href="#" className="btn btn-lg btn-primary">
                  Explore Now
                </a>
              </div>
            </div> */}
            {/* <div className="slider-buttons">
        <button onclick="plusSlide(-1)">
          <i className="bi bi-chevron-left" />
        </button>
        <button onclick="plusSlide(1)">
          <i className="bi bi-chevron-right" />
        </button>
      </div> */}
            {/* <div className="slider-dots">
        <button className="slider-dot active" onclick="currentSlide(1)">
          <span />
        </button>
        <button className="slider-dot" onclick="currentSlide(2)">
          <span />
        </button>
        <button className="slider-dot" onclick="currentSlide(3)">
          <span />
        </button>
      </div> */}
          </div>
        </section>
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
        <section className="campaigns">
          <div className="container">
            <div className="campaigns-wrapper">
              <div className="campaign-item">
                <h3 className="campaign-title">
                  Fashion Month <br />
                  Ready in Capital <br />
                  Shop
                </h3>
                <p className="campaign-desc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
                <a href="#" className="btn btn-primary">
                  View All
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
              <div className="campaign-item">
                <h3 className="campaign-title">
                  Fashion Month <br />
                  Ready in Capital <br />
                  Shop
                </h3>
                <p className="campaign-desc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
                <a href="#" className="btn btn-primary">
                  View All
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
            <div className="campaigns-wrapper">
              <div className="campaign-item">
                <h3 className="campaign-title">
                  Fashion Month <br />
                  Ready in Capital <br />
                  Shop
                </h3>
                <p className="campaign-desc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
                <a href="#" className="btn btn-primary">
                  View All
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
              <div className="campaign-item">
                <h3 className="campaign-title">
                  Fashion Month <br />
                  Ready in Capital <br />
                  Shop
                </h3>
                <p className="campaign-desc">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
                <a href="#" className="btn btn-primary">
                  View All
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
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
        <section className="blogs">
          <div className="container">
            <div className="section-title">
              <h2>From Our Blog</h2>
              <p>Summer Collection New Morden Design</p>
            </div>
            <ul className="blog-list">
              <li className="blog-item">
                <a href="#" className="blog-image">
                  <img src="img/blogs/blog1.jpg" alt />
                </a>
                <div className="blog-info">
                  <div className="blog-info-top">
                    <span>25 Feb, 2021 </span>-<span>0 Comments</span>
                  </div>
                  <div className="blog-info-center">
                    <a href="#">Aliquam hendrerit mi metus</a>
                  </div>
                  <div className="blog-info-bottom">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </li>
              <li className="blog-item">
                <a href="#" className="blog-image">
                  <img src="img/blogs/blog2.jpg" alt />
                </a>
                <div className="blog-info">
                  <div className="blog-info-top">
                    <span>25 Feb, 2021 </span>-<span>0 Comments</span>
                  </div>
                  <div className="blog-info-center">
                    <a href="#">Aliquam hendrerit mi metus</a>
                  </div>
                  <div className="blog-info-bottom">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </li>
              <li className="blog-item">
                <a href="#" className="blog-image">
                  <img src="img/blogs/blog3.jpg" alt />
                </a>
                <div className="blog-info">
                  <div className="blog-info-top">
                    <span>25 Feb, 2021 </span>-<span>0 Comments</span>
                  </div>
                  <div className="blog-info-center">
                    <a href="#">Aliquam hendrerit mi metus</a>
                  </div>
                  <div className="blog-info-bottom">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
