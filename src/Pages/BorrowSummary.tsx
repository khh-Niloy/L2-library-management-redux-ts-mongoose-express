import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <h1 className="text-xl font-medium text-gray-600">
          Loading summary...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          📊 Borrow Summary
        </h1>

        <div className="overflow-auto rounded-lg">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100/80 sticky top-0 backdrop-blur-md z-10">
              <tr>
                <th className="px-6 py-4 font-semibold">#</th>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">ISBN</th>
                <th className="px-6 py-4 font-semibold">Total Borrowed</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((entry, index: number) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-white/80 transition"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{entry.book.title}</td>
                  <td className="px-6 py-4">{entry.book.isbn}</td>
                  <td className="px-6 py-4 font-semibold text-blue-600">
                    {entry.totalQuantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
