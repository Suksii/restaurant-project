import React, {useEffect, useState} from "react";
import { navbarItems } from "../constants/navbarItems.js";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/restaurant1.jpg";
import logo from "../assets/images/logo.jpg";
import { BiMenu, BiX } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState('');
    const scrollToTop = () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
    }
    const handleMenuAnimation = (slide) => {
        if (slide === 'slide-up') {
            setMenuAnimation('slide-up');
        } else if (slide === 'slide-down') {
            setMenuAnimation('slide-down');
        }
        setToggle(prevState => !prevState);
    }

    const isMobile = useMediaQuery({minWidth: 1060});
    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) {
                document.body.style.overflowY = "scroll";
            }
            else
            document.body.style.overflowY = toggle ? "hidden" : "scroll";
        }
        handleScroll();
        return () => {
            document.body.style.overflowY = "scroll";
        }
        }, [toggle, isMobile]
    )

    return (
        <div className="bg-cover bg-no-repeat bg-bottom h-[90vh]" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className=" fixed w-full bg-black bg-opacity-80 z-10 items-center md:flex hidden">
                <div className="my-5 mr-[18vw]">
                    <img src={logo} alt="logo" className="w-[50px] h-[50px] rounded-full ml-[2rem] cursor-pointer" onClick={scrollToTop} />
                </div>
                <ul className="flex gap-[8vw]">
                    {navbarItems.map((item) => {
                        return (
                            <li key={item.id} className="list-none">
                                <Link to={item.path} className="text-crimson text-xl font-bold hover:text-golden font-butler_regular">{item.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="md:hidden">
                <div className="absolute left-0 top-0">
                    <img src={logo} alt="logo" className="w-[50px] h-[50px] rounded-full ml-[2rem] mt-[1rem] cursor-pointer" />
                </div>
                {toggle ? <BiX className="text-crimson text-[35px] mr-[1rem] mt-[1rem] cursor-pointer absolute right-0" onClick={() => handleMenuAnimation('slide-up')}/>
                        : <BiMenu className="text-crimson text-[35px] mr-[1rem] mt-[1rem] cursor-pointer absolute right-0" onClick={() => handleMenuAnimation('slide-down')}/>}
                <div className={`${toggle ? 'flex' : 'hidden'} justify-center h-fit bg-gradient-to-br from-black to-gray-600 text-center py-10 ${menuAnimation}`} onAnimationEnd={()=> setMenuAnimation('')} >
                    <ul className="flex gap-[4vw] flex-col">
                        {navbarItems.map((item) => {
                            return (
                                        <Link to={item.path} key={item.id}
                                              className="text-crimson w-[100vw] text-xl font-bold font-butler_regular"
                                              onClick={() => setToggle(prevState => !prevState)}>
                                            <li
                                                className="list-none w-[100vw] mt-[2rem] py-[1.8rem] hover:bg-gray-700 hover:shadow-2xl hover:text-golden">
                                                {item.name}
                                            </li>
                                        </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;