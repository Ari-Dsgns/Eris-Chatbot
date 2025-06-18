export const LogoErisRotating = () => {
  return (
    <div className="relative w-16 h-8 pr-1 ">
      <div className="absolute inset-0 animate-spinSlow">
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute top-[12.5%] right-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-pink-500 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute bottom-[12.5%] right-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
        <div className="absolute bottom-[12.5%] left-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-pink-500 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute top-[12.5%] left-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-spinReverseSlow">
        <div className="relative w-2 h-2 bg-pink-700 rounded-full ">
          <div className="absolute -top-1 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};
