import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function FormSubmit({ onSubmit, updateBookInfo, update }: any) {
  const genres = [
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ];

  const form = useForm();

  const { setValue, register } = form;

  useEffect(() => {
    if (update) {
      setValue("title", updateBookInfo?.title);
      setValue("author", updateBookInfo?.author);
      setValue("genre", updateBookInfo?.genre);
      setValue("isbn", updateBookInfo?.isbn);
      setValue("description", updateBookInfo?.description);
      setValue("copies", updateBookInfo?.copies);
    }
  }, [updateBookInfo, setValue]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="The Rebel" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Author */}
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Author</FormLabel>
              <FormControl>
                <Input placeholder="Kazi Nazrul Islam" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Genre */}
        <FormField
          control={form.control}
          name="genre"
          render={() => (
            <FormItem>
              <FormLabel>Genre</FormLabel>
              <FormControl>
                {/* <Select onValueChange={field.onChange} value={field.value}>
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
                </Select> */}
                <select
                  {...register("genre")}
                  defaultValue={updateBookInfo?.genre || ""}
                  className="select"
                >
                  <option value="" disabled>
                    Select Genre
                  </option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </FormControl>
            </FormItem>
          )}
        />

        {/* ISBN */}
        <FormField
          control={form.control}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input placeholder="9789848815307" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="An English rebellion against oppression and injustice."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Copies */}
        <FormField
          control={form.control}
          name="copies"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Copies</FormLabel>
              <FormControl>
                <Input placeholder="10" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
