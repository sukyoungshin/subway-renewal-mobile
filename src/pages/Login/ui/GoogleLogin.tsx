import { OAuthButtonLayout } from '@/shared/layout';
import { RiGoogleLine } from 'react-icons/ri';

import { useGoogleLoginAndOut } from '../hooks/useGoogleLogin';

const GoogleLogin = () => {
  const { loginFlag, onSignOut } = useGoogleLoginAndOut();

  return (
    <OAuthButtonLayout>
      {!loginFlag.id ? (
        <div
          className="g-signin2 c-google-login-button"
          data-height="48"
          data-onsuccess="onSignIn"
        />
      ) : (
        <button
          type="button"
          onClick={onSignOut}
          className="w-full h-full inline-flex items-center justify-center gap-2 text-white text-sm bg-google rounded-lg hover:text-black focus:text-black active:text-black"
        >
          <RiGoogleLine /> 구글 logout
        </button>
      )}
    </OAuthButtonLayout>
  );
};

export default GoogleLogin;
