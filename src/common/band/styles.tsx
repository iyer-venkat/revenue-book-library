import Styled from 'styled-components';
import { media } from '../styles/media';

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;

  ${media.tablet} {
    padding: 0 24px;
  }

  @media screen and (min-width: 1212px) {
    padding: 0;
  }
`;

export const ContentSection = Styled.div`
  max-width: 1164px;
  width: 100%;
`;
