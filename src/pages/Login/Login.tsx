import logo_subway_small from '@/shared/assets/small-logo.webp';
import LINK from '@/shared/constants/link';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSubwayLogin } from './hooks/useSubwayLogin';
import FacebookLogin from './ui/FacebookLogin';
import GoogleLogin from './ui/GoogleLogin';
import KakaoLogin from './ui/KakaoLogin';

const Login = () => {
  const { loginFlag, userInfo, handleUserInfo, onSignIn, onSignOut } = useSubwayLogin();

  return (
    <main className="w-full h-full p-4 bg-white inline-flex flex-col gap-4">
      {/* 상단 섹션: 뒤로가기 버튼과 로고 */}
      <section className="flex justify-between items-center h-12">
        <Link to={LINK.ROOT} aria-label="뒤로가기">
          <HiOutlineChevronLeft className="w-6 h-6" />
        </Link>
        <Link to={LINK.ROOT} aria-label="메인 페이지로 이동">
          <img src={logo_subway_small} alt="서브웨이 로고" className="w-32 h-8" />
        </Link>
        <div className="w-6 h-6" /> {/* Spacer */}
      </section>

      {/* 로그인/로그아웃 섹션 */}
      {loginFlag ? (
        <button
          type="button"
          onClick={onSignOut}
          className="w-full h-12 inline-flex items-center justify-center gap-2 text-white text-sm font-bold bg-green rounded-lg"
        >
          로그아웃
        </button>
      ) : (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            id="userid"
            value={userInfo.id}
            onChange={handleUserInfo}
            className="w-full h-12 p-3 text-grey text-sm border border-light-grey rounded-lg placeholder-grey placeholder-text-xs"
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            id="userpassword"
            value={userInfo.id}
            onChange={handleUserInfo}
            className="w-full h-12 p-3 text-grey text-sm border border-light-grey rounded-lg placeholder-grey placeholder-text-xs"
          />
          <button
            type="button"
            onClick={onSignIn}
            className="w-full h-12 inline-flex items-center justify-center gap-2 text-white text-sm font-bold bg-green rounded-lg"
          >
            로그인
          </button>
        </div>
      )}

      {/* 소셜 로그인 및 회원가입 섹션 */}
      {!loginFlag && (
        <div className="flex flex-col gap-4 mt-6">
          <p className="flex flex-1 items-center text-xs font-normal text-grey c-divider">
            아직 회원이 아니시라면,
          </p>
          <Link
            to={LINK.SIGNUP}
            className="text-sm !important font-bold border-b border-solid border-white"
          >
            회원가입
          </Link>
          <p className="flex flex-1 items-center text-xs font-normal text-grey c-divider">
            간편 SNS 로그인
          </p>
          <div className="flex flex-col gap-2">
            <GoogleLogin />
            <KakaoLogin />
            <FacebookLogin />
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
