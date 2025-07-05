import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import React from "react";
import {
  useBorrowBookMutation,
  useGetSingleBooksQuery,
} from "@/redux/api/baseApi";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function BorrowBook() {
  interface IBorrowBook {
    dueDate: string;
    quantity: string;
  }
  const form = useForm<IBorrowBook>();
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const [borrowBook, { isLoading, isSuccess, isError }] =
    useBorrowBookMutation();

  const { data: singleData } = useGetSingleBooksQuery(id);

  const navigate = useNavigate();

  const onSubmit = async (formData: IBorrowBook) => {
    try {
      if (!date) {
        alert("Please select a due date");
        return;
      }

      if (parseInt(formData.quantity) > singleData?.data?.copies) {
        toast.error("Quantity exceed available copies.");
        return;
      }

      const borrowBookData = {
        book: id,
        dueDate: date,
        quantity: parseInt(formData.quantity),
      };

      await borrowBook(borrowBookData);
      toast.success("successfully borrowed!");
      navigate("/borrow-summary");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-gray-300 rounded-3xl shadow-xl p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📅 Borrow Book
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            noValidate
          >
            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              rules={{ required: "Quantity is required" }}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter quantity"
                      type="number"
                      min={1}
                      {...field}
                      className={fieldState.invalid ? "border-red-500" : ""}
                    />
                  </FormControl>
                  {fieldState.error && (
                    <p className="text-xs text-red-600 mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Due Date */}
            <FormField
              control={form.control}
              name="dueDate"
              render={() => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="w-full justify-between font-normal"
                        >
                          {date ? date.toLocaleDateString() : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          onSelect={(selectedDate) => {
                            setDate(selectedDate);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>

            {/* Success / Error Messages */}
            {isSuccess && (
              <p className="text-green-600 font-medium text-center mt-4">
                ✅ Book borrowed successfully!
              </p>
            )}
            {isError && (
              <p className="text-red-600 font-medium text-center mt-4">
                ❌ Failed to borrow book. Try again.
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
