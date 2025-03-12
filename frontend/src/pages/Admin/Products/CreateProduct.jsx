import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, message, Select } from "antd";

function CreateProduct() {
    const [ categories, setCategories ] = useState([]);
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const colorOptions = ["Red","Green","Blue","Black","White","Brown"];
  const sizeOptions = ["xs","sm","m","l","xl","xxl"];

  const getCategories = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/categories");
        if(response.ok){
            const data = await response.json();
            setCategories(data);
        }else{
            console.log("Kategori getirilemedi...");
        }
    } catch (error) {
        console.log("Sunucu hatası", error);
    }
  }
  const addProduct = async (values) => {
      const { colors, sizes, ...restValue } = values;
      const imageLinks = values.images.split("\n").map(link => link.trim());
    try {
        const response = await fetch("http://localhost:5000/api/products",{
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({
                ...values,colors,sizes,images:imageLinks
            })
        });
        if(response.ok){
            message.success("Ürün başarıyla oluşturuldu...");
            form.resetFields();
        }else{
            message.error("Hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası", error);
    }
  }
  useEffect(() => {
    getCategories();
  },[]);
  return (
    <>
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
          colors : ["Black","White"],
          sizes : ["m","l"]
        }}
        onFinish={addProduct}
      >
        <Form.Item label="Product Name" name="name" rules={[{required : true, message : "Product name enter..."}]}>
          <Input placeholder="Product name enter..." />
        </Form.Item>
        <Form.Item label="Stock Code" name="stockCode" rules={[{required : true, message : "Product Stock Code enter..."}]}>
          <Input placeholder="Product Stock Code enter..." />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{required : true, message : "Product description enter..."}]}>
          <Input.TextArea placeholder="Product description enter..." rows={5} />
        </Form.Item>
        <Form.Item label="Product Images" name="images" rules={[{required : true, message : "Product images enter..."}]}>
          <Input.TextArea placeholder="Product images enter..." rows={5} />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required : true, message : "Product price enter..."}]}>
            <InputNumber />
        </Form.Item>
        <Form.Item label="Discount" name="discount" rules={[{ required : true, message : "Product discount enter..."}]}>
            <InputNumber />
        </Form.Item>
        <Form.Item label="Stock" name="stock" rules={[{ required : true, message : "Product stock enter..."}]}>
            <InputNumber />
        </Form.Item>
        <Form.Item label="Colors" name="colors" rules={[{required:true, message:"Product colors select..."}]}>
            <Checkbox.Group options={colorOptions}  />
        </Form.Item>
        {/* <Form.Item label="Sizes" name="sizes" rules={[{required : true, message : "Product sizes enter..."}]}>
          <Input.TextArea placeholder="Product sizes enter..." rows={5} />
        </Form.Item> */}
        <Form.Item label="Sizes" name="sizes" rules={[{required:true, message:"Product sizes select..."}]}>
            <Checkbox.Group options={sizeOptions}  />
        </Form.Item>
        <Form.Item label="Categories" name="category" rules={[{required:true, message:"Select a category"}]}>
            <Select placeholder="Select a category..." >
                {
                    categories.map(category => (
                        <Select.Option key={category._id} value={category._id}>{category.name}</Select.Option>
                    ))
                }
            </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProduct;
