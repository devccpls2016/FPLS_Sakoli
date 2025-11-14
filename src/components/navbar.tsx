"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Why Podar", path: "/why" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <nav className="bg-[#f8f8f8] text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 ">
          <Image
            src="/asset/logs/logo.jpg"
            alt="School Logo"
            width={120}
            height={40}
            className="h-12 w-12"
          />
          <span className="font-bold text-[#843d8d] text-xl">FUTURE PODAR LEARN SCHOOL, SAKOLI</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#a86db0] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200 hover:text-[#a86db0]"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
          <Link href="/applyform">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-white mt-2 p-4 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#a86db0] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-200 hover:text-[#a86db0]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
          <Link href="/contact" passHref>
            <button
              onClick={() => setMenuOpen(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Apply Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}
