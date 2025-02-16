import ProductContent from "./singleProduct/ProductContent"
import ProductTabs from "./singleProduct/ProductTabs"
import ProductTopbar from "./singleProduct/ProductTopbar"

function SingleProduct() {
  return (
    <>
        <div className="single-product-wrapper">
            {/* breadcrumb start */}
            <ProductTopbar />
            {/* breadcrumb end */}
            {/* site main start */}
            <ProductContent />
            {/* site main end */}
            {/* tabs start */}
            <ProductTabs />
            {/* tabs end */}
          </div>
    </>
  )
}

export default SingleProduct