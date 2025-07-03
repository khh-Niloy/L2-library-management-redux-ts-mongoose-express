import { Button } from "@/components/ui/button";
import type { IBook } from "@/interfaces/getBook.interface";
import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import { Link } from "react-router-dom";

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
            <Link to={`/single-book/${e._id}`}>
              <div className="border border-black">
                <h1>{e.author}</h1>
                <Link to={`/update-book/${e._id}`}>
                  <Button>Edit</Button>
                </Link>
                <Link to={`/borrow/${e._id}`}>
                  <Button>Borrow</Button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
