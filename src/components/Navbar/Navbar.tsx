"use client"
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navLinks = <>
        <Link href="#about" >About</Link>
        <Link href="#skills" >Skills</Link>
        <Link href="#projects" >Projects</Link>
        <Link href="#contact" >Contact</Link>
    </>
    return (
        <div className="p-5 bg-[#eef6ff] sticky top-0 z-10 shadow-md shadow-[#374c4438]">
            <div className="flex justify-between items-center container mx-auto">
                <div className="w-4/12">
                    <Link href="#">
                        {/* <figure className="w-[110px] overflow-hidden">
                            <Image src={logoImage} alt="Kitzu" />
                        </figure> */}
                        <h2>Logo</h2>
                    </Link>
                </div>
                <div className="w-8/12 hidden md:block">
                    <div className="flex justify-end items-center">
                        <ul>
                            <li className="flex gap-8">
                                {navLinks}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:hidden flex justify-end">
                    <div className="relative">
                        <FaBars onClick={() => setShowMenu(!showMenu)} className="text-xl" />
                        <div className={`${showMenu ? "right-0" : "hidden -right-[100px]"} absolute top-12 backdrop-blur-3xl p-5 w-36 rounded-md border border-[bg-[#eef6ff] ]`}>
                            <ul className="flex flex-col gap-5">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;