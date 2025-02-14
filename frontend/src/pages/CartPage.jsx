function CartPage() {
  return (
    <>
      <section className="cart-page">
        <div className="container">
          <div className="cart-page-wrapper">
            <form className="cart-form">
              <div className="free-progress-bar">
                <p className="progress-bar-title">
                  Add <strong>$161.00</strong> to cart and get free shipping!
                </p>
                <div className="progress-bar">
                  <span className="progress" />
                </div>
              </div>
              <div className="shop-table-wrapper">
                <table className="shop-table">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-thumbnail">&nbsp;</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-subtotal">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="cart-wrapper"> </tbody>
                </table>
                <div className="actions-wrapper">
                  <div className="coupon">
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Coupon code"
                    />
                    <button className="btn">Apply Coupon</button>
                  </div>
                  <div className="update-cart">
                    <button className="btn">Update Cart</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="cart-collaterals">
              <div className="cart-totals">
                <h2>Cart totals</h2>
                <table>
                  <tbody>
                    <tr className="cart-subtotal">
                      <th>Subtotal</th>
                      <td>
                        <span id="subtotal">$316.00</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>
                        <ul>
                          <li>
                            <label>
                              Fast Cargo: $15.00
                              <input type="checkbox" id="fast-cargo" />
                            </label>
                          </li>
                          <li>
                            <a href="#">Change Address</a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        <strong id="cart-total">$316.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="checkout">
                  <button className="btn btn-lg">Proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartPage;
