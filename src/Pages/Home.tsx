import ActionButtons from "@/components/ActionButtons";
import type { IBook } from "@/interfaces/getBook.interface";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { BookOpen } from "lucide-react";

export default function Home() {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  console.log(data);

  const cards = data?.data?.map(
    (
      {
        _id,
        title,
        author,
        description,
        copies,
      }: Pick<IBook, "_id" | "title" | "author" | "description" | "copies">,
      index: number
    ) => (
      <div
        key={index}
        className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-xl 
            transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-blue-600" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        </div>
        <h3 className="text-gray-500 text-sm mb-3">by {author}</h3>
        <p className="text-gray-700 text-sm mb-5 line-clamp-2">{description}</p>
        <p
          className={`text-sm font-medium ${
            copies == 0 ? "text-red-600" : "text-green-600"
          }  mb-5`}
        >
          📦 {copies} Copies Available
        </p>
        <div className="flex flex-wrap gap-2">
          <ActionButtons _id={_id} />
        </div>
      </div>
    )
  );

  return (
    <div className="py-16 px-6 bg-gradient-to-tr from-[#e0e7ff] via-[#fdfbfb] to-[#d1fae5] min-h-screen">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-sm">
          📖 Explore All Books
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover, read, and manage your favorite books in one place.
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-start justify-center w-full h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto">
          {cards}
        </div>
      )}
    </div>
  );
}
