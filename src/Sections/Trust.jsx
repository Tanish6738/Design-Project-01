import React from "react";

const Trust = () => {
  return (
    <section 
    id="trust"
    className="theme-bg py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {" "}
          {/* Left Side - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold theme-text-gradient leading-tight">
                Trusted by explorers from every chain
              </h2>
              <p className="text-base sm:text-lg lg:text-xl theme-text-muted leading-relaxed">
                Join thousands of blockchain explorers who trust our platform to
                navigate the multi-chain ecosystem with confidence and security.
              </p>
            </div>{" "}
            {/* Logos Grid */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold theme-text mb-4 sm:mb-6">
                Constellation of Trust
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {" "}
                {/* Ethereum */}
                <div className="theme-glass p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl flex items-center justify-center group hover:theme-glow transition-all duration-300">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                        ETH
                      </span>
                    </div>
                    <p className="theme-text text-xs sm:text-sm font-medium">
                      Ethereum
                    </p>
                  </div>
                </div>
                {/* Solana */}
                <div className="theme-glass p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl flex items-center justify-center group hover:theme-glow transition-all duration-300">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                        SOL
                      </span>
                    </div>
                    <p className="theme-text text-xs sm:text-sm font-medium">
                      Solana
                    </p>
                  </div>
                </div>
                {/* Arbitrum */}
                <div className="theme-glass p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl flex items-center justify-center group hover:theme-glow transition-all duration-300">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                        ARB
                      </span>
                    </div>
                    <p className="theme-text text-xs sm:text-sm font-medium">
                      Arbitrum
                    </p>
                  </div>
                </div>
                {/* Polygon */}
                <div className="theme-glass p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl flex items-center justify-center group hover:theme-glow transition-all duration-300">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                        POL
                      </span>
                    </div>
                    <p className="theme-text text-xs sm:text-sm font-medium">
                      Polygon
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold theme-text-gradient">
                  10K+
                </div>
                <p className="text-xs sm:text-sm theme-text-muted">
                  Active Users
                </p>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold theme-text-gradient">
                  4
                </div>
                <p className="text-xs sm:text-sm theme-text-muted">Networks</p>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold theme-text-gradient">
                  99.9%
                </div>
                <p className="text-xs sm:text-sm theme-text-muted">Uptime</p>
              </div>
            </div>
          </div>{" "}
          {/* Right Side - Image and Video Section */}
          <div className="space-y-6 order-first lg:order-last">
            {/* Main Visual Container */}
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden group w-full h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-screen">
              {/* Portrait Image Placeholder */}
              <div className="flex items-center justify-center h-full">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/Images/2.jpg"
                    alt="Trusted blockchain explorer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
