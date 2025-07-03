import { useGetSingleBooksQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery(id);
  return (
    <div>
      <h1>UpdateBook</h1>
      {data?.data._id}
    </div>
  );
}
