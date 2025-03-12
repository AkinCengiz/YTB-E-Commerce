import { useEffect, useState } from 'react'
import { Table, Button } from "antd";
import { useNavigate } from 'react-router-dom';
  


function ProductList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const getProducts = async () => {
        try {
            const [categoryResponse, productResponse] = await Promise.all(
                [fetch("http://localhost:5000/api/categories"),fetch("http://localhost:5000/api/products")]
            );
            if(!categoryResponse.ok || !productResponse.ok){
                console.log("Veri getirilirken sorun meydana geldi...");
            }else{
                const [categoryList, productList] = await Promise.all(
                    [ categoryResponse.json(), productResponse.json()]
                );
                const dataSource = productList.map(product => {
                    const categoryId = product.category;
                    const category = categoryList.find(category => category._id === categoryId);
                    return { ...product, categoryName : category ? category.name : "" }
                });
                console.log(products);
                setProducts(dataSource);
                console.log(dataSource);
            }
        } catch (error) {
            console.log("Sunucu hatası", error);  
        }
    }

    useEffect(() => {
        getProducts();
        
    },[]);
    const columns = [
        {
          title: 'Image',
          dataIndex: 'images',
          key: 'images',
          render : (img, record ) => (<img src={`/${record.images[0]}`} alt="Product image" style={{width:"100px"}} />) 
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title : "Category",
            dataIndex : "categoryName",
            key : "categoryName"
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
          },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title : "Colors",
            dataIndex : "colors",
            key : "colors",
            render : ( colors ) => (
                <div style={{display:"flex", flexWrap:"wrap"}}>
                {
                    colors.map((color, index) => (
                        <div key={index} style={{
                            width : "20px",
                            height: "20px",
                            borderRadius : "50%",
                            backgroundColor : color,
                            marginRight : "5px",
                            marginBottom : "5px"
                        }}></div>
                    ))
                }
                </div>
            )
        },
        {
            title : "Sizes",
            dataIndex : "sizes",
            key : "sizes",
            render : (sizes) => (
                <div>
                    {
                        sizes.map((size,index) => (
                            <p style={{textAlign : "center", backgroundColor:"#DDD", padding:"3px"}} key={index}>{size.toUpperCase()}</p>
                        ))
                    }
                </div>
            )
        },
        {
            title : "Stock",
            dataIndex : "stock",
            key : "stock"
        },
        {
            title : "StockCode",
            dataIndex : "stockCode",
            key : "stockCode"
        },
        {
          title: "Process",
          key: "process",
          render: (record) => (
            <div style={{display : "flex", flexDirection : "column", gap : "20px"}}>
              <Button
                color="cyan"
                variant="solid"
                onClick={() => navigate(`/admin/products/update/${record._id}`)}
                style={{marginRight:"5px"}}
              >
                Update
              </Button>
              <Button
                color="danger"
                variant="solid"
                onClick={() => {}}
              >
                Delete
              </Button>
            </div>
          ),
        }
      ];

  return (
    <>
    <h2>Product List</h2>
    <br /><hr /><br />
    <Table dataSource={products} columns={columns} />;
    </>
  )
}

export default ProductList