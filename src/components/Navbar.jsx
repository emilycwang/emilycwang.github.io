import React from 'react';

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <nav className="navbar header w-full fixed top-0 left-0 z-30">
      <div className="flex items-center justify-between w-full px-8 ">
        <div
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg"
          style={{ marginRight: '32px' }}
        >
          <div
            className="blue-gradient_text text-1xl font-bold"
            style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
          >
            EW
          </div>
        </div>

        <ul className="flex gap-8">
          <li><button onClick={() => scrollToSection(refs.homeRef)}>Home</button></li>
          <li><button onClick={() => scrollToSection(refs.aboutRef)}>About</button></li>
          <li><button onClick={() => scrollToSection(refs.projectsRef)}>Projects</button></li>
          <li><button onClick={() => scrollToSection(refs.contactRef)}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
