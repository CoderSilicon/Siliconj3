"use client";

const Header = () => {


  return (
    <div className="bg-slate-100 border-b border-zinc-950 sticky top-0 z-40 ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center  gap-3 md:gap-4">
            {/* Si3 Logo */}
            <div className="relative">
              <div className="w-10 h-10 md:w-14 md:h-14 bg-amber-800  flex items-center justify-center ">
                <span className="text-white  lexend-400 text-lg md:text-2xl ">
                  Si<sub className="text-xl lexend-300">3</sub>
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-4xl lexend-300 leading-tight">
                Silicoñ3
              </h1>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Header;
