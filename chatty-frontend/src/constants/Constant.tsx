import { Clock, Shield, Video } from "lucide-react";

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
