import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Heading,
} from "@snsw/react-component-library";
import { BooksTable, LibraryButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../utils/constants";
import {
  deleteBook as deleteBookAPI,
  borrowBook as borrowBookAPI,
} from "../mutations";

const BooksList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: books, isLoading } = useQuery(
    "books",
    async () => {
      try {
        const response = await fetch("http://localhost:4000/api/books");
        if (!response.ok) throw new Error("Failed to fetch books");

        return response.json();
      } catch (error) {
        console.log(error);
      }
    },
    {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  );

  const deleteBookFromLibrary = useMutation({
    mutationFn: deleteBookAPI,
  });

  const borrowBookFromLibrary = useMutation({
    mutationFn: borrowBookAPI,
  });

  const deleteBook = (bookId: string) => {
    deleteBookFromLibrary.mutate(bookId, {
      onSettled: async (data: any, error: any) => {
        if (data && !error) queryClient.invalidateQueries("books");
      },
    });
  };

  const transactBook = (bookId: string, available: number) => {
    borrowBookFromLibrary.mutate(
      { bookId, available },
      {
        onSettled: async (data: any, error: any) => {
          if (data && !error) queryClient.invalidateQueries("books");
        },
      }
    );
  };

  return isLoading ? (
    <h1>Retrieving books...</h1>
  ) : (
    <section>
      <Heading level={1}>Dharma Gunj</Heading>
      <TableContainer
        description="An Elixir of Knowledge of the Universe."
        id="books-table"
      >
        <LibraryButton
          variant="secondary"
          bm
          onClick={() => navigate(PATHS.ADD_BOOK)}
        >
          Add Book
        </LibraryButton>
        <BooksTable>
          <TableHead>
            <TableRow>
              <TableHeader>Book Name</TableHeader>
              <TableHeader>Author Name</TableHeader>
              <TableHeader></TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {books?.map((book: any) => (
              <TableRow key={book.bookId}>
                <TableCell>{book.bookName}</TableCell>
                <TableCell>{book.authorName}</TableCell>
                <TableCell>
                  <LibraryButton
                    variant="secondary"
                    onClick={() => {
                      transactBook(book.bookId.toString(), book.available);
                    }}
                  >
                    {book.available ? "Borrow" : "Return"}
                  </LibraryButton>
                </TableCell>
                <TableCell>
                  {book.available === 1 && (
                    <LibraryButton
                      variant="secondary"
                      onClick={() => {
                        deleteBook(book.bookId.toString());
                      }}
                    >
                      Delete
                    </LibraryButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </BooksTable>
      </TableContainer>
    </section>
  );
};

export default BooksList;
