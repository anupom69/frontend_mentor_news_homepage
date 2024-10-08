"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center my-7 mx-3 relative">
      <Link href={`/`}>
        <Image src="/logo.svg" width={50} height={50} alt="logo" />
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src="/icon-menu.svg" width={40} height={40} alt="menu" />
        </button>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-20 p-5 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="mb-20 block ml-auto" onClick={() => setIsOpen(!isOpen)}>
            <Image
              src="/icon-menu-close.svg"
              width={30}
              height={30}
              alt="close menu"
            />
          </button>
          <ul className="text-dark-grayish-blue flex flex-col gap-5">
            <li>
              <Link
                href="/"
                className="hover:text-soft-orange"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/new"
                className="hover:text-soft-orange"
                onClick={() => setIsOpen(false)}
              >
                New
              </Link>
            </li>
            <li>
              <Link
                href="/popular"
                className="hover:text-soft-orange"
                onClick={() => setIsOpen(false)}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                href="/trending"
                className="hover:text-soft-orange"
                onClick={() => setIsOpen(false)}
              >
                Trending
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-soft-orange"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-dark-grayish-blue">
        <li>
          <Link href="/" className="hover:text-soft-orange">
            Home
          </Link>
        </li>
        <li>
          <Link href="/new" className="hover:text-soft-orange">
            New
          </Link>
        </li>
        <li>
          <Link href="/popular" className="hover:text-soft-orange">
            Popular
          </Link>
        </li>
        <li>
          <Link href="/trending" className="hover:text-soft-orange">
            Trending
          </Link>
        </li>
        <li>
          <Link href="/categories" className="hover:text-soft-orange">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
