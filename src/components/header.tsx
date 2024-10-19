"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const linkData=[
    {name:'Performance',path:'/performance'},
    {name:'Reliability',path:'/reliability'},
    {name:'Scale',path:'/scale'},
    {name:'DashBoard',path:'/dashboard'},
];

export default function Header() {
    const pathname = usePathname();
    return (
        <div className='absolute w-full z-10'>
            {/*<div>RootLayout</div>*/}
            <div className='flex justify-between container mx-auto text-white p-8 items-center'>
                <Link className='text-3xl font-bold' href="/">Home</Link>
                <div className='text-xl space-x-4'>
                    {/*<Link className={pathname==='/dashboard'?'text-purple-200':''} href="/dashboard">DashBoard</Link>*/}
                    {/*<Link className={pathname==='/performance'?'text-purple-200':''} href="/performance">Performance</Link>*/}
                    {/*<Link className={pathname==='/reliability'?'text-purple-200':''} href="/reliability">Reliability</Link>*/}
                    {/*<Link className={pathname==='/scale'?'text-purple-200':''} href="/scale">Scale</Link>*/}
                    {linkData.map((link)=>(
                        <Link key={link.path} className={pathname===link.path?'text-purple-500':''} href={link.path}>{link.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
