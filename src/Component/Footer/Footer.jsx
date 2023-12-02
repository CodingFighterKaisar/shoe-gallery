import { Typography } from "@material-tailwind/react";
import React from "react";
import logo from "../../assets/logo/site-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="relative w-full bg-orange-200 pt-10">
        <div className="mx-auto w-7xl px-6">
          <div className="flex justify-around items-center gap-4">
            <Typography className="text-lg flex justify-start items-center">
              <img src={logo} className="w-12" alt="" />
              <span className="text-md text-blue-800 font-bold">Shoes-Gallery</span>
            </Typography>
            <div className="grid grid-cols-5 justify-between gap-16">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-3 font-medium opacity-40"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear} <a href="https://material-tailwind.com/"></a>
              . All Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <FaFacebook className="hover:text-blue-400" />
              <FaInstagram className="hover:text-red-400" />
              <CiTwitter className="hover:text-blue-400" />
              <CiLinkedin className="hover:text-blue-700" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
