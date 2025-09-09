import logo_subway_splash from '@/shared/assets/splash-logo.webp';

const SplashScreen = () => {
  return (
    <div className="fixed top-0 w-[440px] z-10 flex h-full flex-col items-center bg-green-dark p-2">
      <div className="flex-1 items-center flex flex-col justify-center">
        <img src={logo_subway_splash} alt="스플래쉬 로고" className="w-[calc(50%)] mb-[80px]" />
        <footer className="text-2xs text-white">
          개인 포트폴리오로 작성된 앱웹입니다. All rights are reserved by Subway LLC.©
        </footer>
      </div>
    </div>
  );
};

export default SplashScreen;
