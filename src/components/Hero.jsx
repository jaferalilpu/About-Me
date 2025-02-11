import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {}
      <div
        className={`absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
      >
        {}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-3 h-3 rounded-full bg-[#915EFF] sm:w-5 sm:h-5" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
            Hi, I'm <span className="text-[#915EFF]">Shaik Jafer Ali</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 leading-relaxed`}>
            An aspiring Full Stack Developer, <br className="sm:block hidden" />
            DevOps Engineer, Freelancer.
          </p>
        </div>
      </div>

      {}
      <div className="absolute bottom-0 w-full md:bottom-10">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
