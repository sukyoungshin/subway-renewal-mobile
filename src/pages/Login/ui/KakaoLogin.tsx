import { OAuthButtonLayout } from '@/shared/layout';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useKakaoLoginAndOut } from '../hooks/useKakaoLogin';

const KakaoLogin = () => {
  const { loginFlag, onSignIn, onSignOut } = useKakaoLoginAndOut();

  return (
    <OAuthButtonLayout>
      {!loginFlag ? (
        <button
          type="button"
          onClick={onSignIn}
          className="w-full h-full inline-flex items-center justify-center gap-2 text-sm text-black bg-kakao rounded-lg"
        >
          <RiKakaoTalkFill /> 카카오로 시작
        </button>
      ) : (
        <button
          type="button"
          onClick={onSignOut}
          className="w-full h-full inline-flex items-center justify-center gap-2 text-sm text-black bg-kakao rounded-lg"
        >
          로그아웃
        </button>
      )}
    </OAuthButtonLayout>
  );
};

export default KakaoLogin;
