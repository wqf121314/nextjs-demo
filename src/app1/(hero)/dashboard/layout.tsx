"use client"
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

const linkData=[
    {name:'About',path:'/dashboard/about'},
    {name:'Settings',path:'/dashboard/settings'},
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [count, setCount] = React.useState(0);
    const pathname= usePathname();
    console.log(pathname)
    return (
      <div className='border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10' >
          <div className='flex gap-4 font-bold text-lg mb-4'>
              {/*<Link className={pathname==='/dashboard/about'?'text-purple-500':''} href='/dashboard/about'>About</Link>*/}
              {/*<Link className={pathname==='/dashboard/settings'?'text-purple-500':''} href='/dashboard/settings'>Settings</Link>*/}
              {linkData.map((link)=>(
                  <Link key={link.path} className={pathname===link.path?'text-purple-500':''} href={link.path}>{link.name}</Link>
              ))}
          </div>
          <h2>Dashboard Layout {count}</h2>
          <button className='bg-black text-white p-2 my-4 rounded-md' onClick={()=>setCount(count+1)}>Increment</button>
        {children}
      </div>
  );
}
