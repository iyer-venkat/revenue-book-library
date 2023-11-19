import Styled from 'styled-components';
import { Notification } from '@snsw/react-component-library';
import { spacing } from './spacing';

export const NotificationBanner = Styled(Notification)`
  ul {
    margin-top: ${spacing.sm};
    padding-left: ${spacing.md};
  }
`;
