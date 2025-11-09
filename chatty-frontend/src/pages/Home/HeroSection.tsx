import Text from "../../components/Atomic/Text";
import { Intro } from "../../constants/Constant";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import ChatImage from "../../assets/animation/Chat.json";

const HeroSection = () => {
  return (
    <section className="w-full bg-primary flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
        <Text
          content={
            <>
              Chatty{" "}
              <span className="text-accent text-[28px]">Messaging Service</span>
            </>
          }
          size="2.5rem" // ≈ text-4xl
          weight="700"
          color="var(--secondary)"
          className="md:text-5xl text-secondary font-bold"
          lineHeight="1.2"
        />

        <Text
          content={Intro.intro}
          size="1rem"
          color="var(--secondary)"
          className="text-secondary leading-relaxed max-w-lg"
          lineHeight="1.6"
        />
        <div className="flex justify-center md:justify-start gap-4">
          <Link
            to={""}
            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors duration-200"
          >
            Join Us
          </Link>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <Lottie animationData={ChatImage} />
      </div>
    </section>
  );
};

export default HeroSection;
