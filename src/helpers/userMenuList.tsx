import { RiCustomerService2Fill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { IoReceipt } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
export const userMenuList = [
  {
    label: "Dashboard",
    icon: <MdDashboard />,
    path: "/dashboard",
  },
  {
    label: "Service",
    icon: <RiCustomerService2Fill />,
    path: "/service",
  },
  {
    label: "Requests",
    icon: <FaUsersGear />,
    path: "/requests",
  },
  {
    label: "Transaction",
    icon: <IoReceipt />,
    path: "/transaction",
  },
  {
    label: "Settlement",
    icon: <FaHandshakeSimple />,
    path: "/settlement",
  },
  {
    label: "Team",
    icon: <HiUsers />,
    path: "/team",
  },

  //   {
  //     label: "Sundry Posting",
  //     icon: <BsPostcard />,
  //     path: "/sundry-posting",
  //     dropdown: true,
  //     subLinks: [
  //       {
  //         title: "Sundry Posting Initiation",
  //         icon: <BsDot />,
  //         path: "/sundry-posting/sundry-posting-initiation",
  //         disabled: false,
  //       },
  //       {
  //         title: "Sundry Posting Liquidation",
  //         icon: <BsDot />,
  //         path: "/sundry-posting/sundry-posting-liquidition",
  //         disabled: false,
  //       },
  //     ],
  //   },
];
