import { Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from "./pages/HomePage"
import ShopPage from './pages/ShopPage'
import BlogsPage from "./pages/BlogsPage"
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import AccountPage from './pages/AccountPage'
import SingleBlogPage from './pages/SingleBlogPage'
import SingleProductPage from './pages/SingleProductPage'


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogsPage/>} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/singleblog" element={<SingleBlogPage/>} />
      <Route path="/singleproduct" element={<SingleProductPage />} />
    </Routes>
    </>
  )
}

export default App
