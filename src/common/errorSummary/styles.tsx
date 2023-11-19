import Styled from 'styled-components';
import { Notification, Button } from '@snsw/react-component-library';
import { colours, fontSizes, spacing } from '../styles';
import { pxToRem } from '../../utils/pxToRem';

export const ErrorList = Styled.ul`
  margin: ${spacing.sm} ${spacing.none} ${spacing.none} ${pxToRem(-16)};

  a {
    color: ${colours.text.body};
  }
`;

export const StyledButton = Styled(Button)`
  color: ${colours.text.body};
  font-weight: normal;
  padding: ${spacing.sm} 0 0 0;

  &:hover:not([disabled]) {
    color: ${colours.text.body};
    background-color: transparent;
  }
`;

export const ErrorListButton = Styled(Button)`
  background-color: transparent;
  color: ${colours.text.body};
  font-weight: normal;
  text-decoration: underline;

  &:hover:not([disabled]) {
    background-color: transparent;
    color: ${colours.text.body};
    font-weight: normal;
    text-decoration: underline;
  }
`;

export const SummaryText = Styled.span``;

// interface NotificationContainerProps {
//   marginTop?: SpacingSize;
//   marginBottom?: SpacingSize;
// }

export const NotificationContainer = Styled(Notification)`
  &&& {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      font-size: ${fontSizes.base};
    }
  }
`;
