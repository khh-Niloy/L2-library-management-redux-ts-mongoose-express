import FormSubmit from "@/components/FormSubmit";
import {
  useGetSingleBooksQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams();
  const { data } = useGetSingleBooksQuery(id);
  const [updateBookInfo, { isSuccess }] = useUpdateBookMutation();

  const onSubmit = async (data) => {
    try {
      const res = await updateBookInfo({ updateBookData: data, id: id });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>UpdateBook</h1>
      {data?.data._id}

      <div className="w-[40%] mx-auto">
        <FormSubmit
          update={true}
          updateBookInfo={data?.data}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
