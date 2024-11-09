
import { motion } from "framer-motion";
import { EarthCanvas } from "../components/canvas";
import { slideIn } from "../utils/motion";

const Home = () => {
  return (
    <section className="w-full h-[50vh] relative"> {/* Set to full screen */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 h-full mt-0"
      >
        <div className="relative w-full h-full"> {/* Adjust to full width and height */}
          <div 
            style={{
              width: "100%",
              height: "100%", 
              position: "absolute",
              top: 30,
              left: 0
            }}
          >
            {/* <EarthCanvas /> */}
          </div>
        </div>
      </motion.div>

      {/* <div className="absolute top-[calc(28px+10vh)] left-0 right-0 z-10 flex items-center justify-center w-full">
        <h1 className="sm:text-3xl md:text-3xl lg:text-4xl text-center neo-brutalism-blue py-2 px-8 text-black mx-5 mt-[-180px]">
          Hi, I'm <span className="font-semibold mx-2 text-black">Emily</span> ٩(•̤̀ᵕ•̤́๑)
          <br />
          Welcome to my website!
        </h1>
      </div> */}
    </section>
  );
};

export default Home;
