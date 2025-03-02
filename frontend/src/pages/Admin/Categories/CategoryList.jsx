import { message, Table } from "antd";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function CategoryList() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      width: "25%",
      render: (img,record) => (
        <img alt={`/${record.img}`} src={`/${record.img}`} />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Process",
      key: "process",
      render: (record) => (
        <>
          <Button
            color="cyan"
            variant="solid"
            onClick={() => navigate(`/admin/categories/update/${record._id}`)}
            style={{marginRight:"5px"}}
          >
            Update
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => deleteCategories(record._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];
  //   const data = [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sydney No. 1 Lake Park',
  //     },
  //     {
  //       key: '4',
  //       name: 'Jim Red',
  //       age: 32,
  //       address: 'London No. 2 Lake Park',
  //     },
  //   ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories");
      if (response.ok) {
        const data = await response.json();
        setDataList(data);
      } else {
        console.log("Categoriler getirilirken sorun oluştu...");
      }
    } catch (error) {
      console.log("Sunucu hatası", error);
    }
  };
  const deleteCategories = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/categories/${categoryId}`,{
        method : "DELETE",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify({_id : categoryId})
      });
      if(response.ok){
        message.success("Kategori başarıyla silindi.");
        navigate("/admin/categories")
      }else{
        message.error("Kategori silme işlemi başarısız.");
      }
    } catch (error) {
      console.log("Sunucu hatası", error);
    }
  }
  useEffect(() => {
    getCategories();
  }, [deleteCategories]);

  return (
    <>
      <h2>Category List</h2>
      <br /><hr /><br />
      <Table columns={columns} dataSource={dataList} onChange={onChange} />
    </>
  );
}

export default CategoryList;
