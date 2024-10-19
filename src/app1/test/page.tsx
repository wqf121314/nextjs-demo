import React from 'react';
import DefaultContent from "@/components/defaultContent";
import scaleSrc from "/public/Scale.jpeg";
import {Metadata} from "next";
import {notFound} from "next/navigation";
export const metadata: Metadata = {
    title: 'Scale',
}
function Page() {
    notFound()
    return (
        <div></div>
);
}

export default Page;
