import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo2.png'
 

const Navbar = () => {
    const[nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center
    px-4 bg-black text-orange-500'>
        <div>
            <img src={Logo} alt="#" style={{width:'80px'}}/>
        </div>
        {/*dopdown-menu*/}
        <div>
            <ul className=' hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>

        {/*Menu Icon for small navbar*/}
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav? <FaBars/> : <FaTimes/>}
        </div>
        {/*mobile-joint*/}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl'>Home</li>
            <li className='py-6 text-3xl'>About</li>
            <li className='py-6 text-3xl'>Skills</li>
            <li className='py-6 text-3xl'>Projects</li>
            <li className='py-6 text-3xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar