import { link } from "fs";
import { FaPeopleRoof, FaUser } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdLogout, MdOutlineEventAvailable, MdSpaceDashboard } from "react-icons/md"


interface LinkType {
  title: string;
  links: {
    name: string;
    icon: any;
    link: string;
  }[];

}

export const links: LinkType[] = [
  {
    title: "Main Pages",
    links: [
      {
        name: "Dashboard",
        icon: <MdSpaceDashboard />,
        link: "/dashboard",
      },
      {
        name: "Communities",
        icon: <FaPeopleRoof />,
        link: "/dashboard/communities",
      },
      {
        name: "Events",
        icon: <MdOutlineEventAvailable />,
        link: "/dashboard/events",
      },
      {
        name: "Users",
        icon: <FaUser />,
        link: "/dashboard/users",
      },
    ],
  },
];


export const GROUPS = [
  {
    name:  "Web3 Research community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp2.jpg",
    type: "Web3",
  },
  {
    name:  "Web3 Research community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp2.jpg",
    type: "Web3",
  },
  {
    name:  "Web3 Research community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp2.jpg",
    type: "Web3",
  },
  {
    name:  "Fashion community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp.png",
    type: "fashion",
  },
  {
    name:  "Fashion community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp.png",
    type: "fashion",
  },
  {
    name:  "Fashion community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp.png",
    type: "fashion",
  },
  {
    name:  "Basketball community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp.png",
    type: "basketball",
  },
  {
    name:  "Basketball community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp.png",
    type: "basketball",
  },
  {
    name:  "Basketball community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp.png",
    type: "basketball",
  },
  {
    name:  "Blockchain community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp2.jpg",
    type: "blockchain",
  },
  {
    name:  "Blockchain community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp2.jpg",
    type: "blockchain",
  },
  {
    name:  "Blockchain community",
    description: "Responsible for driving revenue growth by identifying and pursuing new business opportunities",
    link: "/group1",
    image: "/gp2.jpg",
    type: "blockchain",
  },
];