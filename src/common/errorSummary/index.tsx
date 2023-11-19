import { useEffect, useMemo, useRef, useState } from 'react';
import { Row, Col } from '@snsw/react-component-library';
import { hasError, isString } from './helpers';
import { ErrorType, FieldErrorFunc } from './types';
import {
  ErrorList,
  ErrorListButton,
  NotificationContainer,
  StyledButton,
  SummaryText,
} from './styles';
import { scrollFocusOnError } from './utils';
import { SpacingSize } from '../styles';

interface ErrorSummaryProps {
  errors: Record<string, string | any>;
  maxErrorDisplayCount?: number;
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fieldErrorCallback?: FieldErrorFunc;
  notificationMarginTop?: SpacingSize;
  notificationMarginBottom?: SpacingSize;
  id?: string;
}

const ERROR_DISPLAY_COUNT = 10;

export const ErrorSummary = (props: ErrorSummaryProps) => {
  const {
    errors,
    maxErrorDisplayCount = ERROR_DISPLAY_COUNT,
    headingLevel,
    fieldErrorCallback,
    notificationMarginTop,
    notificationMarginBottom,
    id,
  } = props;
  const errorNoticeRef = useRef<HTMLElement>(null);
  const containErrors = useMemo(() => hasError(errors), [errors]);
  const errorCount = Object.entries(errors).filter((p) =>
    isString(p[1]),
  ).length;

  const [count, setCount] = useState<number>(maxErrorDisplayCount);
  const [toggleShowMore, setToggleShowMore] = useState<boolean>(true);

  useEffect(() => {
    if (
      errorCount > 0 &&
      errorNoticeRef.current &&
      errorNoticeRef.current.scrollIntoView
    ) {
      errorNoticeRef.current.focus();
      errorNoticeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [errorCount]);

  const renderButton = () => {
    const handleClick = () => {
      setToggleShowMore((prevToggleShowMore) => !prevToggleShowMore);
      setCount(toggleShowMore ? errorCount : maxErrorDisplayCount);
    };

    const renderLabel = () => {
      if (toggleShowMore) {
        // return getContent('common.button.showMore.label');
        return 'Show more';
      }

      // return getContent('common.button.showLess.label');
      return 'Show less';
    };

    if (errorCount > maxErrorDisplayCount) {
      return (
        <StyledButton onClick={handleClick} variant="link">
          {renderLabel()}
        </StyledButton>
      );
    }

    return null;
  };

  const renderErrorList = () => {
    const errorsOnly: ErrorType[] = [];

    const errorMapper = (key: string): string =>
      fieldErrorCallback ? fieldErrorCallback(key) : errors[key];

    for (const [field, message] of Object.entries(errors)) {
      if (isString(message)) {
        errorsOnly.push({ key: field, value: errorMapper(field) || message });
      }
    }

    return (
      <ErrorList id={id}>
        {errorsOnly.slice(0, count).map((error) => (
          <li key={error.key}>
            <ErrorListButton
              variant="link"
              onClick={() => {
                scrollFocusOnError(error.key);
              }}
            >
              {error.value}
            </ErrorListButton>
          </li>
        ))}
      </ErrorList>
    );
  };

  if (!containErrors) {
    return null;
  }

  return (
    <Row>
      <Col span={12} ref={errorNoticeRef} tabIndex={-1}>
        <NotificationContainer
          variant="error"
          headingLevel={headingLevel}
          title={'It looks like there was a problem'}
          marginTop={notificationMarginTop}
          marginBottom={notificationMarginBottom}
        >
          <SummaryText>
            Please correct the following errors and try again:
          </SummaryText>
          {renderErrorList()}
          {renderButton()}
        </NotificationContainer>
      </Col>
    </Row>
  );
};

ErrorSummary.defaultProps = {
  fieldErrorCallback: () => {},
  headingLevel: 'h4',
  maxErrorDisplayCount: ERROR_DISPLAY_COUNT,
  notificationMarginTop: undefined,
  notificationMarginBottom: undefined,
  id: 'id-error-summary',
};
