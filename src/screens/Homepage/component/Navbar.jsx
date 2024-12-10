import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as TrackOrder } from "../../../assets/track_order.svg";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";

const Navbar = ({ changeColor = false }) => {
  const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [isOfficeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [isCompaniesDropdownOpen, setCompaniesDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const contactDropdownRef = useRef(null);
  const officeDropdownRef = useRef(null);
  const companiesDropdownRef = useRef(null);
  const sidebarRef = useRef(null);

  const contactTimeoutRef = useRef(null);
  const officeTimeoutRef = useRef(null);
  const companiesTimeoutRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const clearTimeoutRef = (ref) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  const handleClickOutside = (event) => {
    if (
      contactDropdownRef.current &&
      !contactDropdownRef.current.contains(event.target)
    ) {
      clearTimeoutRef(contactTimeoutRef);
      setContactDropdownOpen(false);
    }
    if (
      officeDropdownRef.current &&
      !officeDropdownRef.current.contains(event.target)
    ) {
      clearTimeoutRef(officeTimeoutRef);
      setOfficeDropdownOpen(false);
    }
    if (
      companiesDropdownRef.current &&
      !companiesDropdownRef.current.contains(event.target)
    ) {
      clearTimeoutRef(companiesTimeoutRef);
      setCompaniesDropdownOpen(false);
    }
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownWithDelay = (
    ref,
    isOpen,
    setOpen,
    timeoutRef,
    links,
    buttonText
  ) => (
    <div
      className="relative group"
      ref={ref}
      onMouseEnter={() => {
        clearTimeoutRef(timeoutRef);
        setOpen(true);
      }}
      onMouseLeave={() => {
        timeoutRef.current = setTimeout(() => setOpen(false), 100); // 300ms delay
      }}
    >
      <button className="relative group text-base">{buttonText}</button>
      {isOpen && <DropdownMenu links={links} />}
    </div>
  );

  const contactLinks = [
    { href: "/contact-us", text: "Contact Us" },
    { href: "/faq", text: "FAQ's" },
    { href: "/book-frieghts", text: "Book a Freight" },
  ];

  const officeLinks = [
    { href: "/global-network", text: "Global Network" },
    { href: "/our-clients", text: "Our Clients" },
    { href: "/meet-crew", text: "Meet the Crew" },
    { href: "/available-positions", text: "Available Positions" },
    { href: "/blog", text: "Blog" },
  ];

  const companiesLinks = [
    { href: "/ufs", text: "United Freight Solutions" },
    { href: "/aerofly", text: "AEROFLY Aviation" },
    { href: "/khmergate", text: "Khmergate" },
    { href: "/brand-pulse", text: "Brandpulse" },
  ];

  return (
    <>
      <nav
        className={`bg-transparent mx-auto flex items-center border-b-2 ${
          changeColor ? "border-white" : "border-[#031c3f]"
        } ${changeColor ? "text-white" : "text-[#031c3f]"} 
         absolute top-6 w-full z-10 font-kollektif font-bold text-sm`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-[90%] flex justify-between items-center py-2 px-6 border-r-2">
            {/* Logo */}
            <Logo className="ml-4" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-10">
              <Link to="/" className="relative group text-base">
                Home
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="relative group text-base">
                About
                <span className="absolute top-[-8px] left-0 w-0 h-[3px] bg-[#c3a05f] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Companies Dropdown */}
              {dropdownWithDelay(
                companiesDropdownRef,
                isCompaniesDropdownOpen,
                setCompaniesDropdownOpen,
                companiesTimeoutRef,
                companiesLinks,
                "Companies"
              )}

              {/* Office Dropdown */}
              {dropdownWithDelay(
                officeDropdownRef,
                isOfficeDropdownOpen,
                setOfficeDropdownOpen,
                officeTimeoutRef,
                officeLinks,
                "Office"
              )}

              {/* Contact Dropdown */}
              {dropdownWithDelay(
                contactDropdownRef,
                isContactDropdownOpen,
                setContactDropdownOpen,
                contactTimeoutRef,
                contactLinks,
                "Contact"
              )}
            </div>
          </div>

          {/* Hamburger Menu - Always Visible */}
          <div className="flex items-center space-x-4">
            <TrackOrder className="hidden md:block" />
            <button
              className="bg-[#031c3f] p-2 text-white rounded"
              onClick={toggleSidebar}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile View */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 w-full md:w-2/5 h-full bg-[#031c3f] text-white transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } z-20`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-white"
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link to="/" className="text-xl font-bold" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/about" className="text-xl font-bold" onClick={toggleSidebar}>
            About
          </Link>
          <button
            className="text-xl font-bold"
            onClick={() => setCompaniesDropdownOpen(!isCompaniesDropdownOpen)}
          >
            Companies
          </button>
          {isCompaniesDropdownOpen && <DropdownMenu links={companiesLinks} />}
          <button
            className="text-xl font-bold"
            onClick={() => setOfficeDropdownOpen(!isOfficeDropdownOpen)}
          >
            Office
          </button>
          {isOfficeDropdownOpen && <DropdownMenu links={officeLinks} />}
          <button
            className="text-xl font-bold"
            onClick={() => setContactDropdownOpen(!isContactDropdownOpen)}
          >
            Contact
          </button>
          {isContactDropdownOpen && <DropdownMenu links={contactLinks} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
