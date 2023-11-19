import { useIsFetching, useIsMutating } from 'react-query';
import { ComponentLoader } from '@snsw/react-component-library';

const Loader = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  document.body.style.overflow = isFetching || isMutating ? 'hidden' : 'auto';

  return !isFetching && !isMutating ? null : (
    <div aria-busy="true" aria-live="polite" aria-label="Loading">
      <ComponentLoader active={true} fullPage />
    </div>
  );
};

export default Loader;
