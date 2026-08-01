'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children,onClick}) => {

    const pathName=usePathname()
    const isActive=href===pathName
    return (
       <Link href={href} className={`${isActive ? 'font-bold text-blue-600':'text-slate-700 hover:text-blue-600'}`} onClick={onClick}>
         {children}
       </Link>
    );
};

export default NavLink;