import type { IBook } from "@/interfaces/getBook.interface";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";

export default function Books() {
  const { data, error, isLoading } = useGetAllBooksQuery(undefined);
  // console.log(data);
  return (
    <div>
      <h1>Books</h1>

      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="grid grid-cols-5 gap-5">
          {data.data.map((e: IBook) => (
            <div className="border border-black">
              <h1>{e.author}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
