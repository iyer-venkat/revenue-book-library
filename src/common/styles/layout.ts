import Styled from "styled-components";
import { spacing } from "./spacing";

export const LayoutStyled = Styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    flex: 1;
  }
`;

export const Main = Styled.main`
  flex: 1;
  margin-bottom: ${spacing.lg};
`;

export const ButtonsBand = Styled.section`
  padding-top: ${spacing.lg};

  button {
    margin-left: 0;
    margin-top: ${spacing.sm};

    &:nth-of-type(n + 1) {
      margin-right: ${spacing.md};
    }
  }
`;

export const Text = Styled.div`
  margin-top: ${spacing.md};
  margin-bottom: ${spacing.md};
`;
