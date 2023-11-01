"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ecorover.png" alt="logo" width={150} height={74} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={displayMenu}
      />

      {showMenu && (
        <div className="absolute w-48 h-48 bg-green-50 right-16 top-16 rounded-2xl flex flex-col justify-center p-4">
          <ul className="gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-white flex flex-col cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <h1 className="text-white cursor-pointer absolute right-3 bottom-3 transition-all hover:font-bold">Login</h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
