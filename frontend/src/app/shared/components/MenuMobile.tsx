'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "./MenuIcon";

export default function MenuMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");

  const menuItems = [
    { label: "Calendário", path: "/calendar" },
    { label: "Clientes", path: "/clients" },
    { label: "Faturamento", path: "/revenue" },
  ];

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      <MenuIcon onClick={toggleMenu} />

      <div
        className={`fixed top-0 left-0 h-[100%] bg-white shadow-md transition-transform duration-300 z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } w-[70vw] max-w-sm`}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
          <button
            className="text-2xl text-gray-600"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {menuItems.map(({ label, path }) => (
            <MenuItem
              key={path}
              href={path}
              label={label}
              isActive={currentPath === path}
              onClick={toggleMenu}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

interface MenuItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, isActive, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className={`block px-4 py-2 rounded-lg text-sm font-medium ${
      isActive
        ? "bg-purple-100 text-purple-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`}
  >
    {label}
  </Link>
);
