import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Heading, Row } from "@snsw/react-component-library";
import { Book, book } from "../types";
import { ButtonsBand } from "../common/styles/layout";
import { useNavigate } from "react-router-dom";
import { ErrorSummary } from "../common/errorSummary";
import InputField from "../common/input";
import { PATHS } from "../utils/constants";
import { addBook as addBookAPI } from "../mutations";

const BookForm = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Book>({
    resolver: zodResolver(book),
    mode: "onBlur",
  });

  const addBookToLibrary = useMutation({
    mutationFn: addBookAPI,
  });

  const submitForm = (data: Book) => {
    console.log(data);
    addBookToLibrary.mutate(data, {
      onSettled: async (data: any, error: any) => {
        if (data && !error) {
          navigate(PATHS.BOOKS);
        }
      },
    });
  };

  return (
    <section>
      <Heading level={1}>Add Book</Heading>
      <img
        className="form-logo"
        src="https://www.logolynx.com/images/logolynx/0c/0c7191dc35a536be1326d8c778722949.png"
        alt="Library Logo"
      />
      <ErrorSummary errors={{}} />
      <Form onSubmit={handleSubmit(submitForm)}>
        <Row>
          <Col span={6}>
            <InputField
              inputName="bookName"
              data-testid="bookName"
              label="Book Name"
              error={errors.bookName?.message as string}
              required
              {...register("bookName")}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <InputField
              inputName="authorName"
              data-testid="authorName"
              label="Author Name"
              error={errors.authorName?.message as string}
              required
              {...register("authorName")}
            />
          </Col>
        </Row>

        <ButtonsBand>
          <Button type="submit">Submit</Button>
          <Button
            variant="secondary"
            onClick={() => {
              navigate(PATHS.BOOKS);
            }}
          >
            Cancel
          </Button>
        </ButtonsBand>
      </Form>
    </section>
  );
};

export default BookForm;
