import { useLoadingSpinner } from './hooks';

interface ISpinnerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  src: string;
  alt: string;
}

const imageData =
  "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' xmlns-xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Ccircle cx='50' cy='50' r='0' fill='none' stroke='%23009743' stroke-width='3'%3E%3Canimate attributeName='r' repeatCount='indefinite' dur='1.25s' values='0;40' keyTimes='0;1' keySplines='0 0.2 0.8 1' calcMode='spline' begin='0s'%3E%3C/animate%3E%3Canimate attributeName='opacity' repeatCount='indefinite' dur='1.25s' values='1;0' keyTimes='0;1' keySplines='0.2 0 0.8 1' calcMode='spline' begin='0s'%3E%3C/animate%3E%3C/circle%3E%3Ccircle cx='50' cy='50' r='0' fill='none' stroke='%23ffcb08' stroke-width='3'%3E%3Canimate attributeName='r' repeatCount='indefinite' dur='1.25s' values='0;40' keyTimes='0;1' keySplines='0 0.2 0.8 1' calcMode='spline' begin='-0.625s'%3E%3C/animate%3E%3Canimate attributeName='opacity' repeatCount='indefinite' dur='1.25s' values='1;0' keyTimes='0;1' keySplines='0.2 0 0.8 1' calcMode='spline' begin='-0.625s'%3E%3C/animate%3E%3C/circle%3E%3C/svg%3E";

const Spinner = ({ src, alt, ...props }: ISpinnerProps) => {
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
      {!loaded && <img src={imageData} alt="로딩중..." />}
    </>
  );
};

export default Spinner;
