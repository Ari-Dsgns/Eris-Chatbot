export const RotatingDotsIcon = () => {
  return (
    <div className="relative w-16 h-8 pr-1 ">
      {/* Círculo externo con 8 puntos girando en sentido horario */}
      <div className="absolute inset-0 animate-spinSlow">
        {/* Punto 0° */}
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
        {/* Punto 45° */}
        <div className="absolute top-[12.5%] right-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
        {/* Punto 90° */}
        <div className="absolute top-1/2 right-0 w-1 h-1 bg-pink-500 rounded-full transform -translate-y-1/2"></div>
        {/* Punto 135° */}
        <div className="absolute bottom-[12.5%] right-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
        {/* Punto 180° */}
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-500 rounded-full transform -translate-x-1/2"></div>
        {/* Punto 225° */}
        <div className="absolute bottom-[12.5%] left-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
        {/* Punto 270° */}
        <div className="absolute top-1/2 left-0 w-1 h-1 bg-pink-500 rounded-full transform -translate-y-1/2"></div>
        {/* Punto 315° */}
        <div className="absolute top-[12.5%] left-[12.5%] w-1 h-1 bg-pink-500 rounded-full"></div>
      </div>

       <div className="absolute inset-0 flex items-center justify-center animate-spinReverseSlow">
        <div className="relative w-2 h-2 bg-pink-700 rounded-full ">
          {/* Punto blanco orbitando el círculo central */}
          <div className="absolute -top-1 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

