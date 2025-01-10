"use client"
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();
    // Check for token in cookies
    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    const logOutHandler = () => {
        Cookies.remove("authToken");
        setIsLoggedIn(false);
        router.push("/login");
    }
    const navLinks = <>
        <Link href="/flight" >Flights</Link>
        <Link href="/addflight" >Add Flight</Link>
        {isLoggedIn ? <button onClick={logOutHandler}>Log Out</button> : <Link href="/login" >Log In</Link>}
    </>
    return (
        <div className="p-5 bg-[#eef6ff] sticky top-0 z-10 shadow-md shadow-[#374c4438]">
            <div className="flex justify-between items-center container mx-auto">
                <div className="w-4/12">
                    <Link href="/">
                        <h2 className="font-bold lg:text-xl md:block hidden">Flight Management System</h2>
                        <h2 className="font-bold text-xl block md:hidden">F M S</h2>
                    </Link>
                </div>
                <div className="w-8/12 hidden md:block">
                    <div className="flex justify-end items-center">
                        <ul>
                            <li className="flex gap-4">
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