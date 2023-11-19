import { Button, Table } from "@snsw/react-component-library";
import Styled, { css } from "styled-components";

export const BooksTable = Styled(Table)`
  tr>td: {
    width: 20%;
  }
  tr>td: nth-child(1) {
    width: 25%;
  }
  tr>td: nth-child(5) {
    width: 5%;
  }
`;

export const LibraryButton = Styled(Button)`
  min-width: 1rem;
  ${(props) =>
    props.bm &&
    css`
      margin-bottom: 1.5rem;
    `}
`;
