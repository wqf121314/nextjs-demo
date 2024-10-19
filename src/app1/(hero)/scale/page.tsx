import React from 'react';
import DefaultContent from "@/components/defaultContent";
import scaleSrc from "/public/Scale.jpeg";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'Scale',
}
function Page() {
    return (
    <DefaultContent imgUrl={scaleSrc} altText="Scale Image" title="Scale Page" content="Welcome to Scale Page" />
);
}

export default Page;
