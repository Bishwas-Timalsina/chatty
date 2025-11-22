import React from "react";
import Text from "../../../components/Atomic/Text";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-center py-2">
        <div className="component-padding-x flex justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Text className="text-2xl font-bold text-accent mb-2">Chatty</Text>
            <Text className="text-gray-500 text-sm">
              © Copyright 2025, All Rights Reserved
            </Text>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            <Link to="/privacy" className="hover:text-accent mx-3">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent mx-3">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <Text
              content={"Developed By Bishwas Timalsina"}
              className="text-secondary/40 underline cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
