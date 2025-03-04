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
import CategoryList from "./pages/Admin/Categories/CategoryList"
import CreateCategory from "./pages/Admin/Categories/CreateCategory"
import UpdateCategory from "./pages/Admin/Categories/UpdateCategory"
import UserList from "./pages/Admin/Users/UserList"
import ProductList from "./pages/Admin/Products/ProductList"
import CreateProduct from "./pages/Admin/Products/CreateProduct"


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
        <Route path="/admin/*">
          <Route index element={<CategoryList />} />
          <Route path="categories" element={<CategoryList/>} />
          <Route path="categories/create" element={<CreateCategory/>} />
          <Route path="categories/update/:id" element={<UpdateCategory/>} />
          <Route path="products" element={<ProductList/>} />
          <Route path="products/create" element={<CreateProduct/>} />
          <Route path="users" element={<UserList/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
