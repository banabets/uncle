import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const heroVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const floatTransition = {
  repeat: Infinity,
  repeatType: "reverse",
  duration: 2.4,
  ease: "easeInOut"
};

const smokeVariants = {
  initial: { opacity: 0.4, y: 20, scale: 0.8 },
  animate: { opacity: 0, y: -40, scale: 1.2 }
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText("xxxxxxxxxxxxxxxxxxxxxxxxxxxpump");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = "xxxxxxxxxxxxxxxxxxxxxxxxxxxpump";
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = "xxxxxxxxxxxxxxxxxxxxxxxxxxxpump";
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen gradient-bg relative">
      {/* Fixed image in corner */}
      <div className="fixed bottom-4 right-4 w-40 h-40 md:w-56 md:h-56 opacity-80 z-50">
        <Image src="/1313.png" alt="1313" width={224} height={224} className="w-full h-full object-contain" />
      </div>
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-gradient-to-r from-pink/20 via-cream/80 to-turquoise/20 backdrop-blur-md border-b-4 border-pink/40 shadow-lg">
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 md:py-6 px-4">
          <div className="flex items-center gap-2">
            <span className="font-black tracking-tight text-5xl md:text-6xl lg:text-7xl cartoon-title text-white">UNCLE</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-base md:text-lg font-black cartoon-text">
            <a href="#about" className="px-4 py-2 rounded-xl text-white hover:text-pink hover:bg-white/10 transition-all">About</a>
            <a href="#tokenomics" className="px-4 py-2 rounded-xl text-white hover:text-pink hover:bg-white/10 transition-all">Tokenomics</a>
            <a href="#community" className="px-4 py-2 rounded-xl text-white hover:text-pink hover:bg-white/10 transition-all">Community</a>
          </div>
          <a 
            href="https://pump.fun/coin/F2MdXnUY7q4Vb8jvc94K2pERDfnE4Ft61T4Gyccxpump" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-turquoise text-white text-base font-black cartoon-text border-2 border-turquoise/50 shadow-lg shadow-turquoise/40 hover:bg-pink hover:border-pink/50 transition-all"
          >
            BUY ON PUMP.FUN
          </a>
        </nav>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-4 pb-24 pt-16 md:pt-24 space-y-24">
        <section className="space-y-12 md:space-y-16">
          {/* Top row: Badge, Title and Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-4">
              <motion.h1
                variants={heroVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6 }}
                className="text-7xl sm:text-8xl md:text-[110px] font-black leading-tight cartoon-title text-center text-white"
              >
                Solana's Chillest <span className="text-pink md:text-[120px]">Unicorn</span>
              </motion.h1>
              <motion.a
                href="https://pump.fun/coin/F2MdXnUY7q4Vb8jvc94K2pERDfnE4Ft61T4Gyccxpump"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="px-8 py-4 rounded-2xl bg-turquoise text-white font-black text-lg md:text-xl cartoon-text border-4 border-turquoise/50 shadow-xl shadow-turquoise/40 hover:bg-pink hover:border-pink/50 transition-all mt-4 mx-auto inline-block"
              >
                BUY ON PUMP.FUN
              </motion.a>
            </div>
            
            {/* Animated Uncle */}
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] cartoon-tv mt-6 md:mt-0"
                animate={{ y: [-6, 6, -6] }}
                transition={floatTransition}
              >
                {/* Uncle image */}
                <Image src="/unicz.png" alt="Uncle" width={448} height={448} className="w-full h-full object-cover relative z-0" />

                {/* Smoke bubbles */}
                <motion.div
                  className="absolute right-6 bottom-10 w-3 h-3 rounded-full bg-white/80 smoke-dot z-10"
                  variants={smokeVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.2 }}
                />
                <motion.div
                  className="absolute right-4 bottom-16 w-2.5 h-2.5 rounded-full bg-white/70 smoke-dot z-10"
                  variants={smokeVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1.8, delay: 0.4, repeat: Infinity, repeatDelay: 0.3 }}
                />
                <motion.div
                  className="absolute right-8 bottom-6 w-2 h-2 rounded-full bg-white/60 smoke-dot z-10"
                  variants={smokeVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 1.4, delay: 0.7, repeat: Infinity, repeatDelay: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom row: Description and buttons */}
          <motion.div
            variants={heroVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-5 mt-16 md:mt-20"
          >
            {/* CA Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-2 md:gap-4 px-3 py-2.5 md:px-6 md:py-5 rounded-xl md:rounded-2xl bg-white/10 border-2 border-pink/40 mx-auto mt-8 md:mt-12 max-w-[90%] md:max-w-none"
            >
              <span className="font-semibold text-sm md:text-xl lg:text-2xl text-white break-all">CA: F2MdXnUY7q4Vb8jvc94K2pERDfnE4Ft61T4Gyccxpump</span>
              <button
                onClick={handleCopy}
                className="p-1.5 md:p-2.5 rounded-lg md:rounded-xl bg-turquoise/90 text-white font-black cartoon-text border-2 border-turquoise/60 hover:bg-pink hover:border-pink/60 transition-all shadow-lg flex-shrink-0"
                title={copied ? "Copied!" : "Copy to clipboard"}
              >
                {copied ? (
                  <span className="text-lg">✓</span>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-black leading-tight cartoon-title text-center text-white whitespace-nowrap">
              Who is <span className="text-pink md:text-6xl lg:text-7xl xl:text-[120px]">Uncle</span>
            </h2>
            <p className="text-dark/80 text-2xl sm:text-3xl md:text-4xl mt-12 md:mt-16">
              Uncle is the type of unicorn that shows up to a bull run
              in a bathrobe, heart pajama pants and a chain that says UNCLE.
              He smokes, he chills and he somehow always appears right before
              a green candle.
            </p>
            <p className="text-dark/70 text-2xl sm:text-3xl md:text-4xl">
              There is no roadshow, no serious pitch deck and no promise
              except one truth: this coin is here to have fun
              on Solana with a community that does not take itself too seriously.
            </p>
          </div>
        </section>

        {/* HOW TO BUY */}
        <section className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-black leading-tight cartoon-title text-center text-white whitespace-nowrap">
            How to <span className="text-pink md:text-6xl lg:text-7xl xl:text-[120px]">Buy</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="cartoon-tv p-4 md:p-5 text-center flex flex-col items-center justify-center" style={{ backgroundColor: '#F5EDD5' }}>
              <div className="w-full max-w-[220px] h-44 md:h-56 mb-4 flex items-center justify-center">
                <Image src="/1.png" alt="Step 1" width={220} height={220} className="w-full h-full object-contain" />
              </div>
              <p className="text-base md:text-lg text-dark/80 font-semibold whitespace-nowrap">Download Phantom / Solflare</p>
            </div>
            <div className="cartoon-tv p-4 md:p-5 text-center flex flex-col items-center justify-center" style={{ backgroundColor: '#F5EDD5' }}>
              <div className="w-full max-w-[220px] h-44 md:h-56 mb-4 flex items-center justify-center">
                <Image src="/2.png" alt="Step 2" width={220} height={220} className="w-full h-full object-contain" />
              </div>
              <p className="text-base md:text-lg text-dark/80 font-semibold">Go to Pump.fun</p>
            </div>
            <div className="cartoon-tv p-4 md:p-5 text-center flex flex-col items-center justify-center" style={{ backgroundColor: '#F5EDD5' }}>
              <div className="w-full max-w-[220px] h-44 md:h-56 mb-4 flex items-center justify-center">
                <Image src="/3.png" alt="Step 3" width={220} height={220} className="w-full h-full object-contain" />
              </div>
              <p className="text-base md:text-lg text-dark/80 font-semibold">Buy $UNCLE</p>
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="text-center mt-16 md:mt-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[110px] font-black leading-tight cartoon-title text-center text-white whitespace-nowrap">
            Join the <span className="text-pink md:text-6xl lg:text-7xl xl:text-[120px]">herd</span>
          </h2>
          <p className="text-dark/70 text-2xl sm:text-3xl md:text-4xl max-w-[90%] mx-auto mt-12 md:mt-16 mb-12 md:mb-16">
            If you like pastel unicorns, Solana, unhinged memes and
            community driven chaos, you are already one of us.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12 md:mt-16">
            <a
              href="#"
              className="px-8 py-4 rounded-2xl bg-pink text-white font-black text-lg md:text-xl cartoon-text border-4 border-pink/50 shadow-xl shadow-pink/40 hover:bg-turquoise hover:border-turquoise/50 transition-all"
            >
              Twitter
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-2xl bg-turquoise text-white font-black text-lg md:text-xl cartoon-text border-4 border-turquoise/50 shadow-xl shadow-turquoise/40 hover:bg-pink hover:border-pink/50 transition-all"
            >
              Dexscreener
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/40 py-6 text-center text-xs text-dark/70">
        UNCLE COIN is a meme. Nothing here is financial advice. Only heart pants.
      </footer>
    </div>
  );
}
