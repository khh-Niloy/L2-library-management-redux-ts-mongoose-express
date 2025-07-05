import { Button } from "@/components/ui/button";
import type { IBook } from "@/interfaces/getBook.interface";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Pencil, Trash2, Eye, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActionButtons({ _id }: Pick<IBook, "_id">) {
  const [deleteBook] = useDeleteBookMutation();

  async function handleDelete(_id: string) {
    try {
      await deleteBook(_id);
      console.log(_id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Link to={`single-book/${_id}`}>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-xl px-3 py-2 flex items-center gap-1 cursor-pointer">
          <Eye size={14} /> See More
        </Button>
      </Link>
      <Link to={`update-book/${_id}`}>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs rounded-xl px-3 py-2 flex items-center gap-1 cursor-pointer">
          <Pencil size={14} /> Edit
        </Button>
      </Link>
      <Button
        onClick={() => handleDelete(_id)}
        className="bg-red-500 hover:bg-red-600 text-white text-xs rounded-xl px-3 py-2 flex items-center gap-1 cursor-pointer"
      >
        <Trash2 size={14} /> Delete
      </Button>
      <Link to={`borrow/${_id}`}>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-xs rounded-xl px-3 py-2 flex items-center gap-1 cursor-pointer">
          <Bookmark size={14} /> Borrow
        </Button>
      </Link>
    </>
  );
}
