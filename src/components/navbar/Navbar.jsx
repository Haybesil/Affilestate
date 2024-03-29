import { React, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 w-full z-10 bg-white  pt-[20px]">
      <nav className="sticky flex justify-around items-center">
        <h1 className="text-[40px] font-[500] text-primary-AffilestateBlue60">
          BLUES
        </h1>

        <ul className="hidden gap-[20px] md:flex">
          <li>
            <Link
              to="/"
              className="text-[18px] font-[500] text-primary-Black50 hover:text-primary-AffilestateBlue40 hover:border-b-2 border-gray-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[18px] font-[500] text-primary-Black50 hover:text-primary-AffilestateBlue40 hover:border-b-2 border-gray-900"
            >
              Agents
            </Link>
          </li>
          <li>
            <Link
              to="/property"
              className="text-[18px] font-[500] text-primary-Black50 hover:text-primary-AffilestateBlue40 hover:border-b-2 border-gray-900"
            >
              Our Properties
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[18px] font-[500] text-primary-Black50 hover:text-primary-AffilestateBlue40 hover:border-b-2 border-gray-900"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <ol className="hidden md:flex gap-[30px]">
          <li>
            <Link
              to='/signin'
              className="text-[18px] text-primary-AffilestateBlue60 border border-primary-AffilestateBlue60 border-solid py-[10px] px-[15px] hover:bg-primary-AffilestateBlue60 hover:text-white"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className="text-[18px] text-primary-AffilestateBlue60 border border-primary-AffilestateBlue60 border-solid py-[10px] px-[15px] hover:bg-primary-AffilestateBlue60 hover:text-white"
            >
              Sign Up
            </Link>
          </li>
        </ol>

        <RxHamburgerMenu
          size={50}
          className="block md:hidden text-primary-AffilestateBlue60 hover:cursor-[pointer]"
          onClick={toggle}
        />

        {showModal && (
          <>
            <div className="overflow-x-hidden fixed top-0 right-0 w-[70%] h-full bg-primary-AffilestateBlue110   flex justify-center items-center z-50">
              <div className="text-center">
                <ul className="fixed top-[5rem] left-[12rem] gap-[50px] flex flex-col">
                  <li>
                    <Link to="/" className="modal">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="modal">
                      Agents
                    </Link>
                  </li>
                  <li>
                    <Link to="/property" className="modal">
                      Our Properties
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="modal">
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <ol className="fixed top-[20rem] left-[12rem] flex flex-col gap-[50px] mt-[10rem]">
                  <li>
                    <Link
                      to="/signin"
                      className="text-[20px] text-white py-[10px] px-[33px] hover:bg-primary-AffilestateBlue60 hover:text-white"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="text-[20px] text-white py-[10px] px-[30px] hover:bg-primary-AffilestateBlue60 hover:text-white"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ol>
              </div>
              <div>
                <IoClose
                  size="40"
                  color="white"
                  onClick={closeModal}
                  className="fixed top-0 right-[0.3rem] ml-[28vw] bg-primary-AffilestateBlue110  rounded mt-[10px]"
                />
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
