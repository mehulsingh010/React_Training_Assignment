import axios from "axios";
import { useEffect, useState } from "react";
// import { Table } from "antd";

// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//     key: "id",
//   },
//   {
//     title: "UserID",
//     dataIndex: "userId",
//     id: "userId",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     id: "title",
//   },
//   {
//     title: "Body",
//     dataIndex: "body",
//     id: "body",
//   },
// ];
export default function Assignment2() {
  const [data, setData] = useState<object[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response: any = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response.data);

      setData(response.data);
    } catch (error) {
      console.log("Error Fetchin data", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) return <div>is Loading....</div>;
  return (
    <div>
      {/* <Table dataSource={data} columns={columns} /> */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((info: any) => (
            <tr key={info.id}>
              <td>{info.id}</td>
              <td>{info.userId}</td>
              <td>{info.title}</td>
              <td>{info.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
