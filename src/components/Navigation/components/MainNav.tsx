import React from "react";
import { NavLink } from "react-router-dom";

import useAppStore from "../../../store/app";

import { Container } from "../../Layouts";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

interface MainNavType {}

const MainNav: React.FC<MainNavType> = (props) => {
  const navigation = useAppStore().navigation.main;

  return (
    <div className="bg-app-dark-gray text-app-white">
      <Container>
        <div className="flex items-center h-12">
          <figure className="w-24 border-r border-r-app-gray pr-4">
            <img
              src="./assets/logo/logo-big-white.webp"
              alt="ASOS"
              className="w-full h-full object-contain object-center"
            />
          </figure>

          <div className="flex justify-between items-center w-full h-full px-5 gap-9 ">
            <ul className="h-full flex items-center gap-4 uppercase font-semibold text-app-base">
              {navigation.map((route) => (
                <li className="h-full" key={route.route}>
                  <NavLink
                    to={route.route}
                    className={({ isActive }) =>
                      (isActive ? "bg-app-gray" : "") +
                      ` flex items-center h-full px-3`
                    }
                  >
                    {route.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex w-full h-8 bg-app-white text-app-black rounded-2xl overflow-hidden">
              <input
                type="text"
                className="w-full bg-transparent outline-none border-none px-2"
              />
              <button className="w-10 flex justify-center items-center ">
                <BiSearch />
              </button>
            </div>

            <div className="flex gap-3">
              <button>
                <FaRegUser />
              </button>
              <button>
                <AiOutlineHeart />
              </button>
              <button>
                <BsBag />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainNav;
