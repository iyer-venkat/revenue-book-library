import { BrowserRouter } from "react-router-dom";
import * as ReactQuery from "react-query";
import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import BooksList from "../books";

const queryClient = new ReactQuery.QueryClient();

describe("Book List", () => {
  test("should render list of books", () => {
    vi.spyOn(ReactQuery, "useQuery").mockImplementation(
      vi.fn().mockReturnValue({
        data: [
          {
            bookId: 1,
            bookName: "Test Book 1",
            authorName: "Test Author 1",
            available: 1,
          },
        ],
        isLoading: false,
      })
    );

    render(
      <ReactQuery.QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <BooksList />
        </BrowserRouter>
      </ReactQuery.QueryClientProvider>
    );

    expect(screen.getByText("Test Book 1")).toBeDefined();
  });
});
