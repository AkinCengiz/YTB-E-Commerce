import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router-dom"
import {
  AppstoreOutlined,
  BarcodeOutlined,
  GiftOutlined,
  TeamOutlined,
  DashboardOutlined,
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserSwitchOutlined,
  TagOutlined,
  TagsOutlined,
  UserAddOutlined
} from '@ant-design/icons';
import PropTypes from "prop-types";
const { Header, Footer, Sider, Content } = Layout;


function AdminLayout({children}) {
  const navigate = useNavigate();
  const items = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'DashBoard',
      path : "/admin",
      onclick : () => {
        navigate("/admin");
      }
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Category',
      path : "/",
      children : [
        {
          key: '2-1',
          icon: <AppstoreAddOutlined />,
          label: 'Add Category',
          path : "/admin/categories/create",
          onClick : () => {
            navigate("/admin/categories/create");
          }
        },
        {
          key: '2-2',
          icon: <AppstoreOutlined />,
          label: 'Category List',
          path : "/admin/categories",
          onClick : () => {
            navigate("/admin/categories");
          }
        }
        
      ]
    },
    {
      key: '3',
      icon: <GiftOutlined />,
      label: 'Product',
      path : "/admin/product",
      children : [
        {
          key : "3-1",
          icon : <ShoppingOutlined />,
          label : "Add Product",
          path : "/admin/products/create",
          onClick : () => {
            navigate("/admin/products/create")
          }
        },
        {
          key : "3-2",
          icon : <ShoppingCartOutlined />,
          label : "Product List",
          path : "/admin/products",
          onClick : () => {
            navigate("/admin/products")
          }
        }
      ]
    },
    {
      key: '4',
      icon: <UserSwitchOutlined />,
      label: 'User',
      path : "/",
      children : [
        {
          key : "4-1",
          icon : <UserAddOutlined />,
          label : "Add User",
          path : "/admin/users/create",
          onClick : () => {
            navigate("/admin/users/create")
          }
        },
        {
          key : "4-2",
          icon : <TeamOutlined />,
          label : "User List",
          path : "/admin/users",
          onClick : () => {
            navigate("/admin/users")
          }
        }]
    },
    {
      key: '5',
      icon: <BarcodeOutlined />,
      label: 'Coupon',
      path : "/admin/coupon",
      children : [
        {
          key : "5-1",
          icon : <TagOutlined />,
          label : "Add Coupon",
          path : "/admin/coupons/create",
          onClick : () => {
            navigate("/admin/coupons/create")
          }
        },
        {
          key : "5-2",
          icon : <TagsOutlined />,
          label : "Coupon List",
          path : "/admin/coupons",
          onClick : () => {
            navigate("/admin/coupons")
          }
        }]
    }
  ];
  return (
    <div className="admin-layout">
      <Layout style={{minHeight : "100vh"}}>
      <Sider width="20%" style={{ color : "white"}}>
      <Menu
        mode="inline"
        theme="dark"
        items={items}
      />
      </Sider>
      <Layout>
        <Header style={{ color : "white"}}>Header</Header>
        <Content style={{ padding:"30px"}}>{children}</Content>
        <Footer style={{}}>Footer</Footer>
      </Layout>
    </Layout>
  </div>
  )
}

export default AdminLayout

AdminLayout.propTypes = {
  children : PropTypes.node
}