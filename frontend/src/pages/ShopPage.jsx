import Categories from "../components/categories/Categories"
import CampaingSingle from "../components/layout/campaing/CampaingSingle";
import Products from "../components/products/Products";

function ShopPage() {
  return (
    <>
      <div>
        <Categories />
        <Products />
        <CampaingSingle />
        <Products />
      </div>
    </>
  );
}

export default ShopPage;
