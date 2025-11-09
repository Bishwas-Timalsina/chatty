import { Clock, Heart, Shield, Users, Video } from "lucide-react";

export const Intro = {
  intro: (
    <>
      Connect instantly with friends, teams, and communities — all in one place.
      <br /> Experience fast, secure, and real-time messaging with a sleek,
      modern interface designed for effortless communication.
    </>
  ),
};
export const features = [
  {
    icon: <Video className="text-accent w-6 h-6" />,
    bg: "bg-orange-100",
    title: "Video messaging",
    desc: "Send quick video messages to express yourself better. Communicate visually with clarity and emotion in every conversation.",
  },
  {
    icon: <Clock className="text-green-500 w-6 h-6" />,
    bg: "bg-green-100",
    title: "Save your time",
    desc: "Instantly connect and share without delays. Enjoy real-time sync and fast performance designed to keep your workflow smooth.",
  },
  {
    icon: <Shield className="text-yellow-500 w-6 h-6" />,
    bg: "bg-yellow-100",
    title: "Keep safe & private",
    desc: "Your conversations stay private with end-to-end encryption and secure data protection — only you control your information.",
  },
];

export const About_US = {
  companyName: "Chatty",
  tagline: "We build meaningful conversations.",
  description:
    "Chatty connects you with the people who matter — instantly, securely, and with delightful design. Our focus is speed, privacy, and simplicity so you can spend less time managing apps and more time talking to friends and teammates.",
  ctaText: "Join Us",
  cards: [
    {
      title: "Our promise",
      subtitle: "Privacy first",
      description:
        "End-to-end encryption, no surprise tracking, and data that stays yours.",
      icon: <Heart className="w-6 h-6 text-accent" />,
      bg: "bg-white",
    },
    {
      title: "Trusted by",
      subtitle: "Millions of users",
      description: "With 99.99% uptime, Chatty is reliable and always ready.",
      icon: <Users className="w-6 h-6 text-accent" />,
      bg: "bg-white",
    },
  ],
};
