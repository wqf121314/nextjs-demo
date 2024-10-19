import React from 'react';
import type {Metadata} from 'next'
import BlogList from "@/components/blogList";

export const metadata:Metadata={
    title:'Blog List'
}
function Page() {
    return (
        <BlogList/>
    );
}

export default Page;
