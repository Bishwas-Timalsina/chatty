 

import { Link } from "react-router-dom";
import Text from "../Atomic/Text";

const Footer = () => {
  return (
    <footer className="bg-black text-center py-16">
      <div className="max-w-6xl mx-auto mb-10 flex justify-center items-center gap-4 flex-col">
        <Text
          content={<>Stay connected with the people who matter most.</>}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-secondary"
        />
        <Text
          content={<> Speed, Privacy and Ease matters</>}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-secondary leading-snug"
        />

        <Link
          to={``}
          className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition"
        >
          Start Chatting Now
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 border-t pt-10">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Text className="text-2xl font-bold text-accent mb-2">Chatty</Text>
          <Text className="text-gray-500 text-sm">
            © Copyright 2025, All Rights Reserved
          </Text>
        </div>

        <div className="flex space-x-8 text-sm text-secondary">
          <Link to="/about" className="hover:text-accent transition">
            About
          </Link>
          <Link to="/features" className="hover:text-accent transition">
            Features
          </Link>
          <Link to="/works" className="hover:text-accent transition">
            Works
          </Link>
          <Link to="/support" className="hover:text-accent transition">
            Support
          </Link>
        </div>

        <div className="flex space-x-4 mt-6 md:mt-0">
          <Text
            content={"Developed By Bishwas Timalsina"}
            className="text-secondary/40 underline cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-8 text-gray-500 text-sm">
        <Link to="/privacy" className="hover:text-accent mx-3">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-accent mx-3">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
