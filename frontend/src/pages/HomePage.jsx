import Blogs from "../components/blogs/Blogs";
import Campaings from "../components/campaings/Campaings";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Slider from "../components/slider/Slider";

const HomePage = () => {
  return (
    <>
      <div>
        <Slider />
        <Categories />
        <Products />
        <Campaings />
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
        <Blogs />
      </div>
    </>
  );
};

export default HomePage;
