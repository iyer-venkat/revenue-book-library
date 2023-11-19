import Styled from 'styled-components';
import { utils } from '@snsw/react-component-library';
import { fontWeight } from './fonts';

const { getBreakpoint } = utils;

export const ShowOnMobile = Styled.div`
  display: block !important;
  ${getBreakpoint.md`
    display: none !important;
  `}
`;

export const HideOnMobile = Styled.div`
  display: none !important;
  ${getBreakpoint.md`
    display: block !important;
  `}
`;

export const WeightBold = Styled.span`
  font-weight: ${fontWeight.bold};
`;

export const WeightMedium = Styled.span`
  font-weight: ${fontWeight.medium};
`;

export const WeightBook = Styled.span`
  font-weight: ${fontWeight.book};
`;
