export const addBook = async (book: any) => {
  const response = await fetch("http://localhost:4000/api/book", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const borrowBook = async ({
  bookId,
  available,
}: {
  bookId: string;
  available: number;
}) => {
  const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
    method: "put",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ available }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const deleteBook = async (bookId: string) => {
  const response = await fetch(`http://localhost:4000/api/books/${bookId}`, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
