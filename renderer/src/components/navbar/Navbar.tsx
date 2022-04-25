import { FC, useState } from 'react';
import classNames from 'classnames';
import { NavbarBrand } from './NavbarBrand';
import { NavbarCollapse } from './NavbarCollapse';
import { NavbarContext } from './NavbarContext';
import { NavbarLink } from './NavbarLink';
import { NavbarToggle } from './NavbarToggle';

export type NavbarCompnentProps = {
  menuOpen?: boolean;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
};

const NavbarComponent: FC<NavbarCompnentProps> = ({ children, menuOpen, fluid, rounded, border }) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav
        className={classNames('border-gray-200 shadow-md px-2 py-2.5 dark:border-[#1e1e1e] bg-[#1e1e1e] sm:px-4 pt-3', {
          rounded: rounded,
          border: border,
        })}
      >
        <div
          className={classNames('grid grid-cols-2 md:grid-cols-3', {
            container: !fluid,
          })}
        >
          {children}

          <div className='hidden md:block order-3 text-right'>
            <button title="search" className="h-8 w-8 mx-2 text-white rounded-xl bg-[#1e1e1e] border-[#383838] hover:text-[#212121] border px-[6px]">
              <svg id="notification" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path id="Vector" d="M8.046,0a6,6,0,0,0-6,6V8.89a4.778,4.778,0,0,1-.57,2.06L.326,12.86a1.919,1.919,0,0,0,1.08,2.93,20.921,20.921,0,0,0,13.27,0,2,2,0,0,0,1.08-2.93l-1.15-1.91a4.91,4.91,0,0,1-.56-2.06V6A6.018,6.018,0,0,0,8.046,0Z" transform="translate(3.974 2.91)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5" />
                <path id="Vector-2" data-name="Vector" d="M3.7,1.26a6.054,6.054,0,0,0-.96-.2A6.754,6.754,0,0,0,0,1.26a1.988,1.988,0,0,1,3.7,0Z" transform="translate(10.17 1.94)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                <path id="Vector-3" data-name="Vector" d="M6,0A3.009,3.009,0,0,1,3,3,3.011,3.011,0,0,1,.88,2.12,3.011,3.011,0,0,1,0,0" transform="translate(9.02 19.06)" fill="none" stroke="#fff" strokeWidth="1.5" />
                <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
              </svg>
            </button>



            <button title="search" className="h-8 w-8 mx-2 text-white rounded-xl bg-[#1e1e1e] border-[#383838] hover:text-[#212121] border px-[6px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <g id="more" transform="translate(-556 -188)">
                  <path id="Vector-5" d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z" transform="translate(559 198)" fill="none" stroke="#fff" strokeWidth="1.5" />
                  <path id="Vector-6" data-name="Vector" d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z" transform="translate(573 198)" fill="none" stroke="#fff" strokeWidth="1.5" />
                  <path id="Vector-7" data-name="Vector" d="M2,0A2,2,0,1,0,4,2,2.006,2.006,0,0,0,2,0Z" transform="translate(566 198)" fill="none" stroke="#fff" strokeWidth="1.5" />
                  <path id="Vector-8" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(556 188)" fill="none" opacity="0" />
                </g>
              </svg>

            </button>
          </div>
        </div>
      </nav>
    </NavbarContext.Provider>

  );
};

NavbarComponent.displayName = 'Navbar';
NavbarBrand.displayName = 'Navbar.Brand';
NavbarCollapse.displayName = 'Navbar.Collapse';
NavbarLink.displayName = 'Navbar.Link';
NavbarToggle.displayName = 'Navbar.Toggle';

export const Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle,
});
