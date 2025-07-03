import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import React from "react";

export default function BorrowSummary() {
  const { data } = useGetBorrowSummaryQuery(undefined);
  return (
    <div>
      <h1>BorrowSummary</h1>

      {JSON.stringify(data?.data)}
    </div>
  );
}
