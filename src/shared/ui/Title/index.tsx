import { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return <h2 className="text-sm font-semibold text-black">{children}</h2>;
};

export default Title;
