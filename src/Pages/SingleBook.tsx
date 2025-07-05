import { useGetSingleBooksQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router-dom";

export default function SingleBook() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBooksQuery(id);
  const book = data?.data;

  if (isLoading || !book) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-xl font-medium text-gray-600">
          Loading Book Info...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          📖 {book.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Author:</p>
            <p>{book.author}</p>
          </div>
          <div>
            <p className="font-semibold">Genre:</p>
            <p>{book.genre || "—"}</p>
          </div>
          <div>
            <p className="font-semibold">ISBN:</p>
            <p>{book.isbn || "—"}</p>
          </div>
          <div>
            <p className="font-semibold">Copies Available:</p>
            <p>{book.copies}</p>
          </div>
          <div>
            <p className="font-semibold">Availability:</p>
            <p className={book.copies > 0 ? "text-green-600" : "text-red-500"}>
              {book.copies > 0 ? "Available" : "Out of Stock"}
            </p>
          </div>
          <div>
            <p className="font-semibold">Book ID:</p>
            <p className="break-all text-xs text-gray-500">{book._id}</p>
          </div>
        </div>

        {book.description && (
          <div className="mt-8">
            <p className="font-semibold text-sm mb-2">Description:</p>
            <p className="text-gray-800 leading-relaxed">{book.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
