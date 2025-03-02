import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function UpdateCategory() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();

  const handleCreateCategory = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("Kategori başarıyla eklendi...");
        navigate("/admin/categories");
      } else {
        console.log("Kategori oluşturulurken hata meydana geldi...");
      }
    } catch (error) {
      console.log("Sunucu hatası : ", error);
    }
  };

  return (
    <>
      <h2>Update Category Panel</h2>
      <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={handleCreateCategory}
      >
        <Form.Item label="Category Name" name="name">
          <Input placeholder="Category name enter..." />
        </Form.Item>
        <Form.Item label="Category Image" name="img">
          <Input placeholder="Category Image enter..." />
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

export default UpdateCategory;
