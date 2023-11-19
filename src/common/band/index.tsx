import { ReactNode } from 'react';
import { Container, ContentSection } from './styles';

interface Props {
  children: ReactNode;
  className?: string;
  testID?: string;
}

const Band = ({ children, className, testID }: Props) => (
  <Container className={className} data-testid={testID}>
    <ContentSection data-testid="band-contentSection">
      {children}
    </ContentSection>
  </Container>
);

Band.defaultProps = {
  testID: '',
  className: '',
};

export default Band;
