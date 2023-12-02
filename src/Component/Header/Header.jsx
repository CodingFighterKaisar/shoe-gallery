import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import logo from "../../assets/logo/site-logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, UserSignOut } = useContext(AuthContext)

  const toggleOpen = () => setOpen((cur) => !cur);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="#gallery"> Gallery</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/cart">Cart</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Showrooms
        </a>
      </Typography>
    </ul>
  );


  const handleSignOut = () => {
    UserSignOut()
      .then(() => { })
      .catch(err => {
        const errMsg = err.message;
        console.log(errMsg)
      })
  }
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 text-black-500 bg-blue-500">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography className="text-lg flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-12" alt="" />
            <span className="text-md text-blue-800 font-bold">Shoes-Gallery</span>
          </Link>
        </Typography>
        <div className="flex items-center gap-4 text-black-400">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {
            user ? <>
              {
                user?.displayName ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button color="green" size="sm">
                      Sign Out
                    </Button>
                  </>
                  :
                  <>
                    <CgProfile className="text-4xl text-red-800" />
                    <Button onClick={handleSignOut} color="green" size="sm">
                      Sign Out
                    </Button>
                  </>
              }
            </> :
              <>
                <div className="flex items-center gap-x-1">
                  <Button variant="filled" color="green" size="sm" className="hidden lg:inline-block">
                    <Link to="/login">  Log In</Link>
                  </Button>
                  <Button variant="filled" color="amber" size="sm" className="hidden lg:inline-block">
                    <Link to="/register">  Register</Link>
                  </Button>
                </div></>
          }
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <p>X</p>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div >

      <Collapse open={open} className="lg:hidden">
        <div className={open ? "block" : "hidden"}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <Link to="/login">login</Link>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className="text-black"
            >
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar >
  );
};

export default Header;
