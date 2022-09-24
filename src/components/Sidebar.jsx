import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import logoN from "../assets/logoNew.png";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = () => (
  <div className="mt-4">
    {links.map((item) => (
      <NavLink
        onClick={() => handleClick && handleClick()}
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center text-sm font-medium text-white hover:text-cyan-400  my-8 "
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="select-none md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#221746]">
        <img src={logoN} alt="logo" className="w-full mt-4 object-contain animate-[ping_10s_linear_infinite]" />
        <NavLinks />
      </div>
      <div className="select-none absolute md:hidden  block top-6 right-3 bg-[#221746]">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-4/5 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition bg-gradient-to-tl from-white/10 to-[#221746] ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logoN} alt="logo" className="w-full  object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
