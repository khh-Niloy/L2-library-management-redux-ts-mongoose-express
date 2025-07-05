import { useCreateBookMutation } from "@/redux/api/baseApi";
import FormSubmit from "@/components/FormSubmit";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
  const [createBook] = useCreateBookMutation();
  const navigate = useNavigate();

  interface ICreateBook {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: string;
    available: boolean;
  }

  const onSubmit = async (data: ICreateBook) => {
    try {
      const newBookData = {
        ...data,
        available: true,
        copies: parseInt(data?.copies as string),
      };
      await createBook(newBookData);
      toast.success("new book added!");
      navigate("/all-books");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-xl bg-white/60 backdrop-blur-2xl border border-gray-200 rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            📚 Add a New Book
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Fill in the form below to add a new book to your library.
          </p>
        </div>

        <FormSubmit onSubmit={onSubmit} />
      </div>
    </div>
  );
}
