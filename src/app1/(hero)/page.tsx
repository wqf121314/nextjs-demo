import React from 'react';
import { Metadata } from 'next'
import homeSrc from '/public/home.jpeg'
import DefaultContent from "@/components/defaultContent";

export const metadata: Metadata = {
    title: 'Home',
}

export default function Page() {
    return (
        <DefaultContent imgUrl={homeSrc} altText="Home Image" title="Home Page" content="Welcome to Home Page" />
    );
}
