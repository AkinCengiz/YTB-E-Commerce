function CartForm() {
  return (
    <>
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
    </>
  );
}

export default CartForm;
