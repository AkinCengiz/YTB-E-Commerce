import ProductItem from "./ProductItem";

function Products() {
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper product-carousel">
            <div className="glide__track" data-glide-el="track">
              <ul className="product-list" id="product-list">
                <ProductItem />
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
    </>
  );
}

export default Products;
