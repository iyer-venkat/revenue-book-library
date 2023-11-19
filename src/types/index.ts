import { string, z } from "zod";

export const book = z.object({
  bookName: string({
    required_error: "Please enter a valid Book Name",
  }).min(3, { message: "Book Name must be at least 3 characters" }),
  authorName: string({
    required_error: "Please enter a valid Author Name",
  }).min(3, { message: "Author Name must be at least 3 characters" }),
});

export type Book = z.infer<typeof book>;
