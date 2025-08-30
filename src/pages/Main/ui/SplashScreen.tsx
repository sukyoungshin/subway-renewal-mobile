import logo_subway_splash from '@/shared/assets/splash-logo.webp';

const SplashScreen = () => {
  return (
    <div className="flex h-full flex-col items-center bg-green-dark p-2">
      <div className="inline-flex flex-1 items-center justify-center">
        <img src={logo_subway_splash} alt="스플래쉬 로고" className="w-[calc(50%)]" />
        <footer className="text-2xs text-white">
          개인 포트폴리오로 작성된 앱웹입니다. All rights are reserved by Subway LLC.©
        </footer>
      </div>
    </div>
  );
};

export default SplashScreen;
