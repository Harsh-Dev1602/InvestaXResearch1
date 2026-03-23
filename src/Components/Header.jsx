import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, ChevronRight } from 'lucide-react';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp, } from "react-icons/io5";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Investor Charter', path: '/investor-charter' },
  { name: 'Complaint Board', path: '/complaint-board' },
  { name: 'Services', path: '/services' },
  { name: "MITC", path: "/mitc" },
  { name: "Pricing", path: "/pricing" },
  { name: "Payment", path: "/payment" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      {!scrolled && (
        <div className="py-2 text-gray-200  bg-linear-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-6 flex justify-between items-center text-xs md:text-[15px] font-medium">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-6">
              <span className="flex items-center gap-1.5 transition cursor-default">
                <IoLocationSharp /> 1, Tilehri, Bilehri, Jabalpur (M.P.) 482020
              </span>
              <a href="mailto:info@placiddigital.in" className="flex items-center gap-1.5 transition">
                <MdEmail /> info@investax.in

              </a>
            </div>
            <div className="flex items-center gap-1 lg:gap-4">
              <a className=" bg-gray-950/10 rounded-md p-1 transition"><FaFacebookF /></a>
              <a className=" bg-gray-950/10 rounded-md p-1 transition"><FaInstagram /></a>
              <a className=" bg-gray-950/10 rounded-md p-1 transition"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      )}
      <header className={`fixed ${ scrolled ? "top-0 left-0" : " top-10 left-0"}  right-0 z-[100] transition-all duration-300 ${scrolled || menuOpen
        ? 'bg-[#0f0821]/95 backdrop-blur-md border-b border-white/10 py-3'
        : 'bg-transparent py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer relative z-50">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              <span className="text-purple-400">Investa-</span>X
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] rounded-lg transition-all">
              GET KYC
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- Mobile Menu Overlay --- */}
        <div className={`fixed inset-0 bg-[#0f0821] transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} style={{ top: '0', height: '100vh' }}>

          <div className="flex flex-col h-full pt-24 px-6 pb-10">
            <div className="flex flex-col gap-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-4 text-xl font-semibold text-gray-200 border-b border-white/5 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                  <ChevronRight size={18} className="text-gray-600" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg">
                GET KYC NOW
              </button>
              <p className="text-center text-gray-500 text-xs mt-4">
                SEBI Registered Research Analyst: INH000022792
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}