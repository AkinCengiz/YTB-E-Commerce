import './App.css'
import Brands from './components/layout/brands/Brands'
// import CampaingSingle from './components/layout/campaing/CampaingSingle'
import Policy from './components/layout/policy/Policy'
// import CartPage from './pages/CartPage'
// import AccountPage from './pages/AccountPage'
// import SingleBlogPage from './pages/SingleBlogPage'
import HomePage from "./pages/HomePage"

// import BlogsPage from "./pages/BlogsPage"
// import SingleProductPage from './pages/SingleProductPage'
// import ShopPage from './pages/ShopPage'
// import ContactPage from './pages/ContactPage'

function App() {
  
  return (
    <>
      <HomePage />
      {/* <BlogsPage /> */}
      {/* <AccountPage /> */}
      {/* <CartPage /> */}
      {/* <ContactPage /> */}
      {/* <ShopPage /> */}
      {/* <SingleProductPage /> */}
      {/* <SingleBlogPage /> */}
      <Brands />
      <Policy />
    </>
  )
}

export default App
