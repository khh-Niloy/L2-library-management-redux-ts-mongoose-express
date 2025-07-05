import ActionButtons from "@/components/ActionButtons";
import { Button } from "@/components/ui/button";
import type { IBook } from "@/interfaces/getBook.interface";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { Link } from "react-router-dom";

export default function Books() {
  const { data, isLoading } = useGetAllBooksQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <h1 className="text-xl font-semibold text-gray-600">
          Loading Books...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] py-16 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        📚 Book Library
      </h1>

      <div className="mb-3">
        <Link to={"/create-book"}>
          <Button>+ Add New Book</Button>
        </Link>
      </div>

      <div className="overflow-auto rounded-2xl shadow-xl bg-white/60 backdrop-blur-lg border border-gray-200">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-gray-100/70 sticky top-0 backdrop-blur-md z-10">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Title</th>
              <th className="px-6 py-4 text-left font-semibold">Author</th>
              <th className="px-6 py-4 text-left font-semibold">Genre</th>
              <th className="px-6 py-4 text-left font-semibold">ISBN</th>
              <th className="px-6 py-4 text-left font-semibold">Copies</th>
              <th className="px-6 py-4 text-left font-semibold">
                Availability
              </th>
              <th className="px-6 py-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((book: IBook) => (
              <tr
                key={book._id}
                className="border-b border-gray-200 hover:bg-white/80 transition"
              >
                <td className="px-6 py-4 font-medium text-blue-600 hover:underline">
                  <Link to={`/single-book/${book._id}`}>{book.title}</Link>
                </td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.genre || "—"}</td>
                <td className="px-6 py-4">{book.isbn || "—"}</td>
                <td className="px-6 py-4">{book.copies}</td>
                <td className="px-6 py-4">
                  {book.copies > 0 ? (
                    <span className="text-green-600 font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">
                      Unavailable
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    <ActionButtons _id={book._id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
