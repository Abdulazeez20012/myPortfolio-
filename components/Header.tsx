import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const HEADER_OFFSET = 80; // Offset for sticky header height

const Header: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const mainEl = document.querySelector('main');
    const handleScroll = () => {
      if (mainEl) {
        setScrolled(mainEl.scrollTop > 20);
      }
    };
    
    mainEl?.addEventListener('scroll', handleScroll);
    return () => mainEl?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string, title: string) => {
    setActive(title);
    setToggle(false);
    
    const main = document.querySelector('main');
    const element = document.getElementById(id);
    
    if (main && element) {
        main.scrollTo({
            top: element.offsetTop - HEADER_OFFSET,
            behavior: 'smooth'
        });
    }
  };

  const handleLogoClick = () => {
      setActive('');
      document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`w-full flex items-center py-4 fixed top-0 z-20 px-6 sm:px-16 transition-all duration-300 ${
        scrolled ? 'bg-[#050816]/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p className="text-white text-[18px] font-bold">
            Abdul Azeez &nbsp;<span className="hidden sm:inline-block">| Software Engineer</span>
          </p>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-gray-400'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => handleLinkClick(link.id, link.title)}
            >
              {/* No href needed as we're using scrollIntoView */}
              <span >{link.title}</span>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)} aria-label="Menu">
            {toggle ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-gray-900/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-gray-400'
                  } font-medium cursor-pointer text-[16px]`}
                  onClick={() => handleLinkClick(link.id, link.title)}
                >
                   <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;