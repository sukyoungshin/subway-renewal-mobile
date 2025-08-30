import { PropsWithChildren } from 'react';

const OAuthButtonLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-12 text-center">{children}</div>;
};

export default OAuthButtonLayout;
