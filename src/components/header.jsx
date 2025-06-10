// components/Header.js
"use client";

import Image from "next/image";
import clsx from "clsx";
import "../styles/Header.css";
import Link from "next/link";

export default function Header({ isVisible }) {
  return (
    <div   className={clsx("Navigation", {
        visible: isVisible,
      })}>
      <nav className="flex justify-around items-center p-6 bg-white text-black shadow-md fixed w-full top-0 left-0 z-50">
        <div>
          <Image
            src="/images/logo_dark@2x.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#screenshots">ScreenShots</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
