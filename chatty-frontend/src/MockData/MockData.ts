export interface IUserItem {
  id: number;
  name: string;
  message: string;
  time: string;
  avatar: string;
  typing?: boolean;
}
export const mockUsers: IUserItem[] = [
  {
    id: 1,
    name: "Lauren Hamilton",
    message: "",
    time: "12:34",
    avatar: "/avatars/a1.png",
    typing: true,
  },
  {
    id: 2,
    name: "Layla Shaw",
    message: "It’s all good, thanks!",
    time: "12:33",
    avatar: "/avatars/a2.png",
  },
  {
    id: 3,
    name: "Alex Khan",
    message: "I will make it there in time.",
    time: "10:14",
    avatar: "/avatars/a3.png",
  },
  {
    id: 4,
    name: "Joyce Stone",
    message: "Would love to watch it.",
    time: "10:06",
    avatar: "/avatars/a4.png",
  },
  {
    id: 5,
    name: "Aidan Phillips",
    message: "This looks really good...",
    time: "8:00",
    avatar: "/avatars/a5.png",
  },
];
