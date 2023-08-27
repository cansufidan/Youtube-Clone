import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi'

//Categories

export const categories = [
    { name: 'New', icon: <AiFillHome />, type: 'home' },
    {
        name: 'Trend',
        icon: <MdLocalFireDepartment />,
        type: 'category',
      },
      {
        name: 'Music',
        icon: <CgMusicNote />,
        type: 'category',
      },
      { name: 'Movies', icon: <FiFilm />, type: 'category' },
      { name: 'Live', icon: <MdLiveTv />, type: 'category' },
      {
        name: 'Game',
        icon: <IoGameControllerSharp />,
        type: 'category',
      },
      {
        name: 'Report',
        icon: <ImNewspaper />,
        type: 'category',
      },
      {
        name: 'Sport',
        icon: <GiDiamondTrophy />,
        type: 'category',
      },
      {
        name: 'Education',
        icon: <RiLightbulbLine />,
        type: 'category',
      },
      {
        name: 'Beauty & Cosmetics',
        icon: <GiEclipse />,
        type: 'category',
        divider: true,
      },
      { name: 'Settings', icon: <FiSettings />, type: 'menu' },
      {
        name: 'Report History',
        icon: <AiOutlineFlag />,
        type: 'menu',
      },
      { name: 'Help', icon: <FiHelpCircle />, type: 'menu' },
      {
        name: 'Send feedback',
        icon: <RiFeedbackLine />,
        type: 'menu',
      },
]

//API data
export const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '8e5b109c12mshe4af105409eadc1p11b128jsn66090ea8581b',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
