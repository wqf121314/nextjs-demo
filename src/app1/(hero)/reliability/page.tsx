import React from 'react';
import DefaultContent from "@/components/defaultContent";
import reliabilitySrc from "/public/reliability.jpeg";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Reliability',
}
function Page() {
    return (
    <DefaultContent imgUrl={reliabilitySrc} altText="Reliability Image" title="Reliability Page" content="Welcome to Reliability Page" />
);
}

export default Page;
