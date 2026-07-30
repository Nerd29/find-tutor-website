"use client";

import { Avatar, Button } from '@heroui/react';
import { useState, useEffect } from "react";
import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { ModeToggle } from './ModeToggle';


const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
            router.refresh();
          }
        }
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav
  className={`sticky top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-2"
      : "bg-slate-50 dark:bg-slate-950 py-4"
  }`}
>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
             <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                MediQueue
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink href="/" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </NavLink>
            <NavLink href="/tutors" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Tutors
            </NavLink>
            
            {/* Scroll Section Links */}
            <NavLink href="/#featured" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
              Featured
            </NavLink>
            <NavLink href="/#about-us" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
              About Us
            </NavLink>

            {/* Protected Nav Links */}
            {user && (
              <>
                <NavLink href="/add-tutors" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
                  Add Tutors
                </NavLink>
                <NavLink href="/my-tutors" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
                  My Tutors
                </NavLink>
                <NavLink href="/my-booked-sessions" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
                  My Booked Sessions
                </NavLink>
              </>
            )}
          </div>
         

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-3">
                {/* Theme Toggle */}
                <ModeToggle />
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 transition-colors border border-transparent">
                  <Image
                    width={40}
                    height={40}
                    src={user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold truncate max-w-[100px]">{user?.name}</p>
                    <p className="text-[10px] text-slate-500">Student</p>
                  </div>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="font-bold text-sm">Welcome back!</p>
                    <p className="text-xs truncate text-slate-500">{user?.email}</p>
                  </div>
                  {/* <Link href="/dashboard" className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                  <Link href="/settings" className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors">
                    <User className="w-4 h-4" /> Settings
                  </Link> */}
                  <button 
                    type="button"
                    onClick={handleLogOut} 
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left w-full"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
                  Log In
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link href="/" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/tutors" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>Tutors</Link>
          <Link href="/#featured" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>Featured</Link>
          <Link href="/#about-us" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>About Us</Link>

          {user && (
            <>
              <Link href="/add-tutors" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>Add Tutors</Link>
              <Link href="/my-tutors" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>My Tutors</Link>
              <Link href="/my-booked-sessions" className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(false)}>My Booked Sessions</Link>
            </>
          )}

          <div className="pt-4 border-t border-slate-200 mt-4">

            <div className="px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">Theme</span>
        <ModeToggle />
      </div>
            {user ? (
              <div className="flex flex-col gap-2">
                <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Account</p>
                <button 
                  onClick={handleLogOut} 
                  className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                
          {/* DARK MODE TOGGLE */}
          {/* <ThemeToggle /> */}
                <Link href="/login">
                  <Button variant="bordered" className="rounded-xl w-full">Login</Button>
                </Link>
                <Link href="/register">
                  <Button color="primary" className="rounded-xl w-full">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;