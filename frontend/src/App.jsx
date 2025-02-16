import './App.css'
import Brands from './components/layout/brands/Brands'
// import CampaingSingle from './components/layout/campaing/CampaingSingle'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Policy from './components/layout/policy/Policy'
// import CartPage from './pages/CartPage'
// import AccountPage from './pages/AccountPage'
// import SingleBlogPage from './pages/SingleBlogPage'
// import HomePage from "./pages/HomePage"

// import BlogsPage from "./pages/BlogsPage"
import SingleProductPage from './pages/SingleProductPage'
// import ShopPage from './pages/ShopPage'
// import ContactPage from './pages/ContactPage'

function App() {
  
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      {/* <BlogsPage /> */}
      {/* <AccountPage /> */}
      {/* <CartPage /> */}
      {/* <ContactPage /> */}
      {/* <ShopPage /> */}
      <SingleProductPage />
      {/* <SingleBlogPage /> */}
      <Brands />
      <Policy />
      <Footer />
    </>
  )
}

export default App
