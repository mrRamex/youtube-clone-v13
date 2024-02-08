import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuBadgeDollarSign } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegMoon } from "react-icons/fa";
import { ImClearFormatting } from "react-icons/im";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";
import { TiDeviceLaptop } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { LuHelpCircle } from "react-icons/lu";
import { MdNotificationImportant } from "react-icons/md";

const items1 = [
    {
        id: 1,
        icon: <FaGoogle/>,
        text: 'Google Account'
    },
    {
        id: 3,
        icon: <MdOutlineSwitchAccount/>,
        text: 'Switch Account'
    },
    {
        id: 4,
        icon: <GoSignOut/>,
        text: 'Sign out'
    },
]

const items2 = [
    {
        id: 5,
        icon: <GoDeviceCameraVideo/>,
        text: 'Youtube Studio'
    },
    {
        id: 6,
        icon: <LuBadgeDollarSign/>,
        text: 'Purchases and Membership'
    },
    {
        id: 7,
        icon: <CgProfile/>,
        text: 'Your data in Youtube'
    },
]


const items3 = [
    {
        id: 8,
        icon: <FaRegMoon/>,
        text: 'Appearance: White'
    },
    {
        id: 9,
        icon: <ImClearFormatting/>,
        text: 'Language: English'
    },
    {
        id: 10,
        icon: <HiOutlineShieldExclamation/>,
        text: 'Restricted Mode: Off'
    },
    {
        id: 11,
        icon: <CiGlobe/>,
        text: 'Location: USA'
    },
    {
        id: 12,
        icon: <TiDeviceLaptop/>,
        text: 'Keyboard shortcuts'
    },
]

const items4 = [
    {
        id: 13,
        icon: <CiSettings/>,
        text: 'Settings'
    },
]

const items5 = [
    {
        id: 14,
        icon: <LuHelpCircle/>,
        text: 'Help'
    },
    {
        id: 15,
        icon: <MdNotificationImportant/>,
        text: ' Send feedback'
    },
]


export { items1, items2, items3, items4, items5 }