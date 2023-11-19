import { Routes, Route, Navigate } from "react-router-dom";
import { PATHS } from "./utils/constants";
import BooksList from "./books/";
import AddBookForm from "./books/form";

const Screens = () => (
  <Routes>
    <Route path={PATHS.BOOKS} element={<BooksList />} />
    <Route path={PATHS.ADD_BOOK} element={<AddBookForm />} />
    <Route path="*" element={<Navigate to={PATHS.BOOKS} replace />} />
  </Routes>
);

export default Screens;
