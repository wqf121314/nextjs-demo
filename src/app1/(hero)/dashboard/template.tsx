"use client"
import React from "react";

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
    const [count, setCount] = React.useState(0);
    return <div className='border-2 border-dashed border-black p-4 mx-auto mt-10'>
        <h3>Dashboard Template {count}</h3>
        <button className='bg-black text-white p-2 my-4 rounded-md' onClick={() => setCount(count + 1)}>Increment
        </button>
        {children}
    </div>
}
