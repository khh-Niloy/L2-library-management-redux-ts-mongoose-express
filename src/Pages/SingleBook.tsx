import { useGetSingleBooksQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

export default function SingleBook() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery(id);
  console.log(data?.data);
  return (
    <div>
      <h1>SingleBook</h1>

      <div className="p-10">{data?.data._id}</div>
    </div>
  );
}
