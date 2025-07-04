// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useForm } from "react-hook-form";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import FormSubmit from "@/components/FormSubmit";

export default function CreateBook() {
  // const form = useForm();

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

  return (
    <div>
      <h1>CreateBook</h1>

      <div className="w-[40%] mx-auto">
        <FormSubmit onSubmit={onSubmit} />
      </div>
    </div>
  );
}
