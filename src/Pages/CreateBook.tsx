import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateBookMutation } from "@/redux/api/baseApi";

export default function CreateBook() {
  const form = useForm();

  const [createBook, { data, isLoading, isSuccess, isError }] =
    useCreateBookMutation();

  const onSubmit = async (data) => {
    try {
      const newBookData = {
        ...data,
        available: true,
        copies: parseInt(data.copies),
      };
      const res = await createBook(newBookData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const formInputs = [
    { label: "title", placeholder: "The Rebel" },
    { label: "author", placeholder: "Kazi Nazrul Islam" },
    { label: "genre", placeholder: "BIOGRAPHY" },
    { label: "isbn", placeholder: "9789848815307" },
    {
      label: "description",
      placeholder: "An English rebellion against oppression and injustice.",
    },
    { label: "copies", placeholder: "10" },
  ];

  const genres = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  return (
    <div>
      <h1>CreateBook</h1>

      <div className="w-[40%] mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {formInputs.map(({ label, placeholder }) => (
              <FormField
                key={label}
                control={form.control}
                name={label}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{label}</FormLabel>
                    <FormControl>
                      {label === "genre" ? (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Genre" />
                          </SelectTrigger>
                          <SelectContent>
                            {genres.map((genre) => (
                              <SelectItem key={genre} value={genre}>
                                {genre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input placeholder={placeholder} {...field} />
                      )}
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
