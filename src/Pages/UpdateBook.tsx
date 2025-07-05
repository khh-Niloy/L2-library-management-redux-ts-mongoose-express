import FormSubmit from "@/components/FormSubmit";
import {
  useGetSingleBooksQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBooksQuery(id);
  const [updateBookInfo, { isSuccess }] = useUpdateBookMutation();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const res = await updateBookInfo({ updateBookData: formData, id });
      // console.log(res);
      toast.success("Successfully updated book info");
      navigate("/all-books");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-xl font-medium text-gray-600">
          Loading book info...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f9] to-[#ecfdf5] py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            ✏️ Update Book Info
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Edit and save changes to this book.
          </p>

          {isSuccess && (
            <div className="mt-4 text-green-600 text-sm font-medium">
              ✅ Book updated successfully!
            </div>
          )}
        </div>

        <FormSubmit
          update={true}
          updateBookInfo={data?.data}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
