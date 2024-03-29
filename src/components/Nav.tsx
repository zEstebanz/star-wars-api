"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";   

const navLinks = [
    { title: "Home", path: "/" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 mx-auto border border-[#33353F] bg-gray-800 nav-bar">
            <div className="container flex items-center justify-between py-2 mx-auto lg:py-4 px-4">
                <Link href="/" className="text-lg md:text-3xl text-white font-semibold">
                    <div className="flex items-center cursor-pointer">
                        <h1 className="text-white">
                            <span>
                                <span className="text-white title-nav">Star Wars</span>
                            </span>
                        </h1>
                    </div>
                </Link>

                <div className="mobile-menu block">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>

            </div>

            {/* Agregar menú desplegable aquí */}
            {navbarOpen && (
                <div className="absolute top-20 left-0 w-full bg-black text-white p-6">
                    <ul className="flex flex-col items-center">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    <p className="block py-2 px-4 text-[#ADB7BE] text-xl hover:text-blue-400 font-bold">{link.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
