import CampaingSingle from "../components/layout/campaing/CampaingSingle";
import SingleProduct from "../components/products/SingleProduct";

function SingleProductPage() {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <SingleProduct />
        </div>
      </section>
      <CampaingSingle />
    </>
  );
}

export default SingleProductPage;
