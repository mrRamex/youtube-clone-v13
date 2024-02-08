import { Link } from "react-router-dom"
import { AiFillHome} from 'react-icons/ai'
import { PiFilmReel } from 'react-icons/pi'

const container1 = [
    {
        id: 6,
        name: <Link to="/" className="youtube-home">Home</Link>,
        icon: <AiFillHome size={22}/>,
    },
    {
        id: 7,
        name: "Shorts",
        icon: <PiFilmReel size={22}/>,
    },
]

export { container1 }