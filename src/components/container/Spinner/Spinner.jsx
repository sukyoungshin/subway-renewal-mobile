import { LoadingSpinner } from '@/components';
import { useLoadingSpinner } from './hooks';

const Spinner = ({ src, alt, ...props }) => {
  const { loaded, onLoad } = useLoadingSpinner();

  return (
    <>
      <img
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={onLoad}
        src={src}
        alt={alt}
        {...props}
      />
      {!loaded && <LoadingSpinner />}
    </>
  );
};

export default Spinner;
