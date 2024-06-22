import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/imgs/vietfuture-only-logo.png';
import TextLogo from '../../assets/imgs/vietfuture-only-text.png';
import { adminNavItems } from '../../data/mockData';
import {
  faChevronLeft,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);

  return (
    <div
      className={`font-open-sans bg-mint h-screen p-5 pt-8 relative z-50 ${
        open ? 'w-[300px]' : 'w-24'
      } duration-300`}
    >
      {/* Button expanded menu */}
      <div className="w-8 h-8 rounded-full bg-white absolute -right-3 top-9 border border-mint cursor-pointer">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={`bg-white text-mint text-2xl absolute right-2 top-[3px] ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Logo VietFuture and Text "VietFuture Award 2024"*/}
      <div className="inline-flex">
        <img src={Logo} alt="VietFuture Logo" className="w-14" />
        <img
          src={TextLogo}
          alt="VietFuture Text"
          className={`w-20 ${!open && 'scale-0'} duration-300`}
        />
      </div>

      {/* Sidebar menu */}
      <ul className="pt-10">
        {adminNavItems.map((menu, index) => (
          <React.Fragment>
            <NavLink to={menu.path}>
              <li
                key={index}
                className={`text-white text-lg font-semibold flex items-center gap-x-4 cursor-pointer p-2 py-3 hover:bg-baby-blue rounded-lg mt-3 ${
                  menu.spacing ? 'mt-9' : 'mt-2'
                }`}
                onClick={() => setActiveMenuIndex(index)}
              >
                <div className="w-6 h-6 flex justify-center items-center pl-4">
                  <span className="text-2xl block float-left">{menu.icon}</span>
                </div>
                <span className={`text-base flex-1 ${!open && 'hidden'} pl-2`}>
                  {menu.title}
                </span>

                {/* Submenu */}
                {menu.submenu && open && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`  ${
                      activeMenuIndex === index && submenuOpen && 'rotate-180'
                    }`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
            </NavLink>

            {menu.submenu &&
              activeMenuIndex === index &&
              submenuOpen &&
              open && (
                <ul>
                  {menu.sublinks.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-white text-base flex items-center gap-x-4 cursor-pointer p-2 px-5 py-3 hover:bg-baby-blue rounded-lg"
                    >
                      <NavLink to={submenuItem.path}>
                        {submenuItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
