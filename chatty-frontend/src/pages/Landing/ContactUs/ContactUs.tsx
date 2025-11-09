import React from "react";
import Text from "../../../components/Atomic/Text";
import ContactForm from "./ContactForm";
import Lottie from "lottie-react";
import contactAnimation from "../../../assets/animation/ContactUs.json";

const ContactUs = () => {
  return (
    <div>
      <section className="w-full bg-primary py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Text
              content="Get in Touch"
              className="text-3xl md:text-4xl font-bold text-secondary"
            />
            <Text
              content="We’d love to hear from you! Whether you have a question, feedback, or just want to say hi — drop us a message below."
              className="text-secondary/80 max-w-md"
            />

            <ContactForm />
          </div>

          <div className="flex justify-center md:justify-end">
            <Lottie
              animationData={contactAnimation}
              loop
              className="w-80 md:w-[420px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
