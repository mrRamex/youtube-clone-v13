import { MdManageHistory } from 'react-icons/md'
import { BiSolidVideos, BiTimeFive, BiLike } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

const containerHeader = [
    {
        id: 1,
        name: "Your profile",
        icon: <CgProfile size={22}/>
    },
    {
        id: 2,
        name: "Your History",
        icon: <MdManageHistory size={22}/>
    },
    {
        id: 3,
        name: "Your Videos",
        icon: <BiSolidVideos size={22}/>
    },
    {
        id: 4,
        name: "Watch Later",
        icon: <BiTimeFive size={22}/>
    },
    {
        id: 5,
        name: "Liked Videos",
        icon: <BiLike size={22}/>
    }
]

export { containerHeader }