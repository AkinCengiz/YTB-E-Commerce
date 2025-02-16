function Categories() {
  return (
    <>
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
    </>
  );
}

export default Categories;
