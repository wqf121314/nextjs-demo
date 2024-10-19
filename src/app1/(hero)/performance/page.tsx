import React from 'react';
import DefaultContent from "@/components/defaultContent";
import performanceSrc from "/public/performance.jpeg";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Performance',
}
export default function Page() {
    return (
    <DefaultContent imgUrl={performanceSrc} altText="Performance Image" title="Performance Page" content="Welcome to Performance Page" />
);
}

